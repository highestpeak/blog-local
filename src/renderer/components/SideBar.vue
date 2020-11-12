<template>
  <div id="sidebar">
    <div class="sidebar-wrapper">
      <!-- sidebar -->
      <div class="bloglocal-sidebar">

        <!-- 触发区 -->
        <!-- <div class="bloglocal-sidebar-active-area"></div> -->
        <div class="bloglocal-sidebar-active-area-second"></div>
        
        <!-- 侧边栏头 -->
        <!-- 侧边栏功能区 -->
        <ItemGroupArea name="WHO's Notion">
          <!-- area-icon -->
          <div slot="area-icon" class="blog-local-record-icon-notranslate" 
            role="button" aria-disabled="true" tabindex="-1">
            <div class="blog-local-record-icon-final-wrapper">
              <div style="line-height: 1; font-size: 12.21px; height: 12.21px;">W</div>
            </div>
          </div><!-- area-icon -->
          
          <template v-slot:footer>
            <MenuItem v-b-modal.quick-find :icons="['fas', 'search']" name="Quick Find"></MenuItem>
            <MenuItem v-b-modal.settings :icons="['fas', 'cogs']" name="Settings"></MenuItem>
            
            <!-- quick find -->
            <b-modal id="quick-find" size="lg" hide-header hide-footer centered>
              <QuickFind/>
            </b-modal>

            <!-- settings -->
            <b-modal id="settings" size="xl" title="Settings" hide-header :no-close-on-backdrop=false>
              <Settings/>
            </b-modal>
          </template>

        </ItemGroupArea>

        <!-- 菜单项 -->
        <div class="main-menu">
          <PageBlockMenuItem class="main-menu-item" link="/" :icons="['fas', 'home']" name="Home"></PageBlockMenuItem>
          <PageBlockMenuItem class="main-menu-item" link="/workspace" :icons="['fas', 'folder']" name="Workspace"></PageBlockMenuItem>
          <PageBlockMenuItem class="main-menu-item" link="/gist" :icons="['fas', 'code']" name="Gist"></PageBlockMenuItem>
          <PageBlockMenuItem class="main-menu-item" link="/picture" :icons="['fas', 'image']" name="Picture"></PageBlockMenuItem>
          <PageBlockMenuItem class="main-menu-item" link="/category" :icons="['fas', 'book']" name="Category"></PageBlockMenuItem>
          <PageBlockMenuItem class="main-menu-item" link="/tag" :icons="['fas', 'tag']" name="Tag"></PageBlockMenuItem>
        </div>

        <div class="footer-menu" style="margin-top:20px">
          <PageBlockMenuItem class="main-menu-item" link="/todos" :icons="['fas', 'list-ul']" name="Todo List"></PageBlockMenuItem>
          <PageBlockMenuItem class="main-menu-item" link="/calendar" :icons="['fas', 'calendar-alt']" name="Calendar"></PageBlockMenuItem>
        </div>

        <!-- 这个区域不要删！可能之后会用到，因为我现在不确定，所以没有删除这个代码 -->
        <!-- category -->
        <!-- <ItemGroupArea name="Category"> -->
          <!-- area-icon -->
          <!-- <font-awesome-icon 
            slot="area-icon" 
            :icon="['fas', 'book']" 
            size="lg" 
            style="color: #AFAEAC;"/> -->
        <!-- </ItemGroupArea> -->

        <!-- tags -->
        <!-- <ItemGroupArea name="Tag"> -->
          <!-- area-icon -->
          <!-- <font-awesome-icon 
            slot="area-icon" 
            :icon="['fas', 'tag']" 
            size="lg" 
            style="color: #AFAEAC;"/> -->
        <!-- </ItemGroupArea> -->

      </div><!-- sidebar -->
    </div>
  </div>
</template>

<script>
import QuickFind from '@/components/QuickFind.vue'
import Settings from '@/components/Settings.vue'
import MenuItem from '@/components/SideBar/MenuItem.vue'
import ItemGroupArea from '@/components/SideBar/ItemGroupArea.vue'
import PageBlockMenuItem from '@/components/SideBar/PageBlockMenuItem.vue'

export default {
  name: 'SideBar',
  components: {
    ItemGroupArea,
    PageBlockMenuItem,
    MenuItem,
    QuickFind,
    Settings
  },
  data () {
    return {
    }
  }
}
</script>

<style>
#sidebar{
  color: rgba(25, 23, 17, 0.6);
  font-weight: 500;
  height: 100%;
}
.sidebar-wrapper{
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  width: 0px;
  overflow: visible;
  z-index: 9;
  pointer-events: none;
}
.bloglocal-sidebar{
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  pointer-events: auto;
  max-height: 100%;
  width: 228px;
  opacity: 1;
}
.bloglocal-sidebar-active-area{
  display: block; 
  position: absolute; 
  top: 0px; 
  left: 0px; 
  bottom: 0px; 
  right: 0px; 
  border-top-right-radius: 3px; 
  border-bottom-right-radius: 3px; 
  z-index: -1; 
  background: white; 
  box-shadow:
   rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, 
   rgba(15, 15, 15, 0.1) 0px 3px 6px, 
   rgba(15, 15, 15, 0.2) 0px 9px 24px; 
}
.bloglocal-sidebar-active-area-second{
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  z-index: -1;
  display: none;
  transition: box-shadow 300ms ease-in 0s;
}
.blog-local-record-icon-notranslate{
  user-select: none;
  transition: background 20ms ease-in 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  border-radius: 3px;
  flex-shrink: 0;
  margin-top: 1px;
  color: rgb(55, 53, 47);
}
.blog-local-record-icon-final-wrapper{
  border-radius: 3px;
  width: 18px;
  height: 18px;
  background: rgba(55, 53, 47, 0.4);
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-menu{
  flex-grow: 0; 
  flex-shrink: 0;
  box-shadow: rgba(55, 53, 47, 0.09) 0px -1px 0px;
}
.main-menu-item{
  padding-top: 5px;
}
</style>