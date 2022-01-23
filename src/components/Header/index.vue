<template>
  <header class="header">
    <!-- first line of Header -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>Welcome to shopping mall！</p>
          <p>
            <span>Please</span>
            <router-link to="/login">Login</router-link>
            <router-link to="/register">Sign Up</router-link>
          </p>
        </div>
        <div class="typeList">
          <a href="###">My Order</a>
          <a href="###">Shop Cart</a>
          <a href="###">My Shop</a>
          <a href="###">Premium</a>
          <a href="###">Bulk Purchase</a>
          <a href="###">Follow us</a>
          <a href="###">Collaboration</a>
          <a href="###">Vendor</a>
        </div>
      </div>
    </div>
    <!--second line of header search bar-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link to="/home" class="logo" title="ShoppingMall">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="toSearch"
          >
            search
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
// export header component
export default {
  name: 'Header',
  data() {
    return {
      keyword: '',
    };
  },
  methods: {
    //config route parameter
    toSearch() {
      let location = {
        //if use params in router object, have to give a name to the router
        name: 'search',
        // path: '/search',
        //pass search keyword
        params: {
          //if params is empty then pass undefined into router object
          keyword: this.keyword || undefined,
        },
      };
      //check is query exsit when click search
      if (this.$route.query) {
        location.query = this.$route.query;
      }
      this.$router.push(location).catch(() => {});
    },
  },
};
</script>
<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
