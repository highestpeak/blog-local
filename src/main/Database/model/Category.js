/* export */ class Category {
  constructor(id, name, description, parentId, time, articles) {
    this.id = id
    this.name = name
    this.description = description
    this.parentId = parentId
    this.time = time
    this.articles = articles
  }
}

module.exports = {
  Category: Category
}
