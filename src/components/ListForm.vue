<template>
    <div class="list-form">
        <form @submit="submit">
            <div class="form-group">
                <input type="text" placeholder="Title" v-model="title" class="form-control">
            </div>
            <div class="form-group">
                <textarea class="form-control" placeholder="Content" v-model="content"></textarea>
            </div>

            <!--<div class="form-group">-->
                <button class="btn btn-default btn-wide">
                    <span class="glyphicon glyphicon-plus"></span>
                </button>
            <!--</div>-->
        </form>
    </div>
</template>

<script>
  export default {
    name: 'ListGroup',
    props: {
      id: {
        type: [String, Number],
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      }
    },
    data () {
      return {}
    },
    methods: {
      submit (e) {
        if (e) {
          e.preventDefault()
        }

        console.log(this.id, this.title, this.content)
      }
    }
  }
</script>

<style lang="scss" scoped>
    .btn-wide {
        width: 100%;
    }
</style>
