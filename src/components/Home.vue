<template>
  <div class="home">
    <ul class="list-group">
        <li class="list-group-item r-item" v-for="i in 20">

            <div class="r-item-checkbox">
                <input type="checkbox" id="checkbox-1" class="regular-checkbox"/>
                <label for="checkbox-1"></label>
            </div>

            <div class="r-item-body">
                <div class="content-wrap">

                    <div class="list-group-item-heading r-item-body-title">
                        <p>
                            First List Group Item Heading. First List Group Item Heading. First List Group Item Heading.
                            First List Group Item Heading. First List Group Item Heading. First List Group Item Heading. First List Group Item Heading.
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
                            First List Group Item Heading. First List Group Item Heading. First List Group Item Heading.
                            First List Group Item Heading. First List Group Item Heading. First List Group Item Heading.
                            First List Group Item Heading. First List Group Item Heading. First List Group Item Heading.
                            First List Group Item Heading. First List Group Item Heading. First List Group Item Heading.
                            First List Group Item Heading. First List Group Item Heading. First List Group Item Heading.
                            First List Group Item Heading. First List Group Item Heading. First List Group Item Heading.
                            First List Group Item Heading. First List Group Item Heading. First List Group Item Heading.
                            First List Group Item Heading. First List Group Item Heading. First List Group Item Heading.
                            First List Group Item Heading. First List Group Item Heading. First List Group Item Heading.
                            First List Group Item Heading. First List Group Item Heading. First List Group Item Heading.
                            First List Group Item Heading. First List Group Item Heading. First List Group Item Heading.
                            First List Group Item Heading. First List Group Item Heading. First List Group Item Heading.
                            First List Group Item Heading. First List Group Item Heading. First List Group Item Heading.
                        </p>
                    </div>
                </div>
            </div>

        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .r-item {
        display: flex;
        align-items: center;
        justify-content: start;

        p {
            margin: 0;
        }

        &-checkbox {
            width: 3%;
            min-width: 15px;
            padding: 5px 5px 5px 0;
            display: flex;
        }

        &-body {
            width: 97%;
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
                max-height: 96px;
                /*overflow: auto;*/
                overflow: hidden;
                text-align: justify;
                padding-right: 15px;
            }

        }
    }
</style>
