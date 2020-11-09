<template>
  <div class="tag-cloud">
    <TagItem v-for="(tag,index) in tags" :key="index" 
      :link=tag.link
      :name=tag.name
      :color=nextColor(index)>
    </TagItem>
  </div>
</template>

<script>
import TagItem from '@/components/Tags/TagItem.vue'
import {tagCloudColorList} from '@/GlobalData.js'
export default {
  name: 'TagCloud',
  props: {
    tags: {
      type: Array
    }
  },
  components: {
    TagItem
  },
  methods: {
    nextColor: function (index) {
      return tagCloudColorList[index % tagCloudColorList.length]
    }
  }
}
</script>

<style>
.tag-cloud *{
  text-align: initial;
}
.tag-cloud{
  text-align: center;
}
.tag-cloud a {
  border: none;
  margin: 0 4px;
  background: #63a35c;
  display: inline-block;
  border-radius: 4px;
  padding: 0 5px;
  color: #fff !important;
  transition: background 0.5s;
}
.tag-cloud a:hover{
  background: #0085a1 !important;
  border-bottom: none !important;
  padding-bottom: 0px !important;
  text-decoration: none;
}
</style>