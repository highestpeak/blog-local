const EntitySchema = require('typeorm').EntitySchema
const Tag = require('../model/Tag').Tag

module.exports = new EntitySchema({
  name: 'Tag',
  target: Tag,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    /**
     * 标签名
     */
    name: {
      type: 'varchar'
    },
    /**
     * 标签描述
     */
    description: {
      type: 'text'
    },
    /**
     * 标签分数
     * 百分制 我认为的标签有多重要
     */
    weight: {
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
     * 哪些文章所属于该标签
     */
    articles: {
      target: 'Article',
      type: 'many-to-many'
    }
  }
})
