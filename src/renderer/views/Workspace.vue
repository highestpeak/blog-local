<template>
  <div>
      <!-- todo： 学习这个地方的表格布局策略 https://github.com/unofficial-protonmail-desktop/application -->
      <h4 style="margin: 5px 5px;">列表数据源</h4>

      <!-- 筛选出一个列表 -->
      <!-- Button toolbar -->
      <b-button-toolbar style="margin: 5px 5px;">
        <b-button-group>
          <b-button>
            <font-awesome-icon :icon="['fas','home']" style="color: #afaeac" />
            全部
          </b-button>
          <b-button>完成</b-button>
          <b-button>未完成</b-button>
          <b-button>待写</b-button>
          <b-button>当前修改</b-button>
          <b-button>当前选择</b-button>
          <b-dropdown text="其他">
            <b-dropdown-item>Item 1</b-dropdown-item>
            <b-dropdown-item>Item 2</b-dropdown-item>
            <b-dropdown-item>Item 3</b-dropdown-item>
          </b-dropdown>
          <b-button>添加</b-button>
        </b-button-group>

        <b-input-group size="sm" style="margin-left:10px;">
          <b-input-group-prepend is-text>
            <font-awesome-icon :icon="['fas','home']" style="color: #afaeac" />
          </b-input-group-prepend>

          <!-- 列表 sql 语句 -->
          <!-- todo: 编写时应当可以提示字段 -->
          <!-- todo: 应当可以执行sql排序 -->
          <b-form-input v-model="text" placeholder="Enter your search sql" style="height: auto;"></b-form-input>

          <b-input-group-append>
            <b-button variant="info">GO</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-button-toolbar>
      
      <!-- todo: 操作例如 多选、全选-->
      <!-- 多选/全选之后进行批量修改，批量修改包括：
          批量重命名-批量删除-批量标准检查-标签抽取等 -->
      <!-- 多选之后可以分析文章关系、文章与资源的关系，显示网络拓扑 -->
      <!-- 多选之后可以进行渲染，渲染成html和pdf等，放到指定的位置，渲染成pdf可以成书 -->
      <h4 style="margin: 5px 5px;">列表操作</h4>

      <!-- 对列表进行排序处理 -->
      <!-- todo: 当对某一项进行修改的时候，可以暂时记住它和对它的修改，并高亮它，只有当点击工具栏的提交才会提交上去修改 -->
      <!-- todo: 所有的带修改内容都在表格中以高亮的形式体现出来 -->
      <div style="margin: 5px 5px;">
        <b-table striped hover responsive 
          sticky-header="510px"
          :items="items" 
          :small="true"
          headVariant="dark"
          :bordered="true"
          table-variant=""
          selectable
          select-mode="muti"
          @row-selected="onRowSelected"
          :fields="fields">

          <!-- Example scoped slot for select state illustrative purposes -->
        <template #cell(selected)="{ rowSelected }">
          <template v-if="rowSelected">
            <span aria-hidden="true">&check;</span>
            <span class="sr-only">Selected</span>
          </template>
          <template v-else>
            <span aria-hidden="true">&nbsp;</span>
            <span class="sr-only">Not selected</span>
          </template>
        </template>

          <!-- index  -->
          <template #cell(index)="data">
            {{ data.index + 1 }}
          </template>

          <!-- name -->
          <!-- todo: 点击显示文章详情，组件为 bootstrapvue 的 sidebar 
                显示的内容包括但不限于：历史记录、文章之间（自己的相互之间的/引用外部的）的引用关系、 
                文章和资源（图片、代码块 gist）的引用关系 -->
          <template #cell(name)="row">
            <a href="#" class="text-dark" style="font-weight: 600;"> {{row.item.name}} </a>
          </template>

          <!-- categroy -->
          <!-- todo: 同tags，但是组件为 bootstrapvue 的 sidebar，并额外新增：下属tag的网状图 -->
          <template #cell(categroy)="row">
            <a href="#"> {{row.item.categroy}} </a>
          </template>

          <!-- tags -->
          <!-- todo: 点击则显示相应的 tag 的详细内容（浮动）组件为 Popover -->
          <template #cell(tags)="row">
            <!-- {{row.item.tags}} -->
            <TagCloud :tags=tagCloudData(row.item.tags) />
          </template>

          <!-- storage_location -->
          <!-- todo: 点击打开对应的资源管理器的位置 -->
          <template #cell(storage_location)="row">
            <a href="#"> {{row.item.storage_location}} </a>
          </template>

          <!-- Optional default data cell scoped slot -->
          <template #cell()="data">
            <i>{{ data.value }}</i>
          </template>
          <!-- todo: todos的悬浮会显示todo事项，组件为 popover -->
        </b-table>
      </div>

      <!-- todo：所有能显示这些的项都要显示，
          点击对应项：打开对应的目录，查看历史记录，查看文章之间（自己的相互之间的/引用外部的）的引用关系，
          查看文章和资源（图片、代码块 gist）的引用关系 
          能显示这些的项包括了：category、tags、location、keywords-->

  </div>
