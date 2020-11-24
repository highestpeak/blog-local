const EntitySchema = require('typeorm').EntitySchema
const Image = require('../model/Image').Image

module.exports = new EntitySchema({
  name: 'Image',
  target: Image,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    fileName: {
      type: 'varchar'
    },
    description: {
      type: 'text'
    },
    link: {
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
