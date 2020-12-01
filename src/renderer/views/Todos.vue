<template>
  <div>
    <ViewGroup :viewOptions=viewGroup :size="'3x'" @change-view='changeTodoView'/>
    <hr>

    <TagCloudArea :tags=tags @change-tag-select='selectTag'/>
    <hr>

    <TodoBoard :targetTag="'all'"/>
    <hr>

    <TodoList/>
    <hr>

    <p>
      分类视图，可以查看一些 todo 的分类，包括：没有找任何资料的 todo，已有文章的todo，在文章中自动扫描到的一些需要手动更改的todo（例如需要我手动新增该文章的系列） 等等
      <br>
      inbox等
    </p>

  </div>
</template>

<script>
import draggable from 'vuedraggable'
import CustomCheckbox from '@/components/CustomCheckbox.vue'
import ViewGroup from '@/components/ViewGroup.vue'
import TagCloudArea from '@/components/Tags/TagCloudArea.vue'
import TodoBoard from '@/components/Todo/TodoBoard.vue'
import TodoList from '@/components/Todo/TodoList.vue'
export default {
  name: 'Todos',
  components: {
    draggable, CustomCheckbox, ViewGroup, TagCloudArea, TodoBoard, TodoList
  },
  data: function () {
    return {
      viewGroup: [
        {index: 0, state: true, icon: ['fas', 'list']},
        {index: 1, state: false, icon: ['fas', 'clipboard']}
      ],
      tags: [
        {index: 0, name: '待写但未查阅任何资料', state: true},
        {index: 1, name: '等待整理', state: false},
        {index: 2, name: '等待添加新的内容', state: false}
      ],
      todoList: [
        {name: 'item1'},
        {name: 'item2'},
        {name: 'item3'},
        {name: 'item4'},
        {name: 'item5'}
      ],
      doingList: [],
      doneList: [],
      // board group
      group: [],
      dragOptions: {
        animation: 0,
        // 同一个 group 内的可以互相拖拽
        group: 'board',
        disabled: false,
        ghostClass: 'ghost'
      }
    }
  },
  created () {
    // console.timeEnd('click')
    this.group.push(this.todoList, this.doingList, this.doneList)
  },
  methods: {
    changeTodoView: function (viewIndex) {
      // todo
    },
    selectTag: function (tagSelected) {
      // todo
    }
  },
  computed: {
  },
  watch: {
  }
}
</script>

<style>

</style>