/* export */ class Image {
  constructor(id, fileName, description, link, time) {
    this.id = id
    this.fileName = fileName
    this.description = description
    this.link = link
    this.time = time
  }
}

module.exports = {
  Image: Image
}
