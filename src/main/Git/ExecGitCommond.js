import { execSync } from 'child_process'

const gitStatusShortCommond = 'git status -s'

/**
 * 不会显示已经被删除的文件， 虽然它们被记录在了版本库中
 */
const allTrackedCommond = 'git ls-files'

const allUntrackedCommond = 'git ls-files --others --exclude-standard'

/**
 * git status -s
 * git diff ... --name-status
 * @param {string} commond
 */
function statusShort(dir, commond) {
  try {
    var stdout = execSync(commond, { cwd: dir, encoding: 'utf-8' })

    // parse result
    // todo: 抽取为工具类,
    // 抽出每一行
    stdout = stdout.split(/\r\n|\r|\n/)
    // 按照连续多个空格分隔
    stdout = stdout.map(line => line.split(/\s+/))

    return stdout
  } catch (e) {
    return null
  }
}

/**
 * git status -s
 * @param {string} dir
 */
function gitStatus_s(dir) {
  var stdout = statusShort(dir, gitStatusShortCommond)

  if (stdout === null) {
    return stdout
  }

  // 把文件状态的XY列体现出来
  // 经过正则之前如果是 ' M' 'M ' 经过正则之后都会变成 'M' 这一步就是进行还原
  for (let index = 0; index < stdout.length; index++) {
    const line = stdout[index]

    var newLine = line
    if (line.length >= 1) {
      if (line[0] === '') {
        newLine = line.slice(1)
        newLine[0] = ' ' + newLine[0]
      } else if (line[0].length === 1) {
        newLine = line
        newLine[0] = newLine[0] + ' '
      }
    }
    stdout[index] = newLine
  }

  return stdout
}

/**
 * git diff <commit> --name-status
 * 工作区 和 <commit>
 * @param {string} dir
 * @param {string} lastCommitAppKnow
 */
function gitDiff_nameStatus(dir, lastCommitAppKnow) {
  var commond = 'git diff ' + lastCommitAppKnow + ' --name-status'
  // todo: 记录日志
  // console.log(commond)
  return statusShort(dir, commond)
}

function execSyncGitCommond(dir, commond) {
  try {
    var stdout = execSync(commond, { cwd: dir, encoding: 'utf-8' })
    stdout = stdout.split(/\r\n|\r|\n/)
    return stdout
  } catch (e) {
    return null
  }
}

export {
  gitStatus_s, gitDiff_nameStatus, execSyncGitCommond,
  // all str commond
  allTrackedCommond, allUntrackedCommond
}
