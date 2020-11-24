const EntitySchema = require('typeorm').EntitySchema
const Article = require('../model/Article').Article

module.exports = new EntitySchema({
  name: 'Article',
  target: Article,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },

    /**
     * 标题
     */
    title: {
      type: 'text'
    },

    /**
     * 关键字列表
     */
    keyWords: {
      type: 'text'
    },

    /**
     * 字符数量
     */
    words: {
      type: 'text'
    },

    /**
     * 摘要
     */
    summary: {
      type: 'text'
    },

    /**
     * 评分
     * 百分制 表明这个文章我认为写的有多好
     */
    weight: {
      type: 'int'
    },

    /**
     * 是否已经完成标准检查
     * 未完成: 未检查 未完全检查 未修正不符合标准
     */
    standardCompleted: {
      type: 'boolean'
    },

    /**
     * 存储文章的文件名
     * 全路径
     */
    fileName: {
      type: 'text'
    },

    /**
     * 文件大小
     */
    size: {
      type: 'text'
    },

    /**
     * 存储位置
     */
    storageLocation: {
      type: 'text'
    },

    createTime: {
      type: 'text'
    },
    updateTime: {
      type: 'text'
    }
  }, // end columns
  relations: {
    /**
     * 类别
     */
    categories: {
      target: 'Category',
      type: 'many-to-many',
      joinTable: true
    },

    /**
     * 标签
     */
    tags: {
      target: 'Tag',
      type: 'many-to-many',
      joinTable: true
    },

    /**
     * todos
     */
    todos: {
      target: 'Todo',
      type: 'many-to-many',
      joinTable: true
    },

    /**
     * 本文章对应的需要执行的检查的标准
     */
    standards: {
      target: 'Standard',
      type: 'many-to-many',
      joinTable: true
    }
  } // end relations
})
