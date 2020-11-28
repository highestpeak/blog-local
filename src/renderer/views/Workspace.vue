<template>
  <div class="workspace">
    <!-- 当前数据概述 -->
    <b-alert show variant="secondary">
      <h4 class="alert-heading">当前数据概述</h4>
      <p> 
        <b>数据源</b>: {{dataSourceName}} | 共 {{tableRows.length}} 条 | 共 {{Math.ceil(tableRows.length/perPage)}} 页 | 当前第 {{currentPage}} 页<br>
        <b>选中状态</b>: 共 {{ tableRowSelected.length }} 条 <br>
      </p>
    </b-alert><!-- 当前数据概述 -->

    <DataSourceToolbar ref="dataSourceToolbar" @change-data-source='changeDataSource' @search-by-sql='searchBySqlEvent'/>
    <!-- 选择哪些列可以显示 -->
    <!-- <div class="col-show-select"> -->
    <b-alert show variant="secondary" class="col-show-select">
      <!-- <span> 显示的列 </span> -->
      <b-form inline>
        <!-- <b-form-text style="color:#fff !important" >显示的列</b-form-text> -->
        <b-form-text >显示的列</b-form-text>
        <b-form-checkbox-group
          v-model="tableFieldsToShow"
          :options="tableFieldOptions"
          class="mb-3"
          value-field="item"
          text-field="name"
          disabled-field="notEnabled"
          switches
        >
        </b-form-checkbox-group>
      </b-form>

      <b-form inline>
        <b-form-text >显示模式</b-form-text>
        <b-form-checkbox v-model="isMutiSelect" switch>多选</b-form-checkbox>
        <!-- |
        <b-form-text style="margin-left:10px">模式选择</b-form-text>
        <b-form-select v-model="modeToShow" :options="modeOptions" size="sm" class="mt-3"></b-form-select> -->
        <!-- <p>
          todo: 显示模式，即给一组显示参数，例如 一页显示10条，按照 id 排序，只显示 todos 这样一组参数命名的一个模式
          <br>
          这个模式可以动态的添加的
          <br>
          这个模式应当也可以自定义每个列显示哪些数据
        </p> -->
      </b-form>

      <b-form inline>
        <!-- <b-form-text style="color:#fff !important" >页面</b-form-text> -->
        <b-form-text >页面</b-form-text>

        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          pills
          size="sm"
          aria-controls="data-table"
        ></b-pagination>

        <b-form-select v-model="perPage" :options="perPageOptions" size="sm" class="mt-3"></b-form-select>

        <b-form-spinbutton v-model="perPage" min="1" max="100" size="sm"></b-form-spinbutton>
      </b-form>
    </b-alert>
    <!-- </div> -->

    <!-- 数据表格 -->
    <div style="margin: 5px 10px;">
      <b-table 
        id="data-table"
        ref="orignDataTable"
        striped hover responsive selectable
        sticky-header="510px"
        headVariant="dark"
        :select-mode="isMutiSelect?'multi':'single'"
        :fields="tableFields"
        :items="tableRows"
        :small="true"
        :bordered="true"
        table-variant=""
        @row-selected="onRowSelected"
        :per-page="perPage"
        :current-page="currentPage"
        :show-empty='true'
        :tbody-tr-class="tableItemClass"
        >
          <!-- Example scoped slot for select state illustrative purposes -->
          <!-- todo:
            记忆被选定的列
            https://bootstrap-vue.org/docs/components/table#row-select-support -->
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
            <a v-b-modal.article-detail href="#" class="text-dark" style="font-weight: 600;" @click="clickRow(row.item)"> {{row.item.name}} </a>
          </template>

          <!-- categroy -->
          <!-- todo: 同tags，但是组件为 bootstrapvue 的 sidebar，并额外新增：下属tag的网状图 -->
          <template #cell(categries)="row">
            <a href="#" v-for="(categroy,index) in row.item.categries" :key="index"> {{categroy}} </a>
          </template>

          <!-- tags -->
          <!-- todo: 点击则显示相应的 tag 的详细内容（浮动）组件为 Popover -->
          <template #cell(tags)="row">
            <!-- {{row.item.tags}} -->
            <TagCloud :tags=tagCloudData(row.item.tags) />
          </template>

          <!-- storage_location -->
          <!-- todo: 点击打开对应的资源管理器的位置
               todo: 多个存储位置，不同地点的 -->
          <template #cell(storage_location)="row">
            <a href="#"> {{row.item.storage_location}} </a>
          </template>

          <!-- Optional default data cell scoped slot -->
          <template #cell()="data">
            <i>{{ data.value }}</i>
          </template>
          <!-- todo: todos的悬浮会显示todo事项，组件为 popover -->
      </b-table>

      <!-- ArticleDetail -->
      <b-modal id="article-detail" size="lg" hide-header hide-footer centered>
        <ArticleDetail :articleInfo='rowClicked'/>
      </b-modal>
    </div>

    <!-- todo: 批量文字处理 批量类别和标签处理 批量选择后进行标准检查等 进行批量提交等-->
    <!--  文字处理即 批量重命名 前缀命名 后缀命名 -->
    <!--  类别和标签处理即添加和删除类别标签 更改类别名称 -->
  </div>
