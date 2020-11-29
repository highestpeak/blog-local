class Category {
  constructor(id, name, description, items) {
    this.id = id
    this.name = name
    this.description = description
    this.items = items
  }
}

const mockCategories = [
  new Category(1, 'Java', '测试一下描述', [ 'Java编程思想阅读1', 'Java Hashmap' ]),
  new Category(2, 'Sql', '测试一下描述', [ '思想阅读1', 'Sql Hashmap' ]),
  new Category(3, 'Python', '测试一下描述', [ 'Java思想阅读1', 'Python Hashmap' ]),
  new Category(4, 'script', '测试一下描述', [ 'Java编思想读1', 'script Hashmap' ])
]

export {
  mockCategories
}
