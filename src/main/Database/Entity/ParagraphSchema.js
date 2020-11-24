const EntitySchema = require('typeorm').EntitySchema
const Paragraph = require('../model/Paragraph').Paragraph

module.exports = new EntitySchema({
  name: 'Paragraph',
  target: Paragraph,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    /**
     * 名称
     */
    name: {
      type: 'varchar'
    },
    /**
     * 段落描述
     */
    description: {
      type: 'text'
    },
    /**
     * 文件名
     * 全路径
     */
    fileName: {
      type: 'text'
    },
    createTime: {
      type: 'text'
    },
    updateTime: {
      type: 'text'
    }
  }
})
