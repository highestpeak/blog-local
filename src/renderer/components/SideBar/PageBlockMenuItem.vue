<template>
  <div class="bloglocal-pageitem-page-block">
    <router-link :to="link" class="page-block-link">
      <MenuItem :icons=icons :name=name></MenuItem>
    </router-link>
  </div>
</template>

<script>
import MenuItem from '@/components/SideBar/MenuItem.vue'
export default {
  name: 'PageBlockMenuItem',
  props: {
    icons: Array,
    name: String,
    link: {
      type: String,
      default: '/fuck'
    }
  },
  components: {
    MenuItem
  },
  data () {
    return {
    }
  }
}
</script>

<style>
.page-block-link{
  display: block;
  color: inherit;
  text-decoration: none;
  width: 100%;
}
</style>
