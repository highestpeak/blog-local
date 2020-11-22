import 'reflect-metadata'
import { createConnection } from 'typeorm'

/**
 * todo: 配置文件记录下来
 */
const sqlitePath = 'E:/_data/testDir/BlogLocalTest'

createConnection({
  type: 'sqlite',
  name: 'default',
  entities: [],
  synchronize: true,
  database: sqlitePath
})
