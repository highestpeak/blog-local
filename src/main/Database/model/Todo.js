/* export */ class Todo {
  constructor(id, description, status, time, articles) {
    this.id = id
    this.description = description
    this.status = status
    this.time = time
    this.articles = articles
  }
}

module.exports = {
  Todo: Todo
}
