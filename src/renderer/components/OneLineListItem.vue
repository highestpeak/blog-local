<template>
  <!-- item -->
  <div class="list-item">
    <!-- item link -->
    <router-link to="#" class="list-item-link">
      <div class="list-item-content-area">
        <!-- 活动类型 -->
        <div class="li-activity-type">
          <font-awesome-icon :icon="['fas', 'home']" size="lg" style="color: #C62A88" />
        </div><!-- 活动类型 -->

        <!-- 名称 -->
        <div class="li-activity-name">
          <div class="li-activity-name-content">
            Hello Blog
          </div>
        </div><!-- 名称 -->

        <!-- 类别 -->
        <div class="li-activity-category">
          <div style="max-width: 180px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
            <span style="line-height: 1.2; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
              自我叙述
            </span>
          </div>
        </div><!-- 类别 -->

        <!-- tag -->
        <div style="display: flex;min-width: 0px;margin-right: -6px;">
          <div v-for="(key,index) in ['test','测试']" :key="index" class="li-activity-tag">
            <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
              {{key}}
            </div>
          </div>
        </div><!-- tag -->

        <!-- 时间 -->
        <div class="li-activity-time">
          <div style="line-height: 1.2; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 12px; color: rgba(55, 53, 47, 0.6);">
            Oct 15, 2020 4:00 PM
          </div>
        </div><!-- 时间 -->
      </div>
    </router-link><!-- item link -->
  </div><!-- item -->
</template>

<script>
export default {
  name: 'OneLineListItem'
}
</script>

<style>
.list-item{
  margin-top: 1px;
  margin-bottom: 1px;
}
.list-item-link{
  display: flex;
  color: inherit;
  text-decoration: none;
  height: 30px;
  overflow: hidden;
  border-radius: 3px;
}
.list-item-link:hover{
  background-color: #EFEFEF;
}
.list-item-content-area{
  user-select: none;
  transition: background 20ms ease-in 0s;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  padding-right: 4px;
}
.li-activity-type{
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
.li-activity-name{
  display: flex;
  margin-right: auto;
  min-width: 240px;
}
.li-activity-name-content{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  border-bottom: 1px solid rgba(55, 53, 47, 0.16);
  line-height: 1.3;
}
.li-activity-category{
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-left: 14px;
  margin-right: 14px;
  min-width: 20px;
  height: 0px;
}
.li-activity-tag{
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
.li-activity-time{
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-left: 14px;
  margin-right: 0px;
  min-width: 20px;
  height: 0px;
}
</style>
