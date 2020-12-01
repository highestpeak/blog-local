<template>
  <b-container fluid>
    <b-row style="text-align:center;margin-bottom:10px;">
      <b-col><h3>todo</h3></b-col>
      <b-col><h3>doing</h3></b-col>
      <b-col><h3>done</h3></b-col>
    </b-row>
    <b-row class="draggable-row">
      <b-col v-for="(list,index) in group" :key="index">
        <div class="draggable-list-group-item draggable-new" style="color: #37352f66;">
          <font-awesome-icon :icon="['fas', 'plus']" size="1x" style="margin-right:10px;"/>
          New
        </div>
        <!-- https://github.com/SortableJS/Vue.Draggable -->
        <!-- https://github.com/David-Desmaisons/draggable-example/blob/master/src/components/Hello.vue -->
        <draggable class="draggable-list-group" :list="list" v-bind="dragOptions">
          <transition-group>
            <div v-for="(element,index) in list" :key="index" class="draggable-list-group-item">
              {{element.name}}
            </div>
          </transition-group>
        </draggable>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'TodoBoard',
  props: {
    targetTag: {
      type: String,
      default: 'all'
    }
  },
  components: {
    draggable
  },
  data() {
    return {
      dragOptions: {
        animation: 0,
        // 同一个 group 内的可以互相拖拽
        group: 'board',
        disabled: false,
        ghostClass: 'ghost'
      },
      // data to show
      items: [
        {name: 'item1', state: 'todo'},
        {name: 'item2', state: 'todo'},
        {name: 'item3', state: 'todo'},
        {name: 'item4', state: 'todo'},
        {name: 'item5', state: 'todo'}
      ],
      todoList: [],
      doingList: [],
      doneList: [],
      group: []
    }
  },
  created () {
    // todo: 从数据库获取指定 targetTag 的所有 todo 项
    // todo: 有序
    this.itemsGroupByState()
    this.group.push(this.todoList, this.doingList, this.doneList)
  },
  methods: {
    // todo: 耦合点 不能添加新的状态
    itemsGroupByState: function () {
      for (let index = 0; index < this.items.length; index++) {
        const item = this.items[index]
        switch (item.state) {
          case 'todo':
            this.todoList.push(item)
            break
          case 'doing':
            this.doingList.push(item)
            break
          case 'done':
            this.doneList.push(item)
            break
          default:
            break
        }
      }
    }
  }
}
</script>

<style>
.draggable-row > .col:not(:last-child){
  border-right: 1px solid #0000001a;
}
.draggable-list-group {
  min-height: 20px;
}
.draggable-list-group>span{
  min-height: 50px;
  display: block;
}
.draggable-list-group-item {
  box-shadow: #0f0f0f1a 0px 0px 0px 1px, #0f0f0f1a 0px 2px 4px;
  margin-bottom: 8px;
  transition: background 100ms ease-out 0s;
  cursor: pointer;
  overflow: hidden;
  word-break: break-word;
  padding: 8px 10px;
}
.draggable-list-group-item:hover{
  background-color: #0f0f0f1a;
}
.draggable-new {
  box-shadow: none;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>