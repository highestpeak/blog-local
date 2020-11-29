<template>
  <b-card no-body>
    <b-button squared block v-b-toggle="'category'+category.id" variant="outline-secondary">
      {{category.name}}
    </b-button>
    <b-collapse :id="'category'+category.id" :visible=false accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <b-card-text>
          <!-- todo: 所有属于该分类的 item -->
          {{ category }}
        </b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  name: 'CategoryListItem',
  props: ['category']
}
</script>


<style>

</style>