import { app } from 'electron'
var fs = require('fs')

const defaultConfig = {
  'lastCommitAppKnow': '',
  'targetDir': 'E:/_data/testDir/BlogLocalTest',
  'excludeFiles': [
    '.blog/database.db'
  ],
  'sqlitePath': 'E:/_data/testDir/BlogLocalTest/.blog/database.db',
  // 统计文章中的关键字
  'keyWordsTopN': 5,
  'regxOfTagsToScan': [
    'todo[:：].'
  ]
}

var appDataPath = app.getPath('appData') + '\\' + 'blog-local'
// console.log(appDataPath)
try {
  fs.accessSync(appDataPath, fs.constants.R_OK | fs.constants.W_OK)
  console.log('appData exist')
} catch (err) {
  console.log('appData not exist then create')
  fs.mkdirSync(appDataPath)
}

const configPath = app.getPath('appData') + '\\' + 'blog-local' + '\\config.json'
// console.log(configPath)

// Check that the file exists locally
try {
  fs.accessSync(configPath, fs.constants.R_OK | fs.constants.W_OK)
  console.log('config exist')
} catch (err) {
  console.log('config not exist then create')
  fs.writeFileSync(configPath, JSON.stringify(defaultConfig), { flag: 'wx' })
}
// config can be used like a dict
// console.log(fs.readFileSync(configPath, 'utf8'))
let config = JSON.parse(fs.readFileSync(configPath, 'utf8'))
// let config = {}

function getConfig(configName) {
  // if config not exist then create and use default value
  // console.log(configName)
  // console.log(config[configName])
  // console.log(config[configName] == null)

  if (config[configName] == null) {
    config[configName] = defaultConfig[configName]
    saveConfig(configName, defaultConfig[configName])
  }
  return config[configName]
}

function saveConfig(configName, configValue) {
  // make sure config in memory is the same with config in the file sys
  fs.writeFile(configPath, JSON.stringify(config), 'utf8', function (error) {
    if (error) {
      // throw error
      // console.log('error')
    }

    // console.log('commplete')
  })
}

export {
  getConfig, saveConfig
}
