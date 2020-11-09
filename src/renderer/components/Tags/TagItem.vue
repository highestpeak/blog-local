<template>
  <a :href="link" class="tag-code" :style="{'background-color':color,'color':'#fff'}">
    <span>
      {{name}}
    </span>
  </a>
</template>

<script>
export default {
  name: 'TagItem',
  props: ['link', 'name', 'color']
}
</script>

<style>

</style>