<template>
  <!-- todo: 查看对应的代码段修改的历史记录 -->
  <div id="snippet-history">
    <font-awesome-icon :icon="['fas', 'code-branch']" size="2x" transform="shrink-5"/>
    <b-popover target="snippet-history" triggers="hover" placement="top">
      <template #title>查看对应的代码段修改的历史记录</template>
      I am popover <b>component</b> content!
    </b-popover>
  </div>
</template>

<script>
export default {
  name: 'History',
  props: ['snippet']
}
</script>

<style>

</style>