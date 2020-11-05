<template>
  <div>
    <!-- 所有博文总的统计数据 -->
    <!-- 包括但不限于: 
      总字数、总文章数量、平均长度、
      平均每多少天写一篇博文、一篇博文的平均/最小和最大耗时 -->
    <div class="text-statistics-area">
      <div style="display:flex;border-left: 3px solid #37352f;">
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
            { date: '2020-5-2', count: 1 },
            { date: '2020-5-4', count: 3 },
            { date: '2020-5-5', count: 5 },
            { date: '2020-5-7', count: 7 },
            { date: '2020-5-8', count: 9 },
            { date: '2020-5-12', count: 11 },
            { date: '2020-5-22', count: 2 },
            { date: '2020-10-2', count: 5 },
            { date: '2020-10-4', count: 4 },
            { date: '2020-10-7', count: 10 },
            { date: '2020-10-8', count: 6 },
            { date: '2020-10-14', count: 8 },
          ]" 
          end-date="2020-11-4"
          :range-color="['#f4f4f4', '#bbbfca', '#03c4a1', '#c62a88', '#000000']"
          :max= 10
          tooltip-unit="articles" /><!-- heatmap -->
      </div>
    </div>
    
    <!-- 最近活动 -->
    <!-- todo：包括但不限于： 文章、gist、tag和categories、todo list  -->
    <div class="recently-activity">
      <!-- head -->
      <div class="recently-activity-wrapper">
        <div class="recently-activity-content-area">
          Recently Activity
        </div>
      </div><!-- head -->

      <!-- list -->
      <div class="recently-list">
        <!-- item -->
        <div v-for="(key,index) in 15" :key="index" class="recently-list-item">
          <!-- item link -->
          <a href="" class="recently-list-item-link">
            <div class="recently-list-item-content-area">
              <!-- 活动类型 -->
              <div class="recently-li-activity-type">
                <font-awesome-icon :icon="['fas', 'home']" size="lg" style="color: #C62A88" />
              </div><!-- 活动类型 -->

              <!-- 名称 -->
              <div class="recently-li-activity-name">
                <div class="recently-li-activity-name-content">
                  Hello Blog
                </div>
              </div><!-- 名称 -->

              <!-- 类别 -->
              <div class="recently-li-activity-category">
                <div style="max-width: 180px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
                  <span style="line-height: 1.2; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    自我叙述
                  </span>
                </div>
              </div><!-- 类别 -->

              <!-- tag -->
              <div style="display: flex;min-width: 0px;margin-right: -6px;">
                <div v-for="(key,index) in ['test','测试']" :key="index" class="recently-li-activity-tag">
                  <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    {{key}}
                  </div>
                </div>
              </div><!-- tag -->

              <!-- 时间 -->
              <div class="recently-li-activity-time">
                <div style="line-height: 1.2; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 12px; color: rgba(55, 53, 47, 0.6);">
                  Oct 15, 2020 4:00 PM
                </div>
              </div><!-- 时间 -->
            </div>
          </a><!-- item link -->
        </div><!-- item -->
      </div><!-- list -->
    </div><!-- 最近活动 -->
    <!-- reload icon as update -->
    
    <p>各个存储库的存储情况，
      包括但不限于： 
        各个图床的容量和对应限额，
        各个存储库的存储的文章数量和总大小
    </p>

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
  /* box-shadow: 0 1px 4px 0 rgba(0,0,0,0.37); */
  text-align: center;
}
.heatmap-area{
  margin: 25px 25px;
}
.recently-activity{
  margin: 25px 10%;
}
.recently-activity-wrapper{
  font-size: 1.2em;
  padding: 3px 2px;
  color: inherit;
  fill: inherit;
  display: flex;
}
.recently-activity-content-area{
  max-width: 100%;
  width: 100%;
  white-space: nowrap;
  word-break: break-word;
  caret-color: rgb(55, 53, 47);
  background-color: whitesmoke;
  border-left: 3px solid currentcolor;
  padding-left: 0.9em;
  padding-right: 0.9em;
}
.recently-list{
  max-height: 300px;
  overflow-y: hidden;
}
.recently-list:hover{
  overflow: auto;
}
.recently-list-item{
  margin-top: 1px;
  margin-bottom: 1px;
}
.recently-list-item-link{
  display: flex;
  color: inherit;
  text-decoration: none;
  height: 30px;
  overflow: hidden;
  border-radius: 3px;
}
.recently-list-item-link:hover{
  background-color: #EFEFEF;
}
.recently-list-item-content-area{
  user-select: none;
  transition: background 20ms ease-in 0s;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  padding-right: 4px;
}
.recently-li-activity-type{
  user-select: none;
  transition: background 20ms ease-in 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 22px;
  width: 22px;
  border-radius: 3px;
  flex-shrink: 0;
  margin-left: 2px;
  margin-right: 6px;
}
.recently-li-activity-name{
  display: flex;
  margin-right: auto;
  min-width: 240px;
}
.recently-li-activity-name-content{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  border-bottom: 1px solid rgba(55, 53, 47, 0.16);
  line-height: 1.3;
}
.recently-li-activity-category{
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-left: 14px;
  margin-right: 14px;
  min-width: 20px;
  height: 0px;
}
.recently-li-activity-tag{
  display: flex;
  align-items: center;
  flex-shrink: 0;
  min-width: 0px;
  height: 18px;
  border-radius: 3px;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 14px;
  line-height: 120%;
  color: rgb(55, 53, 47);
  background: rgba(140, 46, 0, 0.2);
  margin: 0px 6px 0px 0px;
}
.recently-li-activity-time{
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-left: 14px;
  margin-right: 0px;
  min-width: 20px;
  height: 0px;
}
</style>