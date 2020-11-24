const EntitySchema = require('typeorm').EntitySchema
const Todo = require('../model/Todo').Todo

module.exports = new EntitySchema({
  name: 'Todo',
  target: Todo,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    /**
     * 描述
     */
    description: {
      type: 'text'
    },
    /**
     * todo 的状态
     * 待做 计划 进行中 完成
     */
    status: {
      type: 'text'
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
     * 哪些文章包含该 todo
     */
    articles: {
      target: 'Article',
      type: 'many-to-many'
    }
  }
})
