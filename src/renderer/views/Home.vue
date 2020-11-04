<template>
  <div>
    <!-- 所有博文总的统计数据 -->
    <!-- 包括但不限于: 
      总字数、总文章数量、平均长度、
      平均每多少天写一篇博文、一篇博文的平均/最小和最大耗时 -->
    <div class="text-statistics-area">
      <div style="display:flex;">
        <!-- 左栏 -->
        <div style="text-align: left;padding:5px;width:50%;overflow:hidden;">
          <StatisticItem/>
          <StatisticItem/>
          <StatisticItem/>
        </div>

        <!-- 右栏 -->
        <div style="text-align: left;padding:5px;width:50%;">
          <StatisticItem/>
          <StatisticItem/>
          <StatisticItem/>
        </div><!-- 右栏 -->
      </div>
    </div><!-- 所有博文总的统计数据 -->

    <!-- 所有博文的提交格子图 -->
    <div class="heatmap-area">
      <!-- heatmap -->
      <div style="width: 80%;margin-top: 16px;margin:0 auto;">
        <vue-calendar-heatmap 
          :values="[
            { date: '2020-10-1', count: 1 }, 
            { date: '2020-10-2', count: 5 },
            { date: '2020-10-4', count: 3 },
            { date: '2020-10-7', count: 10 },
            { date: '2020-10-8', count: 3 },
            { date: '2020-10-14', count: 5 },
          ]" 
          end-date="2020-11-4"
          :range-color="['#EBEDF0', '#9BE9A8', '#40C463', '#30A14E', '#216E39']"
          max="10"
          tooltip-unit="articles" /><!-- heatmap -->
      </div>

    </div>
    
    <p>近期的博文 增删情况 列表 尽可能详细？</p>

    <p>各个存储库的存储情况，
      包括但不限于： 
        各个图床的容量和对应限额，
        各个存储库的存储的文章数量和总大小
    </p>
    
    <p>todo list 等</p>


  </div>
</template>

<script>
import StatisticItem from '@/components/StatisticItem.vue'
export default {
  name: 'home',
  components: {
    StatisticItem
  }
}
</script>

<style>
.text-statistics-area{
  margin: 25px 10%;
  background-color: #f4f4f2;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37);
  text-align: center;
}
.heatmap-area{
  margin: 25px 25px;
}
</style>