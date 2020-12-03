<template>
  <!-- todo: 复制 Gist html的引用代码 -->
  <div id="snippet-copy-format">
    <font-awesome-icon :icon="['fas', 'file-code']" size="2x" transform="shrink-5"/>
    <b-popover target="snippet-copy-format" triggers="hover" placement="top">
      <template #title>复制 Gist html的引用代码</template>
      I am popover <b>component</b> content!
    </b-popover>
  </div>
</template>

<script>
export default {
  name: 'CopyFormat',
  props: ['snippet']
}
</script>

<style>

</style>