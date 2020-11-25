import { getConfig } from '../Setting'
import { scanSyntaxTreeTag } from './ScanTag'

const fs = require('fs')
// https://unifiedjs.com/learn/guide/using-unified/
const unified = require('unified')
// https://github.com/remarkjs/remark/blob/HEAD/doc/plugins.md#list-of-plugins
const markdown = require('remark-parse')
const stringify = require('remark-stringify')
// https://github.com/remarkjs/remark-frontmatter
// https://github.com/remarkjs/remark/blob/main/doc/plugins.md
const frontmatter = require('remark-frontmatter')
const vfile = require('to-vfile')
// https://github.com/eemeli/yaml
const YAML = require('yaml')
// https://github.com/yanyiwu/nodejieba
const nodejieba = require('nodejieba')

const processor = unified()
  .use(markdown)
  .use(stringify)
  .use(frontmatter, ['yaml', 'toml'])

var targetDir = getConfig('targetDir')
var keyWordsTopN = getConfig('keyWordsTopN')

/**
 * 格式化文件大小 bytes 到易读格式
 * @param {number} a bytes
 * @param {number} b 小数位数
 */
function formatBytes (a, b = 2) {
  if (a === 0) {
    return '0 Bytes'
  }
  const c = b < 0 ? 0 : b
  const d = Math.floor(Math.log(a) / Math.log(1024))
  return parseFloat((a / Math.pow(1024, d)).toFixed(c)) + ' ' + ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'][d]
}

/**
 * 获取到正确的 yaml 字段及其值
 * 因为可能有部分 yaml 命名不正确, 例如概述 summary 写成 description
 * @param {string} yamlStr yaml的文字值
 */
function getRightYaml(yamlStr) {
  return YAML.parse(yamlStr)
}

/**
 * 抽取文件元数据
 * @param {String} fileName 文件名
 * @returns {Object} 返回 Object ，包含字段:
 * file storageLocation size words keyWords syntaxTree yaml-所含的字段
 */
function fileExtractMeta(fileName) {
  // console.log('fileExtractMeta' + fileName)
  var result = {
    storageLocation: targetDir
  }

  try {
    // file size
    var orignSize = fs.statSync(fileName).size
    var formatSize = formatBytes(fs.statSync(fileName).size)
    result.size = [orignSize, formatSize]

    // fileName should be sth like 'example.md'
    var content = vfile.readSync(fileName)
    var file = processor.parse(content)

    // content and words count
    var decodeContent = new TextDecoder('utf-8').decode(content.contents)
    result.words = decodeContent.length

    // keyWords
    // console.log(keyWordsTopN)
    result.keyWords = {}
    var keyWordsArray = nodejieba.extract(decodeContent, keyWordsTopN)
    for (let index = 0; index < keyWordsArray.length; index++) {
      const keyWord = keyWordsArray[index]
      result.keyWords[keyWord.word] = keyWord.weight
    }
    // result.keyWords = nodejieba.extract(decodeContent, keyWordsTopN)

    // get syntax tree
    const mdSyntaxTree = file.children
    result.syntaxTree = file

    // get yaml
    for (let index = 0; index < mdSyntaxTree.length; index++) {
      const mdSyntaxTreeItem = mdSyntaxTree[index]
      if (mdSyntaxTreeItem.type === 'yaml') {
        // result.yaml = YAML.parse(mdSyntaxTreeItem.value)
        var yaml = getRightYaml(mdSyntaxTreeItem.value)
        // convery key and vaue in yaml to key and value in result
        for (let [key, value] of Object.entries(yaml)) {
          result[key] = value
          // console.log(key, value)
        }
      }
    }
    // yaml not found
    if (!('yaml' in result)) {
      // todo: yaml not found handle
    }
  } catch (error) {
    console.log('fileExtractMeta ' + fileName + ' error: ' + error + '\n')
    // console.log(error)
  }

  return result
}

/**
 * 提取每个文件的新的数据
 * 该函数当前会被 修改的文件 新的文件 调用
 * @param {Array} fileNames 文件名列表
 * @returns {Object}
 *  file storageLocation size words keyWords syntaxTree yaml-所含的字段
 *  tagScanned
 */
function filesDataGenerate(fileNames) {
  var result = []

  for (let index = 0; index < fileNames.length; index++) {
    const fileName = targetDir + '/' + fileNames[index]
    // console.log('iter filename' + fileName)

    // 抽取文件元数据
    var fileMeta = fileExtractMeta(fileName)

    fileMeta.fileName = fileNames[index]

    // 扫描 tag
    fileMeta.tagScanned = scanSyntaxTreeTag(fileMeta.syntaxTree)

    result.push(fileMeta)
  }

  return result
}

export {
  filesDataGenerate
}
