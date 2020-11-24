/* export */ class Code {
  constructor(id, title, fileName, language, description, time) {
    this.id = id
    this.title = title
    this.fileName = fileName
    this.language = language
    this.description = description
    this.time = time
  }
}

module.exports = {
  Code: Code
}
