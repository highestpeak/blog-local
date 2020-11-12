<template>
  <!-- todo: 使用 sidebar -->
  <b-tabs content-class="mt-3">
    <b-tab title="First" active><p>I'm the first tab</p></b-tab>
    <b-tab title="Second"><p>I'm the second tab</p></b-tab>
    <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
  </b-tabs>
</template>

<script>
export default {
  name: 'Settings'
}
</script>

<style>

</style>