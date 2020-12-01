<template>
  <div>
    <vue-cal
    class="vuecal--date-picker"
    xsmall
    hide-view-selector
    :time="false"
    :transitions="false"
    active-view="month"
    :disable-views="['week']"
    style="width: 210px;height: 230px">
</vue-cal>
  </div>
</template>

<script>
export default {
  name: 'Calendar'
}
</script>

<style>

</style>
