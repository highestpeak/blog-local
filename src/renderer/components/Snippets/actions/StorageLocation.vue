<template>
  <!-- todo: 配置 Gist 代码段的存储位置，从而进行备份等操作 -->
  <div id="snippet-storage-location">
    <font-awesome-icon :icon="['fas', 'database']" size="2x" transform="shrink-5"/>
    <b-popover target="snippet-storage-location" triggers="hover" placement="top">
      <template #title>配置 Gist 代码段的存储位置，从而进行备份等操作</template>
      I am popover <b>component</b> content!
    </b-popover>
  </div>
</template>

<script>
export default {
  name: 'StorageLocation',
  props: ['snippet']
}
</script>

<style>

</style>