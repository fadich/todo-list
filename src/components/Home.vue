<template>
  <div class="home">
    <ul class="list-group">
        <li class="list-group-item r-item" v-for="item in list">

            <div class="r-item-checkbox">
                <input type="checkbox" class="checkbox checkbox--blue" />
            </div>

            <div class="r-item-body">
                <div class="content-wrap">

                    <div class="list-group-item-heading r-item-body-title">
                        <p>
                            {{ item.title }}
                        </p>

                        <div class="r-item-body-title-actions">
                            <button class="btn btn-link" data-toggle="tooltip" title="Postpone">
                                <span class="glyphicon glyphicon-time"></span>
                            </button>
                            <button class="btn btn-link" data-toggle="tooltip" title="Edit">
                                <span class="glyphicon glyphicon-edit"></span>
                            </button>
                            <button class="btn btn-link" data-toggle="tooltip" title="Delete">
                                <span class="glyphicon glyphicon-trash"></span>
                            </button>
                        </div>
                    </div>

                    <div class="r-item-body-content">
                        <p>
                            {{ item.content }}
                        </p>
                    </div>
                </div>
            </div>

        </li>
    </ul>
  </div>
</template>

<script>

import settings from '../models/settings'
import todoList from '../models/todo.service'

export default {
  name: 'Home',
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

        let checkboxes = document.querySelectorAll('input[type="checkbox"]')
        let setChecked = null;

        (setChecked = function (i) {
          checkboxes[i].checked = true

          if (i < checkboxes.length - 1) {
            setTimeout(setChecked, 180, i + 2)
          }
        })(0)
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
<style scoped lang="scss">
    .r-item {
        display: flex;
        align-items: center;
        justify-content: start;
        margin: 0;

        input,textarea,button {
            outline: none;
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

<style lang="scss">
    $border-color: #f2f2f2;
    $material-colors: (
            red: #f44336,
            pink: #e91e63,
            purple: #9c27b0,
            deep-purple: #673ab7,
            indigo: #3f51b5,
            blue: #2196f3,
            light-blue: #03a9f4,
            cyan: #00bcd4,
            teal: #009688,
            green: #4caf50,
            light-green: #8bc34a,
            lime: #cddc39,
            yellow: #ffeb3b,
            amber: #ffc107,
            orange: #ff9800,
            deep-orange: #ff5722,
            blue-grey: #607d8b
    );

    /**
     * Code for checkboxes
     */
    .checkbox {
        position: relative;

        /*width: 1rem;*/
        /*height: 1rem;*/
        min-width: 20px;
        min-height: 20px;
        margin-right: .75rem;

        cursor: pointer;
        appearance: none;
        outline: 0;


        &:before {
            content: '';

            position: absolute;
            left: 0;
            top: 0;
            z-index: 1;

            width: 100%;
            height: 100%;

            border: 2px solid $border-color;

            transition: all 0.3s ease-in-out;
        }

        &:checked:before {
            height: 50%;

            transform: rotate(-45deg);

            border-top-style: none;
            border-right-style: none;
        }

        /**
         * Iterate over map and autogenerate helper classes.
        * See "https://codepen.io/fxm90/pen/zGjjrJ" for an example
        */
        @each $name, $value in $material-colors {
            &--#{$name}:checked:before {
                border-color: $value;
            }
        }
    }
</style>
