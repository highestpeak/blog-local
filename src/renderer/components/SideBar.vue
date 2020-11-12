<template>
  <div class="sidebar">
    <!-- sidebar -->
    <div class="bloglocal-sidebar">

      <!-- 侧边栏头 -->
      <ItemGroupArea>
        <template v-slot:body>
          <MenuItem v-b-modal.quick-find :icons="['fas', 'search']" name="Quick Find"></MenuItem>
          <MenuItem v-b-modal.settings :icons="['fas', 'cogs']" name="Settings"></MenuItem>
          
          <!-- quick find -->
          <b-modal id="quick-find" size="lg" hide-header hide-footer centered>
            <QuickFind/>
          </b-modal>

          <!-- settings -->
          <b-modal id="settings" size="xl" hide-header hide-footer centered>
            <Settings/>
          </b-modal>
        </template>
      </ItemGroupArea>

      <!-- 菜单项 -->
      <ItemGroupArea>
        <template v-slot:body>
          <LinkMenuItem class="main-menu-item" link="/" :icons="['fas', 'home']" name="Home"></LinkMenuItem>
          <LinkMenuItem class="main-menu-item" link="/workspace" :icons="['fas', 'folder']" name="Workspace"></LinkMenuItem>
          <LinkMenuItem class="main-menu-item" link="/gist" :icons="['fas', 'code']" name="Gist"></LinkMenuItem>
          <LinkMenuItem class="main-menu-item" link="/picture" :icons="['fas', 'image']" name="Picture"></LinkMenuItem>
          <LinkMenuItem class="main-menu-item" link="/category" :icons="['fas', 'book']" name="Category"></LinkMenuItem>
          <LinkMenuItem class="main-menu-item" link="/tag" :icons="['fas', 'tag']" name="Tag"></LinkMenuItem>
          <LinkMenuItem class="main-menu-item" link="/todos" :icons="['fas', 'list-ul']" name="Todo List"></LinkMenuItem>
          <LinkMenuItem class="main-menu-item" link="/calendar" :icons="['fas', 'calendar-alt']" name="Calendar"></LinkMenuItem>
        </template>
      </ItemGroupArea>

      <!-- 侧边栏底部 -->
      <div class="footer-menu"></div>
    </div><!-- sidebar -->
  </div>
</template>

<script>
import QuickFind from '@/components/QuickFind.vue'
import Settings from '@/components/Settings.vue'
import MenuItem from '@/components/SideBar/MenuItem.vue'
import ItemGroupArea from '@/components/SideBar/ItemGroupArea.vue'
import LinkMenuItem from '@/components/SideBar/LinkMenuItem.vue'

export default {
  name: 'SideBar',
  components: {
    ItemGroupArea,
    LinkMenuItem,
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
.sidebar{
  color: rgba(25, 23, 17, 0.6);
  font-weight: 500;
  height: 100%;
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
.main-menu-item{
  padding-top: 5px;
}
.footer-menu{
  display: block;
  flex: 0 0 auto;
  margin-top: auto;
}
</style>