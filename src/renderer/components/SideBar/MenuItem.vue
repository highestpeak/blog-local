<template>
  <div role="button" tabindex="0" class="menu-item">
    <div class="menu-item-wrapper">
      <div class="menu-item-icon">
        <!-- <font-awesome-icon :icon="['fas', 'angle-double-left']" size="1x" style="color: #AFAEAC;"/> -->
        <font-awesome-icon :icon="icons" size="1x" style="color: #37352fcc;"/>
      </div>
      <div class="menu-item-name"  
        v-bind:style="{ 
          'font-weight': clicked?'600':'initial'
        }">
        {{name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    icons: {
      type: Array,
      default: ['fas', 'angle-double-left']
    },
    name: {
      type: String,
      default: 'icon here'
    },
    clicked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.menu-item{
  user-select: none;
  transition: background 20ms ease-in 0s;
  cursor: pointer;
}
.menu-item:hover{
  background-color: #E8E7E4 !important;
}
.menu-item-wrapper{
    display: flex;
    align-items: center;
    min-height: 27px;
    font-size: 14px;
    padding: 2px 14px;
    width: 100%;
}
.menu-item-icon{
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
.menu-item-name{
    flex: 1 1 auto;
    white-space: nowrap;
    min-width: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #37352f;
}
</style>