</template>

<script>
import OneLineListItem from '@/components/OneLineListItem.vue'
import TagCloud from '@/components/Tags/TagCloud.vue'
import DataSourceToolbar from '@/components/Workspace/DataSourceToolbar.vue'
import ArticleDetail from '@/components/Workspace/ArticleDetail.vue'
import { searchBySql, nameToDataFucDict } from '@/dataBroker/Workspace.js'
export default {
  name: 'workspace',
  components: {
    OneLineListItem, TagCloud, DataSourceToolbar, ArticleDetail
  },
  data: function() {
    return {
      allFields: {
        'index': {
          optionGroupUse: {item: 'index', name: '序号'},
          tableFieldsUse: {key: 'index'}
        },
        'name': {
          optionGroupUse: {item: 'name', name: '标题'},
          tableFieldsUse: {key: 'name'}
        },
        'categries': {
          optionGroupUse: {item: 'categries', name: '分类'},
          tableFieldsUse: {key: 'categries', sortable: true}
        },
        'tags': {
          optionGroupUse: {item: 'tags', name: 'tags'},
          tableFieldsUse: {key: 'tags', sortable: true}
        },
        'create_time': {
          optionGroupUse: {item: 'create_time', name: '创建时间'},
          tableFieldsUse: {key: 'create_time', sortable: true}
        },
        'update_time': {
          optionGroupUse: {item: 'update_time', name: '更新时间'},
          tableFieldsUse: {key: 'update_time', sortable: true}
        },
        'todos': {
          optionGroupUse: {item: 'todos', name: 'todos'},
          tableFieldsUse: {key: 'todos', sortable: true}
        },
        'standard_check': {
          optionGroupUse: {item: 'standard_check', name: '标准检查'},
          tableFieldsUse: {key: 'standard_check'}
        },
        'size': {
          optionGroupUse: {item: 'size', name: '大小'},
          tableFieldsUse: {key: 'size', sortable: true, class: 'text-right'}
        },
        'words': {
          optionGroupUse: {item: 'words', name: '字数'},
          tableFieldsUse: {key: 'words', sortable: true, class: 'text-right'}
        },
        'storage_location': {
          optionGroupUse: {item: 'storage_location', name: '存储位置'},
          tableFieldsUse: {key: 'storage_location', sortable: true}
        },
        'key_words': {
          optionGroupUse: {item: 'key_words', name: '关键字'},
          tableFieldsUse: {key: 'key_words', sortable: true}
        }
      },
      // table field self select checkbox group
      tableFieldOptions: [],
      tableFieldsToShow: [],
      // table field mode select 显示模式
      // modeToShow: 'none',
      // modeOptions: [
      //   {value: 'none', html: '<b>none-手动选择</b>'},
      //   {value: '2', html: '2'},
      //   {value: '3', html: '2'},
      //   {value: '4', html: '2'},
      //   {html: '<b>Item</b> 3', value: 'third'}
      // ],
      // pagination
      perPage: 10,
      currentPage: 1,
      perPageOptions: [
        {value: 1, text: 1},
        {value: 5, text: 5},
        {value: 10, text: 10},
        {value: 20, text: 20}
      ],
      // table
      // orignData 用于后续的 sidebar 详细信息等
      orignData: [],
      // table 显示的行数据
      tableRows: [],
      // 被选中的行数据 和 tableRows 数据格式相同
      tableRowSelected: [],
      // 被点击的行
      rowClicked: null,
      // 是否多选
      isMutiSelect: false
    }
  },
  created () {
    this.tableFieldOptions = [
      this.allFields['categries'].optionGroupUse,
      this.allFields['tags'].optionGroupUse,
      this.allFields['create_time'].optionGroupUse,
      this.allFields['update_time'].optionGroupUse,
      this.allFields['todos'].optionGroupUse,
      this.allFields['standard_check'].optionGroupUse,
      this.allFields['size'].optionGroupUse,
      this.allFields['words'].optionGroupUse,
      this.allFields['storage_location'].optionGroupUse,
      this.allFields['key_words'].optionGroupUse
    ]
    this.tableFieldsToShow = ['index', 'name', 'categries', 'tags', 'create_time']
  },
  mounted () {
    var globalIsMutiSelectRember = this.$store.state.Workspace.isMutiSelect
    if (globalIsMutiSelectRember !== null && globalIsMutiSelectRember === true) {
      this.isMutiSelect = true
    }

    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered

      // 选中所有上一次选中的列
      // console.log(this.$store.state.Workspace.tableRowSelected)
      var rowSelected = this.$store.state.Workspace.tableRowSelected
      // 使用标题 title 来作为唯一性判断
      var rowSelectedNames = new Set()
      for (let index = 0; index < rowSelected.length; index++) {
        const oneRowSelected = rowSelected[index]
        // console.log(oneRowSelected)
        // console.log(oneRowSelected.name)
        rowSelectedNames.add(oneRowSelected.name)
      }
      // console.log(rowSelectedNames)
      for (let index = 0; index < this.tableRows.length; index++) {
        const tableRowNow = this.tableRows[index]
        // console.log(rowSelectedNames.has(tableRowNow.name))
        if (rowSelectedNames.has(tableRowNow.name)) {
          this.$refs.orignDataTable.selectRow(index)
        }
      }
    })
  },
  computed: {
    tableFields: function () {
      var fieldArray = []
      if (this.isMutiSelect) {
        fieldArray.push('selected')
      }
      for (let index = 0; index < this.tableFieldsToShow.length; index++) {
        const nameOffieldToShow = this.tableFieldsToShow[index]
        fieldArray.push(this.allFields[nameOffieldToShow].tableFieldsUse)
      }
      return fieldArray
    },

    rows: function () {
      return this.tableRows.length
    },

    dataSourceName: function () {
      return this.$store.state.Workspace.dataSourceName
    }
  },
  watch: {
    isMutiSelect: function () {
      this.$store.commit('Workspace/updateMutiSelect', this.isMutiSelect)
    }
  },
  methods: {
    changeDataSource: function (dataSourceName) {
      var fuc = nameToDataFucDict[dataSourceName]
      if (fuc === undefined) {
        return
      }

      var thisInstance = this
      // call fuc and send callback in
      fuc(function (data) {
        // console.log('changeDataSource fuc callback')
        console.log(data)

        thisInstance.orignData = []
        thisInstance.tableRows = []
        var tableRows = thisInstance.tableRows
        // change field name to table col name
        for (let index = 0; index < data.length; index++) {
          const dataItem = data[index]
          thisInstance.orignData.push(dataItem)

          var row = {
            name: dataItem.title,
            categries: dataItem.categories,
            tags: dataItem.tags,
            create_time: dataItem.time,
            // todo
            update_time: null,
            todos: Object.keys(dataItem.tagScanned).length,
            // todo
            standard_check: null,
            size: dataItem.size[1],
            words: dataItem.words,
            storage_location: dataItem.storageLocation,
            key_words: Object.keys(dataItem.keyWords),
            status: dataItem.status,
            orignData: dataItem
          }

          tableRows.push(row)
        }
      })
    },

    // todo: 应当可以执行sql排序
    searchBySqlEvent: function (sql) {
      console.log('searchBySqlEvent start')
      searchBySql(sql)
      console.log('searchBySqlEvent after')
    },

    onRowSelected(selectedItems) {
      this.tableRowSelected = selectedItems
      this.$store.commit('Workspace/updateSelectedRows', selectedItems)
    },

    // 生成 tagCloud 组件调用所需要的数据
    tagCloudData: function (tagNames) {
      return Array.from(tagNames, tagName => {
        return {
          name: tagName,
          link: '#' + tagName
        }
      })
    },

    // 根据不同行 status 的不同附加上不同的 class: new modify del
    tableItemClass: function (item, type) {
      if (!item || type !== 'row') {
        return
      }

      // console.log(item)
      var status = item.status
      if (status.new === true) {
        return 'new-item'
      } else if (status.del === true) {
        return 'del-item'
      } else if (status.modify === true) {
        return 'modify-item'
      }
    },

    clickRow: function (row) {
      this.rowClicked = row.orignData
    }
  }
}
</script>

