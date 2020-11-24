const EntitySchema = require('typeorm').EntitySchema
const Code = require('../model/Code').Code

module.exports = new EntitySchema({
  name: 'Code',
  target: Code,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    title: {
      type: 'varchar'
    },
    fileName: {
      type: 'text'
    },
    language: {
      type: 'text'
    },
    description: {
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
