<template>
  <b-container fluid style="height:100vh">
    <b-row style="height:100vh">
      <!-- 列表 -->
      <b-col cols="8" style="height:100vh;overflow-y:scroll">
        <CategoryListItem 
          v-for="(category,index) in categories" :key="index" 
          :category=category 
          style="margin-bottom:10px;"/>
      </b-col>

      <!-- 详情 -->
      <b-col cols="4" style="border-left:1px solid #E8E7E4;height:100vh;overflow-y:scroll">
        <!-- <p>
          可以增加和删除系列，并自动同步到对应的站点
        </p>
        <p>
          可以在系列中增加文章或删除文章,对应的可以给文章增删属于哪个系列（虽然这在工作区也可以设置）
        </p>
        <p>
          系列中的文章的顺序应当是可以定制的
          顺序定制采用拖动来定制
        </p>
        <p>
          可以查看文章在哪个系列中
        </p>
        <p>
          查看分类的历史（即分类所含文章的增删记录、分类本身数据的修改记录）
        </p>
        <p>
          查看分类所含标签
        </p> -->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CategoryListItem from '@/components/Category/CategoryListItem.vue'
import { mockCategories } from '@/dataBroker/Category.js'
export default {
  name: 'Category',
  components: {
    CategoryListItem
  },
  data() {
    return {
      categories: mockCategories,
      currCategory: null
    }
  }
}
</script>

<style>

</style>