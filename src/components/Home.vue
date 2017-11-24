<template>
    <div class="home">
        <list-form></list-form>
        <list-group v-bind:list="list"></list-group>
    </div>
</template>

<script>

import settings from '../models/settings'
import todoList from '../models/todo.service'
import listGroup from './ListGroup.vue'
import listForm from './ListForm.vue'

export default {
  name: 'Home',
  components: {
    listGroup,
    listForm
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
  },
  mounted () {
    let th = this

    todoList.getItems()
      .then(res => {
        th.list = res.data.list
      })
      .catch(err => {
        if (err.message === 'Request failed with status code 403') {
          window.location.replace(settings.authUrl)
        }
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .r-item {
        display: flex;
        align-items: center;
        justify-content: start;
        margin: 0;

        input,textarea,button {
            outline: none !important;
        }

        p {
            margin: 0;
        }

        &-checkbox {
            width: 4%;
            min-width: 20px;
            padding: 5px 5px 5px 0;
            display: flex;
        }

        &-body {
            width: 96%;
            display: flex;
            padding-left: 10px;

            @media (min-width: 980px) {
                padding-left: 0;
            }

            .content-wrap {
                width: 100%;
                display: flex;
                flex-direction: column;
            }

            &-title {
                display: flex;
                justify-content: space-between;

                p {
                    font-weight: bold;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }

                &-actions {
                    width: 100%;
                    max-width: 110px;
                    min-width: 86px;
                    display: flex;
                    justify-content: space-around;

                    button {
                        padding: 0 5px;
                    }
                }
            }

            &-content {
                display: flex;
                max-height: 42px;
                /*overflow: auto;*/
                overflow: hidden;
                text-align: justify;
                padding-right: 15px;
            }

        }
    }
</style>
