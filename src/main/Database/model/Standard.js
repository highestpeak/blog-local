/* export */ class Standard {
  constructor(id, name, description, checkFunction, time, articles) {
    this.id = id
    this.name = name
    this.description = description
    this.checkFunction = checkFunction
    this.time = time
    this.articles = articles
  }
}

module.exports = {
  Standard: Standard
}
