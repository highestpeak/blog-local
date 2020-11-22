// import { closeSync } from 'fs'
// import { git } from 'isomorphic-git'
// import { fs } from 'fs'
// https://github.com/nicoespeon/gitgraph.js
import {
  gitDiff_nameStatus, execSyncGitCommond,
  allTrackedCommond, allUntrackedCommond
} from './ExecGitCommond'

var targetDir = 'E:/_data/testDir/BlogLocalTest'
// 软件操作的最后一次 commit
var lastCommitAppKnow = '9c6e005dd6c2ee'

/**
 * 文件状态
 * 不区分 staged 状态
 */
class Status {
  constructor() {
    this.unmodify = false
    this.modify = false
    this.del = false
    this.new = false
    this.untrack = false
    this.track = false
    this.desc = ''
  }

  setTrack() {
    this.track = true
    this.untrack = false
  }

  setUntrack() {
    this.track = false
    this.untrack = true
  }
}

const unmodifyStatus = new Status()
unmodifyStatus.unmodify = true
unmodifyStatus.setTrack()
unmodifyStatus.desc = '文件已纳入版本控制,当前工作区和指定commit相比,没有修改'
const modifyStatus = new Status()
modifyStatus.modify = true
modifyStatus.setTrack()
modifyStatus.desc = '文件已纳入版本控制,当前工作区和指定commit相比,修改了内容'
const delStatus = new Status()
delStatus.del = true
delStatus.setTrack()
delStatus.desc = '文件已纳入版本控制,当前工作区和指定commit相比,文件被从版本库移除,但也可能是重命名导致'
const newButCommittedStatus = new Status()
newButCommittedStatus.new = true
newButCommittedStatus.setTrack()
newButCommittedStatus.desc = '文件在指定commit和当前工作区之间的commit中被创建,例如指定commit为A,提交记录为A-B-C-当前工作区,在B提交中被创建,则显示为该状态'
const newAndUncommittedStatus = new Status()
newAndUncommittedStatus.new = true
newAndUncommittedStatus.setUntrack()
newAndUncommittedStatus.desc = '文件没有在之前的任何commit中提交,工作区中为新文件'

/**
 * 获取所有文件,并标记它们的状态,返回文件名+状态
 * 注意:
 * 1. 只比较 lastCommitAppKnow 和 工作区
 * 2. 忽略重命名， 即重命名体现为先 del 再 add
 */
function allFiles() {
  // 不使用文件系统命令是因为，当前这样做可以抛去 .gitignore 的文件
  // todo: 记录两条命令到日志
  var trackedFiles = execSyncGitCommond(targetDir, allTrackedCommond)
  var untrackFiles = execSyncGitCommond(targetDir, allUntrackedCommond)

  // lastCommitAppKnow 和 工作区 比较
  var sinceLastCommitAppKnow_changedFiles = gitDiff_nameStatus(targetDir, lastCommitAppKnow)
  
  var files = {}

  // 标记状态被修改的文件
  const statusShortStrMap = {
    'A': newButCommittedStatus,
    'D': delStatus,
    'M': modifyStatus
  }
  sinceLastCommitAppKnow_changedFiles.forEach(line => {
    if (line.length <= 1) {
      return
    }
    
    // status 和 name
    var statusCode = line[0]
    var fileStatus = statusShortStrMap[statusCode]
    var fileName = line[1]
    files[fileName] = {
      status: fileStatus
    }
  })

  /**
   * 仅仅用来设置 unmodifyStatus newAndUncommittedStatus 两种简单状态
   * @param {Status} status
   */
  function simpleStatusSet(fileName, targetStatus) {
    if (fileName === '') {
      return
    }

    if (!files.hasOwnProperty(fileName)) {
      files[fileName] = {
        status: targetStatus
      }
    }
  }

  // 标记没有修改的文件
  trackedFiles.forEach(line => { simpleStatusSet(line, unmodifyStatus) })
  // 标记新的文件
  untrackFiles.forEach(line => { simpleStatusSet(line, newAndUncommittedStatus) })

  return files
}

export {
  allFiles
}
