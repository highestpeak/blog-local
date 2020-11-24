import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { getConfig } from '../Setting'

/**
 * todo: 配置文件记录下来
 */
const sqlitePath = getConfig('sqlitePath')

createConnection({
  type: 'sqlite',
  name: 'default',
  entities: [
    require('./Entity/ArticleSchema'),
    require('./Entity/CategorySchema'),
    require('./Entity/CodeSchema'),
    require('./Entity/ImageSchema'),
    require('./Entity/ParagraphSchema'),
    require('./Entity/StandardSchema'),
    require('./Entity/TagSchema'),
    require('./Entity/TodoSchema')
  ],
  synchronize: true,
  database: sqlitePath
})
