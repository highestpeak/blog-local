const EntitySchema = require('typeorm').EntitySchema
const Category = require('../model/Category').Category

module.exports = new EntitySchema({
  name: 'Category',
  target: Category,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    /**
     * 类别名称
     */
    name: {
      type: 'text'
    },
    /**
     * 类别描述
     */
    description: {
      type: 'text'
    },
    /**
     * 类别的父类别
     */
    parentId: {
      type: 'int'
    },
    createTime: {
      type: 'text'
    },
    updateTime: {
      type: 'text'
    }
  },
  relations: {
    /**
     * 哪些文章所属于该类别
     */
    articles: {
      target: 'Article',
      type: 'many-to-many'
    }
  }
})
