<template>
  <!-- Button toolbar -->
  <b-button-toolbar class="data-source-toolbar">
    <!-- 基本功能 -->
    <b-button-group size="sm">
      <b-button 
        squared 
        v-for="(dataSource,index) in basicDataSource" :key="index"
        @click="selectedDataSource(dataSource.name)">
          {{ dataSource.caption }}
      </b-button>
    </b-button-group><!-- 基本功能 -->
    
    <!-- 其他自定义数据 -->
    <b-button-group size="sm">
      <template v-for="(dataSource,index) in otherDataSource">
        <b-button 
          squared 
          v-if="dataSource.items==null" :key="index"
          @click="selectedDataSource(dataSource.name)"> 
          {{ dataSource.caption }} 
        </b-button>

        <b-dropdown size="sm"
          v-else-if="dataSource.items!=null" :key="index" 
          :text="dataSource.name"> 
          <b-dropdown-item size="sm" 
            v-for="(item,itemIndex) in dataSource.items" :key="itemIndex"
            @click="selectedDataSource(item.name)"> 
            {{ item.caption }} 
          </b-dropdown-item>
        </b-dropdown>
      </template>
    </b-button-group><!-- 其他自定义数据 -->

    <!-- 右侧自定义查询 -->
    <b-input-group size="sm" class="ml-auto" style="width: 30%;">
      <b-input-group-prepend is-text>
        <font-awesome-icon :icon="['fas','search']" style="color: #afaeac" />
      </b-input-group-prepend>

      <b-form-input id="popover-target-1" @input="inputSql" placeholder="Enter your search sql" style="height: auto;"></b-form-input>

      <b-input-group-append>
        <b-button variant="info" @click="$emit('search-by-sql', searchSql)">GO</b-button>
      </b-input-group-append>

      <!-- todo: sql 提示 -->
      <b-popover target="popover-target-1" triggers="focus" placement="bottom">
        <div v-html="sqlPointHtml"></div>
      </b-popover>
    </b-input-group><!-- 右侧自定义查询 -->

  </b-button-toolbar><!-- Button toolbar -->
</template>

<script>
import { basicDataSource, otherDataSource, sqlPointHtml } from '@/dataBroker/Workspace.js'
export default {
  name: 'DataSourceToolbar',
  data() {
    return {
      basicDataSource: basicDataSource,
      otherDataSource: otherDataSource,
      currDataSource: null,
      sqlPointHtml: sqlPointHtml,
      searchSql: ''
    }
  },
  created() {
    this.selectedDataSource('basic', this.basicDataSource[0])
  },
  methods: {
    inputSql: function (sql) {
      this.currDataSource = 'sql:' + sql
      this.searchSql = sql
    },
    selectedDataSource: function (dataSourceName) {
      if (this.currDataSource == null && this.basicDataSource[0] != null) {
        this.currDataSource = this.basicDataSource[0].name
      } else {
        this.currDataSource = dataSourceName
      }
      this.$emit('change-data-source', this.currDataSource)
    }
  }
}
</script>

<style>
/* 第一级后代，除去第一个 */
.data-source-toolbar > *:not(:first-child){
  margin-left:10px;
}
</style>