/* export */ class Paragraph {
  constructor(id, name, description, fileName, time) {
    this.id = id
    this.name = name
    this.description = description
    this.fileName = fileName
    this.time = time
  }
}

module.exports = {
  Paragraph: Paragraph
}
