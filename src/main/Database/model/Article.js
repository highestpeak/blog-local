/* export */ class Article {
  constructor(id, title, keyWords, words, summary, weight, standardCompleted, fileName, size, storageLocation, time, categories, tags, todos, standards) {
    this.id = id
    this.title = title
    this.keyWords = keyWords
    this.words = words
    this.summary = summary
    this.weight = weight
    this.standardCompleted = standardCompleted
    this.fileName = fileName
    this.size = size
    this.storageLocation = storageLocation
    this.time = time
    this.categories = categories
    this.tags = tags
    this.todos = todos
    this.standards = standards
  }
}

module.exports = {
  Article: Article
}
