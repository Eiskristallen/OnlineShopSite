<template>
  <!-- category navigation bar -->
  <div class="type-nav">
    <div class="container">
      <h2 class="all" @mouseenter="moveInShow">all item</h2>
      <nav class="nav">
        <a href="###">item</a>
        <a href="###">item</a>
        <a href="###">item</a>
        <a href="###">item</a>
        <a href="###">item</a>
        <a href="###">item</a>
        <a href="###">item</a>
        <a href="###">item</a>
      </nav>
      <transition name="show">
        <div class="sort" v-show="isShow" @mouseleave="moveOutShow">
          <div class="all-sort-list2" @click="toSearch">
            <div class="item" v-for="c1 in categoryList" :key="c1.categoryId">
              <h3>
                <!-- define custom property to store search criterias -->
                <a
                  href="javascript:;"
                  :data-categoryName="c1.categoryName"
                  :data-category1Id="c1.categoryId"
                  >{{ c1.categoryName }}
                </a>
              </h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl
                    class="fore"
                    v-for="c2 in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dt>
                      <a
                        href="javascript:;"
                        :data-categoryName="c2.categoryName"
                        :data-category2Id="c2.categoryId"
                        >{{ c2.categoryName }}
                      </a>
                    </dt>

                    <dd>
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a
                          href="javascript:;"
                          :data-categoryName="c3.categoryName"
                          :data-category3Id="c3.categoryId"
                          >{{ c3.categoryName }}
                        </a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'TypeNav',
  data() {
    return {
      //show list or not
      isShow: true,
    };
  },
  mounted() {
    //if route is not home then hide the list
    if (this.$route.path !== '/home') {
      this.isShow = false;
    }
  },
  methods: {
    moveInShow() {
      this.isShow = true;
    },
    moveOutShow() {
      if (this.$route.path !== '/home') {
        this.isShow = false;
      }
    },
    toSearch(event) {
      //jump to correspondend item search page
      //get the data that setup on element
      let data = event.target.dataset;
      //get categoryName and category id
      let { categoryname, category1id, category2id, category3id } = data;
      if (categoryname) {
        //if categoryname exist means a tag has been clicked
        let location = {
          name: 'search',
        };
        //collecting querries
        let query = {
          categoryName: categoryname,
        };
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else if (category3id) {
          query.category3Id = category3id;
        }
        location.query = query;
        //check is params exsit
        if (this.$route.params) {
          location.params = this.$route.params;
        }
        //jump to the search page
        this.$router.push(location);
      }
    },
  },
  //computed property
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      &.show-enter {
        opacity: 0;
        height: 0;
      }
      &.show-enter-to {
        opacity: 1;
        height: 461px;
      }
      &.show-enter-active {
        transition: all 0.5s;
      }
      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            background-color: skyblue;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
