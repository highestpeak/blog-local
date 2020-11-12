<template>
  <div>
    <b-container style="max-height: 695px;">
      <b-row style="max-height: 695px;">
        <b-col style="padding:0;width:228px;flex-grow: initial;">
          <SettingSidebar v-on:changeCurrSettingName='changeCurrSettingNameHandle' style="background: rgb(247, 246, 243);"/>
        </b-col>
        <b-col style="padding:0;">
          <div style="overflow-y: scroll;height: 100%;">
            <!-- <p v-for="(value,index) in 100" :key="index">
            2 of 3 (wider)
            </p> -->
            <!-- vue 动态组件 -->
            <component v-bind:is="componentName"></component>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SettingSidebar from '@/components/Setting/SettingSidebar.vue'
export default {
  name: 'Settings',
  components: {
    SettingSidebar
  },
  data () {
    return {
      componentName: ''
    }
  },
  methods: {
    changeCurrSettingNameHandle: function(name) {
      console.log(name)
      this.componentName = name
    }
  }
}
</script>

<style>
</style>