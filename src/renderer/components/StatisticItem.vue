<template>
  <div style="display: flex;margin: 10px;">
    <font-awesome-icon :icon="icon" size="lg" style="color: #afaeac" />
    <div style="margin-left:5px;font-weight: bold;white-space: nowrap;"> 
      {{name}}
      <span v-if="align!==null">
        <span v-for="(key,index) in align-name.length" :key="index">&nbsp;</span>
      </span>
      :
    </div>
    &nbsp;
    <div style="margin-left:5px;white-space: normal;"> 
      <span v-if="!useSlot">{{value}}</span>
      <slot v-else name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatisticItem',
  props: {
    icon: {
      type: Array,
      default: function () {
        return ['fas', 'home']
      }
    },
    name: {
      type: String,
      default: 'name'
    },
    value: {
      type: String | Number,
      default: 'value'
    },
    useSlot: {
      type: Boolean,
      default: false
    },
    align: {
      type: Number,
      default: null
    }
  }
}
</script>

<style>
</style>