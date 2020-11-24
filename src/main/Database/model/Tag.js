/* export */ class Tag {
  constructor(id, name, description, weight, time, articles) {
    this.id = id
    this.name = name
    this.description = description
    this.weight = weight
    this.time = time
    this.articles = articles
  }
}

module.exports = {
  Tag: Tag
}
