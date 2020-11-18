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
function basicDataSource() {
  return [
    new DataSourceButton('all', '全部', false),
    new DataSourceButton('complete', '完成', false),
    new DataSourceButton('notComplete', '未完成', false),
    new DataSourceButton('waitToWrite', '待写', false),
    new DataSourceButton('currModify', '当前修改', false)
  ]
}

/**
 * 其他列表数据源: 包括但不限于自定义数据源
 */
function otherDataSource() {
  return [
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
}

// 仅能使用原生 html
var sqlPointHtml = 'I am popover <b>sql point html</b> content!'

export {
  // DataSourceToolbar
  basicDataSource, otherDataSource, sqlPointHtml
}
