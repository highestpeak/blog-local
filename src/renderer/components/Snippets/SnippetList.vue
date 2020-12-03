<template>
  <!-- snippet list -->
  <div style="overflow-y: scroll;height: 96vh;">
    <!-- item -->
    <div class="snippet-list-item" 
      v-for="(snippet,index) in snippetList" :key="index"
      @click="$emit('select-snippet', snippet)">
      <!-- name -->
      <div class="snippte-list-item-title">
        <span>{{snippet.name}}</span>
      </div>
      <!-- folder and time -->
      <div class="snippet-list-item-meta">
        <div class="folder">
          {{snippet.folder}}
        </div>
        <div class="date">
          {{snippet.time}}
        </div>
      </div><!-- folder and time -->
    </div><!-- item -->
  </div><!-- snippet list -->
</template>

<script>
export default {
  name: 'SnippetList',
  props: {
    snippetList: {
      type: Array,
      default: []
    }
  }
}
</script>

<style>
.snippet-list-item{
  padding: 8px;
  border-bottom: 1px solid #d9d9d9;
  outline: none;
  margin-right: 1px;
  user-select: none;
  cursor: auto;
}
.snippet-list-item:hover{
  background-color: #F8F7F6;
}
.snippet-list-item-title{
  display: table;
  table-layout: fixed;
  width: 100%;
  overflow: hidden;
}
.snippet-list-item-title span{
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.snippet-list-item-meta{
  display: flex;
  color: #808080;
  margin-top: 8px;
  justify-content: space-between;
  font-size: 10px;
}
</style>