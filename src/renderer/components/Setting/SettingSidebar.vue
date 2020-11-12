<template>
  <div class="sidebar">
    <!-- sidebar -->
    <div class="bloglocal-sidebar">
      <!-- 菜单项 -->
      <ItemGroupArea name='Markdown and gist'>
        <template v-slot:body>
          <MenuItem class="main-menu-item" :icons="['fas', 'folder']" @click.native="changeSettingContent('Markdown render')" name="Markdown render"></MenuItem>
          <MenuItem class="main-menu-item" :icons="['fas', 'folder']" @click.native="changeSettingContent('Code render')" name="Code render"></MenuItem>
          <MenuItem class="main-menu-item" :icons="['fas', 'folder']" @click.native="changeSettingContent('Standard Check')" name="Standard Check"></MenuItem>
        </template>
      </ItemGroupArea>

      <ItemGroupArea name='General'>
        <template v-slot:body>
          <MenuItem class="main-menu-item" :icons="['fas', 'home']" name="Keyboard shortcuts"></MenuItem>
          <MenuItem class="main-menu-item" :icons="['fas', 'code']" name="Storage"></MenuItem>
          <MenuItem class="main-menu-item" :icons="['fas', 'image']" name="Language"></MenuItem>
        </template>
      </ItemGroupArea>
    </div>
  </div>
</template>

<script>
import ItemGroupArea from '@/components/SideBar/ItemGroupArea.vue'
import MenuItem from '@/components/SideBar/MenuItem.vue'
export default {
  name: 'SettingSidebar',
  components: {
    ItemGroupArea,
    MenuItem
  },
  methods: {
    changeSettingContent: function (name) {
      console.log(name)
      this.$emit('changeCurrSettingName', name)
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
</style>