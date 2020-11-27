<template>
  <b-container class="fileter-by-tags" fluid>
    <div style="margin: 0 0 10px;">
        <h4 style="text-align:center;"> Filter by tags </h4>
        <ul class="tag-cloud-area">
          <li v-for="(tag,index) in tags" :key="index" style="margin: 5px;">
            <b-button squared variant="outline-secondary"
              @click="changeTagSelect(tag)"
              :pressed.sync='tag.state'>
              {{tag.name}}
            </b-button>
          </li>
        </ul>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'TagCloudArea',
  props: {
    tags: {
      type: Array,
      default: function () {
        return [
          {index: 0, name: 'WaitToModify', state: true},
          {index: 1, name: 'WaitWithNoData', state: false}
        ]
      }
    }
  },
  data() {
    return {
      currSelectTag: this.tags[0]
    }
  },
  methods: {
    changeTagSelect: function (tag) {
      this.currSelectTag.state = false
      this.currSelectTag = tag
      this.$emit('change-tag-select', tag)
    }
  }
}
</script>

<style>
.tag-cloud-area {
  list-style:none;
  display: flex;
  flex-wrap: wrap;flex-direction: row;
  width: 100%;
  margin: 0;
  padding: 10px;
  background-color: #f8f7f6;
}
</style>