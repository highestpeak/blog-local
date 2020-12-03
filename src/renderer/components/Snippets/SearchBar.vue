<template>
  <!-- snippet search bar -->
  <b-input-group size="sm">
    <b-input-group-prepend is-text>
      <font-awesome-icon :icon="['fas','search']" style="color: #afaeac" />
    </b-input-group-prepend>

    <b-form-input id="popover-target-1" @input="searchContent" placeholder="Enter your search content" style="height: auto;"></b-form-input>

    <b-input-group-append>
      <b-button variant="info" @click="$emit('search-snippet-content', searchContent)">GO</b-button>
    </b-input-group-append>

    <b-input-group-append>
      <b-button variant="info" @click="$emit('add-snippet')">
        <font-awesome-icon :icon="['fas','plus']"/>
      </b-button>
    </b-input-group-append>

    <b-popover target="popover-target-1" triggers="focus" placement="bottom">
      <div v-html="searchPointHtml"></div>
    </b-popover>
  </b-input-group><!-- snippet search bar -->
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      // todo
      searchContent: '',
      searchPointHtml: 'searchPointHtml'
    }
  }
}
</script>

<style>

</style>