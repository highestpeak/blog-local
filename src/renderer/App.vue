<template>
  <div id="app">
    <!-- 侧边栏 -->
    <div class="bloglocal-sidebar-container">
      <SideBar></SideBar>
    </div>

    <!-- 内容区 -->
    <div class="bloglocal-frame">
      <router-view></router-view>
    </div>

    <!-- 右下角浮动按钮 -->
    <div 
      class="bloglocal-bottom-right-float-button" 
      role="button" 
      tabindex="0">
      ?
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
export default {
  name: 'blog-local',
  components: {
    SideBar
  }
}
</script>

<style>
/* CSS */
* {
    box-sizing: border-box;
}
*, *:focus {
    outline: 0;
}
#app{
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex: 1 1 0%;
  overflow: hidden;
  background: white;
  cursor: text;
  color: rgb(55, 53, 47);
  fill: currentcolor;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-font-smoothing: auto;
}
.bloglocal-sidebar-container{
  flex-grow: 0;
  flex-shrink: 0;
  pointer-events: none;
  position: relative;
  z-index: 99;
  background: rgb(247, 246, 243);
  transition: box-shadow 300ms ease-in 0s;
  width: 237px;
  height: 100vh;
}
.bloglocal-frame{
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  background: white;
  z-index: 1;
  height: 100vh;
  max-height: 100%;
  width: 527px;
  overflow-y: scroll;
}
.bloglocal-bottom-right-float-button{
  user-select: none;
  transition: opacity 700ms ease 0s, color 700ms ease 0s;
  cursor: pointer;
  opacity: 1;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  bottom: 33px;
  right: 33px;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  font-size: 20px;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
  z-index: 101;
}
</style>

<style>
.bloglocal-sidebar-container, .bloglocal-topbar {
  cursor: default;
}
</style>