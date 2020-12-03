/* eslint-disable no-multi-str */

// const { ipcRenderer } = require('electron')

class Snippet {
  /**
   * @param {String} id
   * @param {String} name
   * @param {Array} tags 标签
   * @param {String} language 编程语言
   * @param {String} location 存储文件的完整路径
   * @param {String} folder 分类/存储地点文件夹
   * @param {String} time 创建时间
   */
  constructor(id, name, tags, language, location, folder, time) {
    this.id = id
    this.name = name
    this.tags = tags
    this.language = language
    this.location = location
    this.folder = folder
    this.time = time
  }
}

const MockSnippet = [
  new Snippet('1', 'Java Hello world', ['java', 'template'], 'java', 'root', 'java', '2020.10.14'),
  new Snippet('2', '多线程交替打印', ['java', '多线程'], 'java', 'root', 'java', '2020.11.14'),
  new Snippet('3', 'Sql', ['Sql', '例子'], 'java', 'root', 'java', '2020.11.24'),
  new Snippet('4', '快速排序', ['java', '算法', 'template'], 'java', 'root', 'java', '2020.12.3')
]

const MockCode = '\
package com.scu.highestpeak.child.fly_advice;\n\
\n\
import org.mybatis.spring.annotation.MapperScan;\n\
import org.springframework.boot.SpringApplication;\n\
import org.springframework.boot.autoconfigure.SpringBootApplication;\n\
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;\n\
\n\
/**\n\
 * @author highestpeak\n\
 */\n\
@SpringBootApplication(\n\
        exclude = {HibernateJpaAutoConfiguration.class}\n\
)\n\
@MapperScan("com.scu.highestpeak.child.fly_advice.orm")\n\
public class FlyAdviceApplication {\n\
\n\
    public static void main(String[] args) {\n\
        SpringApplication.run(FlyAdviceApplication.class, args);\n\
    }\n\
\n\
}\n'

export {
  Snippet, MockSnippet, MockCode
}
