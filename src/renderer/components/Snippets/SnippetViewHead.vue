<template>
  <div class="snippet-view-title">
    <div class="snippet-view-header">
      <div class="snippet-view-name-action">
        <!-- name input -->
        <input v-model="snippet.name" type="text" placeholder="snippet name" autocomplete="on">

        <!-- actions -->
        <div style="display: flex;">
          <StorageLocation class="snippet-view-actions-item" :snippet='snippet'/>
          <CopyFormat class="snippet-view-actions-item" :snippet='snippet'/>
          <ArticleGraph class="snippet-view-actions-item" :snippet='snippet'/>
          <DescMd class="snippet-view-actions-item" :snippet='snippet'/>
          <History class="snippet-view-actions-item" :snippet='snippet'/>
        </div><!-- actions -->
      </div>
    </div>

    <!-- tags -->
    <div class="snippet-view-tags">
      <b-form-tags input-id="tags-basic" v-model="snippet.tags"></b-form-tags>
    </div><!-- tags -->
  </div>
</template>

<script>
import History from '@/components/Snippets/actions/History.vue'
import StorageLocation from '@/components/Snippets/actions/StorageLocation.vue'
import CopyFormat from '@/components/Snippets/actions/CopyFormat.vue'
import ArticleGraph from '@/components/Snippets/actions/ArticleGraph.vue'
import DescMd from '@/components/Snippets/actions/DescMd.vue'
export default {
  name: 'SnippetViewHead',
  components: {
    History, StorageLocation, CopyFormat, ArticleGraph, DescMd
  },
  props: ['snippet']
}
</script>

<style>
.snippet-view-title{
  padding: 8px;
  overflow: hidden;
  display: flex;
  flex-flow: column;
}
.snippet-view-header{
  display: flex;
  width: 100%;
  overflow: hidden;
}
.snippet-view-name-action{
  width: 100%;
  display:flex;
  position: relative;
}
.snippet-view-name-action input{
  font-size: 18px;
  font-weight: 600;
  height: 30px;
  line-height: 30px;
  position: relative;
  width: 100%;
  color: #262626;
  box-sizing: border-box;
  -webkit-appearance: none;
  outline: none;
  background-color: transparent;
  transition: border-color 0.3s;
  padding: 0 0px;
  border: 1px solid transparent;
}
.snippet-view-tags .b-form-tags{
  width: 100%;
  padding: 5px 0;
  color: #495057;
  border: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.snippet-view-tags .badge{
  border-radius: 0;
}

.snippet-view-actions-item{
  margin-left: 10px;
  color: #E8E7E4;
}
.snippet-view-actions-item:hover{
  color: #262626;
  cursor: default;
}
</style>