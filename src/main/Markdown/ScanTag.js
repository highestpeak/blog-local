import { getConfig } from '../Setting'
var regxOfTagsToScan = getConfig('regxOfTagsToScan')

/**
 * 获取可判断是否满足给定正则的函数
 * @param {string} regx 正则字符串
 * @returns {Function} 可判断是否满足给定正则的函数
 */
function regxTestFucGenerate(regx) {
  var regexp = new RegExp(regx, 'i')
  return regexp.test.bind(regexp)
}

/**
 * 将正则文本列表转换成正则判定函数列表
 * @param {Array} tagRegxTextList 正则文本列表
 */
function generateTagFucList(tagRegxTextList) {
  var result = []
  for (let index = 0; index < tagRegxTextList.length; index++) {
    const tagRegxText = tagRegxTextList[index]
    result.push(regxTestFucGenerate(tagRegxText))
  }
  return result
}

// const tagToScanFucList = [
//   regxTestFucGenerate('todo[:：].'),
//   regxTestFucGenerate('<!-- todo[:：]. -->')
// ]

const tagToScanFucList = generateTagFucList(regxOfTagsToScan)

/**
 * 可以取到 value 的最终元素列表
 */
const finalType = new Set(['text', 'html'])

/**
 * 递归扫描 Tag
 * @param {Object} mdItem md 语法树元素
 * @param {Array} tagFucList 函数列表 每个函数用来判断是否满足给定 Tag
 * @returns {Array} tag 内容列表
 */
function scanTag(mdItem, tagFucList) {
  if (finalType.has(mdItem.type)) {
    return tagFucList.reduce(function (reduceResult, matchFuc) {
      let value = null

      // 满足给定 tag 要求，找到了一个给定 tag
      if (matchFuc(mdItem.value)) {
        value = mdItem.value
        reduceResult.push(value)
      }

      return reduceResult
    }, [])
  }
  let result = []
  if (mdItem.children) {
    mdItem.children.forEach(childItem => {
      result.push.apply(result, scanTag(childItem, tagFucList))
    })
  }
  return result
}

/**
 * 将标题栈转化成文字
 * @param {Array} headingStack stack of heading item
 */
function headingStackValue(headingStack) {
  var result = ''
  for (let index = 0; index < headingStack.length; index++) {
    const headingItem = headingStack[index]

    // 从语法树格式的 heading 提取出 heading 的文字内容
    // 并加到结果字符串上
    result += '=>' + headingItem.children[0].value
  }

  // 去除开头的 =>
  result = result.slice(2)
  return result
}

/**
 * 根据当前语法树元素 选择是否更新标题栈
 * @param {Array} headingStack 标题栈
 * @param {Object} item 语法树元素
 */
function updateHeadingStack(headingStack, item) {
  if (item.type !== 'heading') {
    return
  }

  let lastElement = headingStack.slice(-1).pop()

  if (lastElement == null || item.depth > lastElement.depth) {
    headingStack.push(item)
    return
  }

  if (item.depth < lastElement.depth) {
    do {
      headingStack.pop()
      lastElement = headingStack.slice(-1).pop()
    } while (lastElement.depth !== item.depth)
  }

  headingStack.pop()
  headingStack.push(item)
}

/**
 * 扫描语法树
 * @param {*} syntaxTree 语法树
 * @returns {Object}
 * result is a dict like this
 * {
 *   'h1=>h2=>h3' : [ todoItemText, todoItemText, ... ],
 *   'h1=>h2' : [ todoItemText, todoItemText, ... ],
 *   ...
 *   'h1=>h2=>h3=>h4' : [ todoItemText, todoItemText, ... ]
 * }
 */
function scanSyntaxTreeTag(syntaxTree) {
  let headingStack = []
  let tagResult = {}

  // syntaxTree 只包含一级内容
  // (例如list是一级内容但是listItem不是一级内容 自行调试可查看只要children含有超过1个的，它们的子元素就不是一级内容)
  // 要想访问所有的 md 元素 需要 scanTag 进行递归
  for (let index = 0; index < syntaxTree.children.length; index++) {
    const mdItem = syntaxTree.children[index]
    updateHeadingStack(headingStack, mdItem)

    // 扫描 tag
    const tagContentList = scanTag(mdItem, tagToScanFucList)
    // 扫描到了 tag
    if (tagContentList.length > 0) {
      var currHeadingStackValue = headingStackValue(headingStack)
      if (tagResult[currHeadingStackValue] == null) {
        tagResult[currHeadingStackValue] = []
      }
      let resultList = tagResult[currHeadingStackValue]
      resultList.push.apply(resultList, tagContentList)
    }
  }

  return tagResult
}

export {
  scanSyntaxTreeTag
}