</template>

<script>
import OneLineListItem from '@/components/OneLineListItem.vue'
import TagCloud from '@/components/Tags/TagCloud.vue'
export default {
  name: 'workspace',
  components: {
    OneLineListItem, TagCloud
  },
  data: function() {
    return {
      fields: [
        'selected', 'index',
        {
          key: 'name',
          sortable: true
        },
        {
          key: 'categroy',
          sortable: true
        },
        {
          key: 'tags',
          sortable: true
          // Variant applies to the whole column, including the header and footer
          // variant: 'danger'
        },
        {
          key: 'create_time',
          sortable: true
        },
        {
          key: 'update_time',
          sortable: true
        },
        {
          key: 'size',
          sortable: true
        },
        {
          key: 'words',
          sortable: true
        },
        {
          key: 'storage_location',
          sortable: true
        },
        {
          key: 'todos',
          sortable: true
        },
        {
          key: 'key_words',
          sortable: true
        },
        {
          key: 'standard_check'
        }
      ],
      // 允许使用 sql查询
      // 第一次筛选： '全部','当前修改','完成','未完成','待写','已删除','添加'
      // 第二次筛选：
      // 筛选依据：博文名称、类别、标签、创建日期、修改日期、文件大小、字符数量、存储位置、待做事项数目、关键词列表、规范检查是否完成
      // 筛选规格：正序、降序
      items: [
        { name: 'Java专题-对象拷贝', categroy: 'Java专题', tags: ['java', 'list'], create_time: '2019/09/02  13:00', update_time: '2020/09/02  13:50', size: '2,247', words: '2,247', storage_location: '博文临时库', todos: 2, key_words: ['java', 'list'], standard_check: true },
        { name: 'Java专题-重要接口', categroy: 'Java专题', tags: ['java', 'list'], create_time: '2019/08/09  21:00', update_time: '2020/08/09  21:17', size: '2,753', words: '2,753', storage_location: '博文临时库', todos: 2, key_words: ['java', 'list'], standard_check: true },
        { name: 'Java基础-Object', categroy: 'Java基础', tags: ['java', 'list'], create_time: '2019/10/14  11:00', update_time: '2020/10/14  11:27', size: '11,140', words: '11,140', storage_location: '博文临时库', todos: 1, key_words: ['java', 'list'], standard_check: true },
        { name: 'Java基础-static、final', categroy: 'Java基础', tags: ['java', 'list'], create_time: '2019/09/21  13:00', update_time: '2020/09/21  13:53', size: '12,482', words: '12,482', storage_location: '博文临时库', todos: 1, key_words: ['java', 'list'], standard_check: true },
        { name: 'Java基础-String', categroy: 'Java基础', tags: ['java', 'list'], create_time: '2019/09/19  09:00', update_time: '2020/09/19  09:59', size: '14,049', words: '14,049', storage_location: '博文临时库', todos: 1, key_words: ['java', 'list'], standard_check: true },
        { name: 'Java基础-wiki', categroy: 'Java基础', tags: ['java', 'list'], create_time: '2019/09/18  14:00', update_time: '2020/09/18  14:58', size: '11,844', words: '11,844', storage_location: '博文临时库', todos: 1, key_words: ['java', 'list'], standard_check: true },
        { name: 'Java基础-内部类', categroy: 'Java基础', tags: ['java', 'list'], create_time: '2019/08/06  20:00', update_time: '2020/08/06  20:02', size: '6,812', words: '6,812', storage_location: '博文临时库', todos: 6, key_words: ['java', 'list'], standard_check: true },
        { name: 'Java基础-异常体系', categroy: 'Java基础', tags: ['java', 'list'], create_time: '2019/09/19  10:00', update_time: '2020/09/19  10:30', size: '34,999', words: '34,999', storage_location: '博文临时库', todos: 3, key_words: ['java', 'list'], standard_check: true },
        { name: 'Java基础-面向对象', categroy: 'Java基础', tags: ['java', 'list'], create_time: '2019/09/21  15:00', update_time: '2020/09/21  15:02', size: '4,468', words: '4,468', storage_location: '博文临时库', todos: 4, key_words: ['java', 'list'], standard_check: true },
        { name: 'JAVA框架-Spring-IOC&AOP', categroy: 'JAVA框架', tags: ['java', 'list'], create_time: '2019/09/01  18:00', update_time: '2020/09/01  18:24', size: '39,676', words: '39,676', storage_location: '博文临时库', todos: 3, key_words: ['java', 'list'], standard_check: true },
        { name: 'JAVA框架-Spring-其他', categroy: 'JAVA框架', tags: ['java', 'list'], create_time: '2019/09/24  16:00', update_time: '2020/09/24  16:18', size: '9,654', words: '9,654', storage_location: '博文临时库', todos: 9, key_words: ['java', 'list'], standard_check: true },
        { name: 'JAVA框架-Spring', categroy: 'JAVA框架', tags: ['java', 'list'], create_time: '2019/08/23  15:00', update_time: '2020/08/23  15:37', size: '18,286', words: '18,286', storage_location: '博文临时库', todos: 1, key_words: ['java', 'list'], standard_check: true },
        { name: 'Java类库-IO类库', categroy: 'Java类库', tags: ['java', 'list'], create_time: '2019/08/28  16:00', update_time: '2020/08/28  16:39', size: '15,949', words: '15,949', storage_location: '博文临时库', todos: 1, key_words: ['java', 'list'], standard_check: true },
        { name: 'Java类库-容器类库-List&Set&Queue', categroy: 'Java类库', tags: ['java', 'list'], create_time: '2019/09/02  13:00', update_time: '2020/09/02  13:40', size: '17,215', words: '17,215', storage_location: '博文临时库', todos: 1, key_words: ['java', 'list'], standard_check: true },
        { name: 'Java类库-容器类库-Map', categroy: 'Java类库', tags: ['java', 'list'], create_time: '2019/08/30  16:00', update_time: '2020/08/30  16:56', size: '23,812', words: '23,812', storage_location: '博文临时库', todos: 2, key_words: ['java', 'list'], standard_check: true },
        { name: 'Java类库-容器类库-wiki', categroy: 'Java类库', tags: ['java', 'list'], create_time: '2019/08/09  15:00', update_time: '2020/08/09  15:24', size: '714', words: '714', storage_location: '博文临时库', todos: 7, key_words: ['java', 'list'], standard_check: true },
        { name: 'Java类库-容器类库-并发容器', categroy: 'Java类库', tags: ['java', 'list'], create_time: '2019/09/03  01:00', update_time: '2020/09/03  01:29', size: '10,100', words: '10,100', storage_location: '博文临时库', todos: 1, key_words: ['java', 'list'], standard_check: true },
        { name: 'Java类库-容器类库', categroy: 'Java类库', tags: ['java', 'list'], create_time: '2019/09/07  13:00', update_time: '2020/09/07  13:53', size: '17,223', words: '17,223', storage_location: '博文临时库', todos: 1, key_words: ['java', 'list'], standard_check: true },
        { name: 'Java类库-并发类库-类库构件', categroy: 'Java类库', tags: ['java', 'list'], create_time: '2019/09/02  20:00', update_time: '2020/09/02  20:51', size: '1,954', words: '1,954', storage_location: '博文临时库', todos: 1, key_words: ['java', 'list'], standard_check: true },
        { name: 'Java类库-并发类库-线程', categroy: 'Java类库', tags: ['java', 'list'], create_time: '2019/09/04  14:00', update_time: '2020/09/04  14:26', size: '18,628', words: '18,628', storage_location: '博文临时库', todos: 1, key_words: ['java', 'list'], standard_check: true },
        { name: 'Java类库-并发类库-线程协作-锁机制', categroy: 'Java类库', tags: ['java', 'list'], create_time: '2019/09/04  13:00', update_time: '2020/09/04  13:55', size: '30,099', words: '30,099', storage_location: '博文临时库', todos: 3, key_words: ['java', 'list'], standard_check: true },
        { name: 'Java类库-并发类库-线程协作', categroy: 'Java类库', tags: ['java', 'list'], create_time: '2019/09/07  11:00', update_time: '2020/09/07  11:56', size: '16,779', words: '16,779', storage_location: '博文临时库', todos: 1, key_words: ['java', 'list'], standard_check: true },
        { name: 'Java类库-并发类库-线程池-其他处理', categroy: 'Java类库', tags: ['java', 'list'], create_time: '2019/09/02  13:00', update_time: '2020/09/02  13:49', size: '6,663', words: '6,663', storage_location: '博文临时库', todos: 6, key_words: ['java', 'list'], standard_check: true },
        { name: 'Java类库-并发类库-线程池', categroy: 'Java类库', tags: ['java', 'list'], create_time: '2019/09/07  11:00', update_time: '2020/09/07  11:40', size: '20,772', words: '20,772', storage_location: '博文临时库', todos: 2, key_words: ['java', 'list'], standard_check: true },
        { name: 'Java类库-并发类库', categroy: 'Java类库', tags: ['java', 'list'], create_time: '2019/09/07  11:00', update_time: '2020/09/07  11:27', size: '27,487', words: '27,487', storage_location: '博文临时库', todos: 2, key_words: ['java', 'list'], standard_check: true },
        { name: 'Java综述', categroy: 'Java综述', tags: ['java', 'list'], create_time: '2019/09/04  14:00', update_time: '2020/09/04  14:57', size: '5,608', words: '5,608', storage_location: '博文临时库', todos: 5, key_words: ['java', 'list'], standard_check: true },
        { name: 'Java高级-JVM', categroy: 'Java高级', tags: ['java', 'list'], create_time: '2019/09/08  19:00', update_time: '2020/09/08  19:54', size: '59,968', words: '59,968', storage_location: '博文临时库', todos: 5, key_words: ['java', 'list'], standard_check: true },
        { name: 'Linux-命令-wiki', categroy: 'Linux', tags: ['java', 'list'], create_time: '2019/10/07  15:00', update_time: '2020/10/07  15:12', size: '22,570', words: '22,570', storage_location: '博文临时库', todos: 2, key_words: ['java', 'list'], standard_check: true },
        { name: 'Linux-命令-转载-the-art-of-command-line', categroy: 'Linux', tags: ['java', 'list'], create_time: '2019/09/15  14:00', update_time: '2020/09/15  14:38', size: '40,555', words: '40,555', storage_location: '博文临时库', todos: 4, key_words: ['java', 'list'], standard_check: true },
        { name: '操作系统-IO模型', categroy: '操作系统', tags: ['java', 'list'], create_time: '2019/09/03  11:00', update_time: '2020/09/03  11:11', size: '8,314', words: '8,314', storage_location: '博文临时库', todos: 8, key_words: ['java', 'list'], standard_check: true },
        { name: '操作系统-内存管理-虚拟内存', categroy: '操作系统', tags: ['java', 'list'], create_time: '2019/09/18  14:00', update_time: '2020/09/18  14:52', size: '16,525', words: '16,525', storage_location: '博文临时库', todos: 1, key_words: ['java', 'list'], standard_check: true },
        { name: '操作系统-进程管理-并发控制', categroy: '操作系统', tags: ['java', 'list'], create_time: '2019/09/18  14:00', update_time: '2020/09/18  14:22', size: '28,762', words: '28,762', storage_location: '博文临时库', todos: 2, key_words: ['java', 'list'], standard_check: true },
        { name: '操作系统-进程管理', categroy: '操作系统', tags: ['java', 'list'], create_time: '2019/09/18  13:00', update_time: '2020/09/18  13:45', size: '25,418', words: '25,418', storage_location: '博文临时库', todos: 2, key_words: ['java', 'list'], standard_check: true },
        { name: '操作系统综述', categroy: '操作系统', tags: ['java', 'list'], create_time: '2019/09/17  22:00', update_time: '2020/09/17  22:22', size: '22,691', words: '22,691', storage_location: '博文临时库', todos: 2, key_words: ['java', 'list'], standard_check: true },
        { name: '数据库-MySQL和存储引擎', categroy: '数据库', tags: ['java', 'list'], create_time: '2019/09/06  10:00', update_time: '2020/09/06  10:43', size: '17,627', words: '17,627', storage_location: '博文临时库', todos: 1, key_words: ['java', 'list'], standard_check: true },
        { name: '数据库-SQL查询和优化-SQL查询实例', categroy: '数据库', tags: ['java', 'list'], create_time: '2019/09/06  11:00', update_time: '2020/09/06  11:20', size: '6,780', words: '6,780', storage_location: '博文临时库', todos: 6, key_words: ['java', 'list'], standard_check: true },
        { name: '数据库-SQL查询和优化', categroy: '数据库', tags: ['java', 'list'], create_time: '2019/09/06  11:00', update_time: '2020/09/06  11:03', size: '14,437', words: '14,437', storage_location: '博文临时库', todos: 1, key_words: ['java', 'list'], standard_check: true },
        { name: '数据库-事务-事务隔离性', categroy: '数据库-事务', tags: ['java', 'list'], create_time: '2019/09/05  00:00', update_time: '2020/09/05  00:09', size: '13,784', words: '13,784', storage_location: '博文临时库', todos: 1, key_words: ['java', 'list'], standard_check: true },
        { name: '数据库-事务', categroy: '数据库-事务', tags: ['java', 'list'], create_time: '2019/08/31  14:00', update_time: '2020/08/31  14:53', size: '11,864', words: '11,864', storage_location: '博文临时库', todos: 1, key_words: ['java', 'list'], standard_check: true },
        { name: '数据库-索引', categroy: '数据库-索引', tags: ['java', 'list'], create_time: '2019/09/06  10:00', update_time: '2020/09/06  10:44', size: '28,756', words: '28,756', storage_location: '博文临时库', todos: 2, key_words: ['java', 'list'], standard_check: true },
        { name: '数据库-综述', categroy: '数据库-综述', tags: ['java', 'list'], create_time: '2019/09/06  11:00', update_time: '2020/09/06  11:21', size: '2,038', words: '2,038', storage_location: '博文临时库', todos: 2, key_words: ['java', 'list'], standard_check: true },
        { name: '数据结构与算法-动态规划', categroy: '数据结构', tags: ['java', 'list'], create_time: '2019/10/12  16:00', update_time: '2020/10/12  16:21', size: '7,112', words: '7,112', storage_location: '博文临时库', todos: 7, key_words: ['java', 'list'], standard_check: true },
        { name: '数据结构与算法-基础数据结构相关算法', categroy: '数据结构', tags: ['java', 'list'], create_time: '2019/10/05  17:00', update_time: '2020/10/05  17:10', size: '8,294', words: '8,294', storage_location: '博文临时库', todos: 8, key_words: ['java', 'list'], standard_check: true },
        { name: '数据结构与算法-基础算法', categroy: '数据结构', tags: ['java', 'list'], create_time: '2019/09/06  21:00', update_time: '2020/09/06  21:56', size: '6,989', words: '6,989', storage_location: '博文临时库', todos: 6, key_words: ['java', 'list'], standard_check: true },
        { name: '计算机网络-HTTP-wiki', categroy: '计算机网络', tags: ['java', 'list'], create_time: '2019/08/15  16:00', update_time: '2020/08/15  16:43', size: '5,839', words: '5,839', storage_location: '博文临时库', todos: 5, key_words: ['java', 'list'], standard_check: true },
        { name: '计算机网络-传输层-TCP', categroy: '计算机网络', tags: ['java', 'list'], create_time: '2019/09/30  14:00', update_time: '2020/09/30  14:07', size: '25,289', words: '25,289', storage_location: '博文临时库', todos: 2, key_words: ['java', 'list'], standard_check: true },
        { name: '计算机网络-应用层-HTTP', categroy: '计算机网络', tags: ['java', 'list'], create_time: '2019/09/06  21:00', update_time: '2020/09/06  21:53', size: '23,130', words: '23,130', storage_location: '博文临时库', todos: 2, key_words: ['java', 'list'], standard_check: true },
        { name: '计算机网络-应用层', categroy: '计算机网络', tags: ['java', 'list'], create_time: '2019/09/14  22:00', update_time: '2020/09/14  22:15', size: '4,927', words: '4,927', storage_location: '博文临时库', todos: 4, key_words: ['java', 'list'], standard_check: true },
        { name: '计算机网络综述', categroy: '计算机网络', tags: ['java', 'list'], create_time: '2019/09/14  21:00', update_time: '2020/09/14  21:16', size: '3,588', words: '3,588', storage_location: '博文临时库', todos: 3, key_words: ['java', 'list'], standard_check: true }
      ],
      text: '',
      selected: []
    }
  },
  computed: {
    articleList: function () {
      //
    }
  },
  methods: {
    tagCloudData: function (tagNames) {
      return Array.from(tagNames, tagName => {
        return {
          name: tagName,
          link: '#' + tagName
        }
      })
    },
    onRowSelected(items) {
      this.selected = items
    }
  }
}
</script>

<style>
.filter-button-group{
  margin: 5px 5px;
}
.filter-button-item{
    background-color: #0e90d2;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    width: 33%;
    height: 35px;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 300ms ease-out,border-color 300ms ease-out;
    border: 1px solid rgba(55, 53, 47, 0.09);
}
.filter-button-item:hover {
  background-color: #0c79b1;
}
.table-bordered th, .table-bordered td {
  border: 1px solid #dee2e6;
  white-space: nowrap;
  overflow: hidden;
  word-break: keep-all;
}
/* .btn-group > button{
  background-color: #343a40;
} */
.table.b-table > tbody > .table-active, 
.table.b-table > tbody > .table-active > th, 
.table.b-table > tbody > .table-active > td {
    background-color: #fadcaa !important;
}
</style>