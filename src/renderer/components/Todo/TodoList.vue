<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <div class="new-todo-list-item" style="color: #37352f66;">
          <font-awesome-icon :icon="['fas', 'plus']" size="1x" style="margin-right:10px;"/>
          New
        </div>
        <CustomCheckbox v-for="(key,index) in 10" :key="index"
          :style="{'background-color':index%2===0?'#F8F7F6':'#FFFFFF'}">
          <template slot="body" style="font-size: 1.5rem;">
            <label style="display: block;">

            </label>
            <span style="font-weight: 700;display: inline;font-size:25px;">Title: </span>
            <span style="font-size:18px;">测试一条TODO的列表条目</span>
            <div style="display: flex;">
              <ul style="margin-bottom: 0;padding: 0;list-style: none;position: relative;opacity: .7;">
                <li style="font-size: small;display: inline;padding: 3px;white-space: nowrap;opacity: 1;overflow: hidden;border: .5px solid #dbdbdb;">META TAG</li>
              </ul>
            </div>
          </template>
        </CustomCheckbox>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CustomCheckbox from '@/components/CustomCheckbox.vue'
export default {
  name: 'TodoList',
  props: {
    targetTag: {
      type: String,
      default: 'all'
    }
  },
  components: {
    CustomCheckbox
  },
  created() {
    // todo: 从数据库获取指定 targetTag 的所有 todo 项
    // todo: 有序
  }
}
</script>

<style>
.new-todo-list-item{
  margin-bottom: 8px;
  transition: background 100ms ease-out 0s;
  cursor: pointer;
  overflow: hidden;
  word-break: break-word;
  padding: 8px 10px;
}
.new-todo-list-item:hover{
  background-color: #F1F0ED;
}
</style>