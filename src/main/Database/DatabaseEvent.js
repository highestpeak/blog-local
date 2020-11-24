import { ipcMain } from 'electron'
import { getConnection } from 'typeorm'
const Article = require('./model/Article').Article

const connection = getConnection()

ipcMain.on('tracked-article-data', async (event, arg) => {
  // event.returnValue = allFiles()
  var fileModelData = await connection
    .getRepository(Article)
    .createQueryBuilder('article')
    .where('article.fileName IN (:...fileNames)', { fileNames: arg })
    .getMany()
  console.log('database event' + fileModelData)
  event.returnValue = fileModelData
})