<style>
/* 第一级后代，除去第一个 */
.workspace > *{
  margin:10px;
}
.alert {
  border-radius: 0 !important;
}
.col-show-select{
  padding: 0.75rem 0.5rem !important;
  /* color: #fff !important;
  background-color: #6C757D !important;
  border-color: #6C757D !important; */
}
.col-show-select .bv-no-focus-ring{
  margin-bottom: 0rem !important;
}
.col-show-select ul{
  margin-bottom: 0;
}
.col-show-select > .form-inline:not(:first-child){
  margin-top: 10px;
}
.col-show-select > .form-inline > *{
  margin-right: 10px;
  margin-top: 0 !important;
}
.col-show-select *{
  border-radius: 0 !important;
}
/* .col-show-select > .form-inline > *:not(.b-form-spinbutton,.custom-select){
  color: #fff;
} */
.table-bordered th, .table-bordered td {
  border: 1px solid #dee2e6;
  /* 内容在一行上 */
  white-space: nowrap;
  overflow: hidden;
  word-break: keep-all;
}
/* 选中的颜色 */
.table.b-table > tbody > .table-active, 
.table.b-table > tbody > .table-active > th, 
.table.b-table > tbody > .table-active > td {
  background-color: #fadcaa !important;
}
/* 不同状态的行的颜色 */
.table.b-table > tbody > .new-item, 
.table.b-table > tbody > .new-item > th, 
.table.b-table > tbody > .new-item > td {
  background-color: #d4edda ;
}
.table.b-table > tbody > .del-item, 
.table.b-table > tbody > .del-item > th, 
.table.b-table > tbody > .del-item > td {
  background-color: #ffb0b0 ;
}
.table.b-table > tbody > .modify-item, 
.table.b-table > tbody > .modify-item > th, 
.table.b-table > tbody > .modify-item > td {
  background-color: #fadcaa ;
}
.table-bordered th, .table-bordered td {
  border: 1px solid #49505752 !important;
}
/* hover 会有渐变 */
.table.b-table.table-hover > tbody > tr:hover td,
.table.b-table.table-hover > tbody > tr:hover th {
    color: #212529;
    background-image: linear-gradient(rgba(0, 0, 0, 0.075), rgba(0, 0, 0, 0.075));
    background-repeat: no-repeat;
}
</style>