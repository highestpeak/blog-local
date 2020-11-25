/* eslint-disable no-unused-vars */
import { ipcMain } from 'electron'
import { filesDataGenerate } from './MarkdownOperate'

/**
 * 修改了的文章
 * 返回 Article Model 类型的数据 但不存入数据库 而是存入临时文件
 * @param {Array} fileNames 文件名列表
 */
ipcMain.on('modified-article-data', (event, fileNames) => {
  // console.log('event received')
  event.returnValue = filesDataGenerate(fileNames)
  // console.log('event end')
})

/**
 * 新的文章
 * 返回 Article Model 类型的数据 但不存入数据库 而是存入临时文件
 */
ipcMain.on('added-article-data', (event, fileNames) => {
  // console.log('event received')
  event.returnValue = filesDataGenerate(fileNames)
  // console.log('event end')
})
