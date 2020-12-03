<template>
  <!-- todo: 和文章的映射关系 -->
  <div id="snippet-article-graph">
    <font-awesome-icon :icon="['fas', 'project-diagram']" size="2x" transform="shrink-5"/>
    <b-popover target="snippet-article-graph" triggers="hover" placement="top">
      <template #title>和文章的映射关系</template>
      I am popover <b>component</b> content!
    </b-popover>
  </div>
</template>

<script>
export default {
  name: 'ArticleGraph',
  props: ['snippet']
}
</script>

<style>

</style>