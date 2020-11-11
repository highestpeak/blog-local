<template>
  <div class="sidebar-item-group-area">
    
    <!-- 头部 -->
    <div style="display: block; flex-shrink: 0; flex-grow: 0;">
      <div class="blog-local-sidebar-switcher" role="button" tabindex="0">

        <!-- left text area -->
        <div class="blog-local-sidebar-header-container">
          <!-- 图标 -->
          <div slot="area-icon" class="bloglocal-group-area-header">
            <slot name="area-icon"></slot>
          </div>

          <!-- Area 名称 -->
          <div class="blog-local-sidebar-header-nickname">
            <div class="notranslate">
              <div class="blog-local-sidebar-header-nickname-final-wrapper">
                <div class="blog-local-sidebar-header-nickname-final-content">
                  {{name}}
                </div>
              </div>
            </div>
          </div><!-- Area 名称 -->

        </div><!-- left text area -->

        <!-- angle double -->
        <!-- <div class="notion-fadein" style=" display:
        f1ex; align-items: center; height: 100%;
        margin-left: auto; margin-right: 12px;display: flex;" >
          <font-awesome-icon :icon="['fas', 'angle-double-left']" size="1x" style="color: #AFAEAC;"/>
        </div> -->

      </div>
    </div><!-- 头部 -->

    <slot name="footer"></slot>
    <!-- Items -->
    <!-- 表头项 -->
    <!-- <div v-if="pageBlockItem===false">
      <MenuItem :icons="['fas', 'search']" name="Quick Find"></MenuItem>
      <MenuItem :icons="['fas', 'cogs']" name="Settings"></MenuItem>
    </div> -->
    <!-- 表头项 -->

    <!-- 页面项 -->
    <!-- 这个区域不要删！可能之后会用到，因为我现在不确定，所以没有删除这个代码 -->
    <!-- <div v-else> -->
      <!-- <PageBlockMenuItem></PageBlockMenuItem> -->

      <!-- add new -->
      <!-- <PageBlockMenuItem :icons="['fas', 'plus']" name="Add a Tag" ></PageBlockMenuItem> -->
      <!-- trash -->
      <!-- <PageBlockMenuItem :icons="['fas', 'trash']" name="Tag Trash" ></PageBlockMenuItem> -->
    <!-- </div> -->
    <!-- 页面项 -->

  </div>
</template>

<script>
// import MenuItem from '@/components/SideBar/MenuItem.vue'
import PageBlockMenuItem from '@/components/SideBar/PageBlockMenuItem.vue'

export default {
  name: 'ItemGroupArea',
  props: {
    icons: {
      type: Array,
      default: function () {
        return ['fas', 'angle-double-left']
      }
    },
    name: {
      type: String,
      default: "Who's Area"
    }
  },
  components: {
    // MenuItem,
    PageBlockMenuItem
  }
}
</script>

<style>
.bloglocal-group-area-header{
  flex-shrink: 0;
  flex-grow: 0;
  border-radius: 3px;
  color: rgba(55, 53, 47, 0.6);
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
}
.sidebar-item-group-area{
  padding-top: 5px;
  padding-bottom: 10px;
  overflow: hidden auto;
  margin-right: 0px;
  margin-bottom: 0px;
}
.blog-local-sidebar-switcher{
  user-select: none;
  transition: background 20ms ease-in 0s;
  cursor: pointer;
  display: flex;
  align-items: center;
  min-width: 0px;
  height: 45px;
  width: 100%;
  margin-bottom: 0px;
}
.blog-local-sidebar-header-container{
  display: flex;
  align-items: center;
  min-height: 27px;
  font-size: 14px;
  padding: 2px 14px;
  width: 100%;
  overflow: hidden;
}

.blog-local-sidebar-header-nickname{
  flex: 1 1 auto;
  white-space: nowrap;
  min-width: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.notranslate{
  display: flex;
  align-items: center;
  justify-content: start;
}
.blog-local-sidebar-header-nickname-final-wrapper{
  display: flex;
  flex-direction: column;
  margin-right: 6px;
  margin-top: 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.blog-local-sidebar-header-nickname-final-content{
  color: rgb(55, 53, 47);
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>