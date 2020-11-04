<template>
  <div style="display: flex;align-items: center;margin: 10px;">
    <font-awesome-icon :icon="icon" size="lg" style="color: #afaeac" />
    <div style="margin-left:5px;font-weight: bold;"> {{name}}&nbsp;:</div>&nbsp;
    <div style="margin-left:5px;"> {{value}} </div>
  </div>
</template>

<script>
export default {
  name: 'StatisticItem',
  props: {
    icon: {
      type: Array,
      default: ['fas', 'home']
    },
    name: {
      type: String,
      default: 'name'
    },
    value: {
      type: String,
      default: 'value'
    }
  }
}
</script>

<style>
</style>