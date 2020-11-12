<template>
  <div class="sidebar-item-group-area">
    <!-- 头部 -->
    <div class="sidebar-header" tabindex="0">
      <div class="sidebar-header-container">
        {{name}}
      </div>
    </div><!-- 头部 -->
    
    <!-- area body 多为 Menuitem 和 LinkedMenuItem -->
    <slot name="body"></slot>

  </div>
</template>

<script>

export default {
  name: 'ItemGroupArea',
  props: {
    name: {
      type: String,
      default: "Who's Area"
    }
  },
  components: {
  }
}
</script>

<style>
.sidebar-item-group-area{
  padding-top: 5px;
  padding-bottom: 10px;
  overflow: hidden auto;
  margin-right: 0px;
  margin-bottom: 0px;
}
.sidebar-header{
  user-select: none;
  transition: background 20ms ease-in 0s;
  display: flex;
  align-items: center;
  min-width: 0px;
  width: 100%;
  margin-bottom: 0px;
}
.sidebar-header-container{
  letter-spacing: 0.03em;
  text-transform: uppercase;
  font-size: 11px;
  line-height: 1;
  margin-bottom: 1px;
  color: rgba(55, 53, 47, 0.6);
  font-weight: 500;
  padding: 5px 15px;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>