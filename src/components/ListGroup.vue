<template>
    <ul class="list-group">
        <list-item v-bind:item="item" v-for="item in list"></list-item>
    </ul>
</template>

<script>
  import listItem from './ListItems.vue'

  export default {
    name: 'ListGroup',
    components: {
      listItem
    },
    props: ['list'],
    data () {
      return {}
    },
    methods: {}
  }
</script>
