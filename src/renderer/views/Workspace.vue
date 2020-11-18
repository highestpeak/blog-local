<template>
  <div class="workspace">
    <DataSourceToolbar @change-data-source='changeDataSource' @search-by-sql='searchBySql'/>
    
    <!-- 当前数据概述 -->
    <b-alert show variant="success">
      <h4 class="alert-heading">当前数据概述</h4>
      <p>
        这里会显示 数据源名称 sql会具体到每个语句
      </p>
      <p>
        会显示下面的数据表格的基本信息：包括但不限于处于选中状态的有多少条、数据有多少条等
      </p>
      <p>
        可以设置显示哪些列
      </p>
      <p>
        显示模式，即给一组显示参数，例如 一页显示10条，按照 id 排序，只显示 todos 这样一组参数命名的一个模式
        <br>
        这个模式可以动态的添加的
      </p>
    </b-alert><!-- 当前数据概述 -->

    <!-- 数据表格 -->
    <b-table 
      striped hover responsive selectable
      sticky-header="510px"
      headVariant="dark"
      select-mode="multi"
      :fields="tableFields"
      :items="tableRows"
      :small="true"
      :bordered="true"
      table-variant=""
      @row-selected="onRowSelected"
      >

    </b-table>

  </div>
</template>

<script>
import OneLineListItem from '@/components/OneLineListItem.vue'
import TagCloud from '@/components/Tags/TagCloud.vue'
import DataSourceToolbar from '@/components/Workspace/DataSourceToolbar.vue'
export default {
  name: 'workspace',
  components: {
    OneLineListItem, TagCloud, DataSourceToolbar
  },
  data: function() {
    return {
      tableFields: [],
      tableRows: [],
      tableRowSelected: []
    }
  },
  computed: {
  },
  methods: {
    changeDataSource: function (dataSourceName) {
      console.log(dataSourceName)
    },
    // todo: 应当可以执行sql排序
    searchBySql: function (sql) {
      console.log(sql)
    },
    onRowSelected(selectedItems) {
      this.tableRowSelected = selectedItems
    }
  }
}
</script>

<style>
/* 第一级后代，除去第一个 */
.workspace > *{
  margin:10px;
}
</style>