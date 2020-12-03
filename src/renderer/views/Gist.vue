<template>
  <b-container fluid style="height:100vh;overflow: hidden;">
    <b-row>
      <b-col cols="3" style="height:100vh;background-color:#fff;padding:0;border:1px solid #0000001a">
        <!-- search bar -->
        <SearchBar @search-snippet-content='snippetSearchEvent' @add-snippet='snippetAddEvent'/>

        <!-- snippet list -->
        <SnippetList :snippetList='snippetList' @select-snippet='snippetSelectEvent'/>
      </b-col>

      <b-col cols="9" style="height:100vh">
        <SnippetViewHead :snippet='currSnippet'/>

        <div class="snippet-view-body" style="height: 88%;">
          <!-- todo: 需要从文件中读取内容，或者从网络中获取内容 -->
          <MonacoEditor
            v-model="snippetContent"
            :language="language"
            @change:lang="onChangeLanguage($event, index)"/>
        </div>
      </b-col>
    </b-row>
  </b-container>
    <!-- <div>
        <p>
          4. 监听文件夹的变更， 同步到一个文件夹和同步到一个远程仓库
        </p>
        <p>
          5. 标签
          标签等写在每个代码文件的头部的注释里
          这样直接往文件夹里写文件就可以被软件读取
        </p>
        <p>
          6. 查看对应的代码段修改的历史记录
        </p>
    </div> -->
</template>

<script>
import SearchBar from '@/components/Snippets/SearchBar.vue'
import SnippetList from '@/components/Snippets/SnippetList.vue'
import MonacoEditor from '@/components/Snippets/MonacoEditor.vue'
import SnippetViewHead from '@/components/Snippets/SnippetViewHead.vue'
import {
  MockSnippet, MockCode
} from '@/dataBroker/Snippet.js'
export default {
  name: 'Gist',
  components: {
    SearchBar, SnippetList, MonacoEditor, SnippetViewHead
  },
  data() {
    return {
      snippetList: MockSnippet,
      currSnippet: MockSnippet[0],
      snippetContent: MockCode,
      language: 'java'
    }
  },
  methods: {
    snippetSearchEvent: function (searchContent) {
      // todo
    },
    snippetAddEvent: function () {
      // todo
    },
    snippetSelectEvent: function (snippet) {
      // todo
    }
  }
}
</script>

<style>

</style>