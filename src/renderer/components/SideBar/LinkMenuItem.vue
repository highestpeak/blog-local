<template>
  <div class="pageitem-page-block"
    v-bind:style="{ 
      'background-color': clicked?'#E8E7E4':'initial'
    }">
    <router-link :to="link" class="page-block-link">
      <MenuItem :icons=icons :name=name :clicked=clicked></MenuItem>
    </router-link>
  </div>
</template>

<script>
import MenuItem from '@/components/SideBar/MenuItem.vue'
export default {
  name: 'LinkMenuItem',
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
  },
  computed: {
    clicked: function () {
      return this.$route.path === this.link
    }
  }
}
</script>

<style>
.pageitem-page-block:hover{
  background-color: #E8E7E4 !important;
}
.page-block-link{
  display: block;
  color: inherit !important;
  text-decoration: none !important;
  width: 100%;
}
</style>
