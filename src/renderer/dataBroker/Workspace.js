const { ipcRenderer } = require('electron')

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
 * 基础数据源
 */
const basicDataSource = [
  new DataSourceButton('all', '全部', false),
  new DataSourceButton('currModify', '当前修改', false),
  new DataSourceButton('complete', '已完成', false),
  new DataSourceButton('notComplete', '未完成', false),
  new DataSourceButton('waitToWrite', '待写', false)
]

/**
 * 其他列表数据源: 包括但不限于自定义数据源
 * todo: 自定义数据源、sql
 */
const otherDataSource = [
  new DataSourceButton('waitToEdit', '待修改', false),
  {
    name: '常用sql',
    items: [
      new DataSourceButton('sql', 'select completed', false),
      new DataSourceButton('sql', 'select waitToWrite', false)
    ]
  },
  new DataSourceButton('waitToEdit', '待修改', false)
]

/**
 * 根据 dataSource 名称找到它的数据获取方法
 */
let nameToDataFucDict = {}

/**
 * 获取已设定数据源的所有的文件
 * todo: 当前为某个文件夹，但是数据源可以多个不同的文件夹？
 * @param {*} callback 数据获取回调
 */
nameToDataFucDict['all'] = function (callback) {
  // 接收所有文件的回调
  ipcRenderer.on('all-files-reply', (event, result) => {
    callback(result)
  })

  // 发送消息， 查找所有文件
  ipcRenderer.send('all-files-msg', '')
}

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
