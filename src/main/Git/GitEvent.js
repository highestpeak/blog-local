/**
 * 这个文件记录所有和 Git 相关的 render 进程进行通信的事件信息
 * 使用 async 异步方式
 */

import { ipcMain } from 'electron'
import { allFiles } from './GitOperate'

/**
 * 获取版本库的所有文件
 * 返回所有文件名，以及相对于软件知道的最后一次 commit 的变化
 * todo: 需要记录软件知道的 commit
 */
ipcMain.on('all-files-msg', async (event, arg) => {
  event.sender.send('all-files-reply', allFiles())
})
