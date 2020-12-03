<template>
  <!-- todo: 代码段描述 -->
  <div id="snippet-description-in-md">
    <font-awesome-icon :icon="['fas', 'info']" size="2x" transform="shrink-5"/>
    <b-popover target="snippet-description-in-md" triggers="hover" placement="top">
      <template #title>代码段描述</template>
      I am popover <b>component</b> content!
    </b-popover>
  </div>
</template>

<script>
export default {
  name: 'DescMd',
  props: ['snippet']
}
</script>

<style>

</style>