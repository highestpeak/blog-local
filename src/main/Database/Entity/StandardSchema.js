const EntitySchema = require('typeorm').EntitySchema
const Standard = require('../model/Standard').Standard

module.exports = new EntitySchema({
  name: 'Standard',
  target: Standard,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    /**
     * 标准检查的名字
     */
    name: {
      type: 'varchar'
    },
    /**
     * 描述
     */
    description: {
      type: 'text'
    },
    /**
     * 标准检查的函数
     * 执行时从数据库中取出然后执行
     */
    checkFunction: {
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
     * 哪些文章需要做这个标准检查
     */
    articles: {
      target: 'Article',
      type: 'many-to-many'
    }
  }
})
