const { ipcRenderer } = require('electron')

/**
 * 立刻重新获取最新的数据
 * @returns {Object}
 * todo: 最终数据的样式？
 */
function getLatestDataNow() {
  // git event 同步 查找所有文件 返回文件名和状态
  var fileNameAndStatus = ipcRenderer.sendSync('all-files-msg', '')

  // 提取出三种不同状态的文件做后续处理
  // unmodified 可从数据库读取数据
  // new 和 modified 需要相应的处理来提取数据
  var unmodifiedFiles = []
  var modifiedFiles = []
  var newFiles = []
  for (let [key, value] of Object.entries(fileNameAndStatus)) {
    const status = value.status
    if (status.track) {
      if (status.unmodify || status.del) {
        unmodifiedFiles.push(key)
      } else {
        modifiedFiles.push(key)
      }
    } else {
      newFiles.push(key)
    }
  }

  // database event 查找已追踪并且没有改变元数据的文件的信息
  // 包括删除的文章
  var unmodifiedFilesData = ipcRenderer.sendSync('tracked-article-data', unmodifiedFiles)

  // markdown event 提取更新的/未追踪的文件的信息
  var modifiedFilesData = ipcRenderer.sendSync('modified-article-data', modifiedFiles)
  var newFilesData = ipcRenderer.sendSync('added-article-data', newFiles)

  // 合并三个数组得到最终结果数组 并附上初始时得到的 status
  var result = unmodifiedFilesData.concat(modifiedFilesData).concat(newFilesData)
  for (let index = 0; index < result.length; index++) {
    const fileData = result[index]
    fileData.status = fileNameAndStatus[fileData.fileName].status
  }

  return result
}

/**
 * DataSourceButton 对象
 * ES 2015
 * @param {string} name button的代码标识
 * @param {string} caption button的显示内容
 * @param {boolean} state button的状态
 */
class DataSourceButton {
  constructor(name, caption, state) {
    this.name = name
    this.caption = caption
    this.state = state
  }
}

/**
 * 最新数据
 */
var latestData = getLatestDataNow()

/**
 * 根据 dataSource 名称找到它的数据获取方法
 */
let nameToDataFucDict = {}

/**
 * 基础数据源
 */
const basicDataSource = []

/**
 * 其他列表数据源: 包括但不限于自定义数据源
 * todo: 自定义数据源、sql
 */
const otherDataSource = []

const all = new DataSourceButton('all', '全部', false)
basicDataSource.push(all)
/**
 * 获取已设定数据源的所有的文件
 * todo: 当前为某个文件夹，但是数据源可以多个不同的文件夹？
 * @param {*} callback 数据获取回调
 */
nameToDataFucDict[all.name] = (infoCallback) => { infoCallback(latestData) }

const currModify = new DataSourceButton('currModify', '当前修改', false)
basicDataSource.push(currModify)
nameToDataFucDict[currModify.name] = (infoCallback) => {
  /* write your code here */
  var result = []
  for (let index = 0; index < latestData.length; index++) {
    const dataItem = latestData[index]
    const dataItemStatus = dataItem.status
    if (dataItemStatus.del === true || dataItemStatus.modify === true || dataItemStatus.new === true) {
      result.push(dataItem)
    }
  }
  infoCallback(result)
}

const complete = new DataSourceButton('complete', '已完成', false)
basicDataSource.push(complete)
nameToDataFucDict[complete.name] = (infoCallback) => {
  /* write your code here */
  // todo: 需要额外的记录字段
}

const notComplete = new DataSourceButton('notComplete', '未完成', false)
basicDataSource.push(notComplete)
nameToDataFucDict[notComplete.name] = (infoCallback) => {
  /* write your code here */
  // todo: 需要额外的记录字段
}

const waitToWrite = new DataSourceButton('waitToWrite', '待写', false)
otherDataSource.push(waitToWrite)
nameToDataFucDict[waitToWrite.name] = (infoCallback) => {
  /* write your code here */
  // todo: 需要单独的一篇文章来进行这样的处理 即该文章只是列表项文章
}

const updateData = new DataSourceButton('updateData', '更新列表数据', false)
basicDataSource.push(updateData)
nameToDataFucDict[updateData.name] = (infoCallback) => {
  /* write your code here */
  latestData = getLatestDataNow()
  infoCallback(latestData)
}

const waitToEdit = new DataSourceButton('waitToEdit', '待修改', false)
otherDataSource.push(waitToEdit)
nameToDataFucDict[waitToEdit.name] = (infoCallback) => {
  /* write your code here */
  // 不满足标准的 或者说 我把他添加到的一个待修改状态来临时修改一个文章等等等等
}

/**
 * 其他列表数据源: 包括但不限于自定义数据源
 * todo: 自定义数据源、sql
 * sql会具体到每个语句
 */
// const otherDataSource = [
//   new DataSourceButton('waitToEdit', '待修改', false),
//   {
//     name: '常用sql',
//     items: [
//       new DataSourceButton('sql', 'select completed', false),
//       new DataSourceButton('sql', 'select waitToWrite', false)
//     ]
//   },
//   new DataSourceButton('waitToEdit', '待修改', false)
// ]

// 仅能使用原生 html
var sqlPointHtml = 'I am popover <b>sql point html</b> content!'

function searchBySql(sql) {
  console.log('searchBySql start')
  ipcRenderer.on('asynchronous-reply', (event, arg) => {
    console.log('searchBySql reply start')
    console.log(arg) // prints "pong"
  })
  ipcRenderer.send('asynchronous-message', sql)
  console.log('searchBySql end')
}

export {
  // DataSourceToolbar
  basicDataSource, otherDataSource, sqlPointHtml,
  // Workspace
  searchBySql, nameToDataFucDict
}
