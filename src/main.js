import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
Vue.config.productionTip = false


import { requestCategoryList } from '@/api'
import TypeNav from '@/components/TypeNav'
//retrive data of categorylist
requestCategoryList()
//register typenav globally
Vue.component('TypeNav',TypeNav)

Vue.config.productionTip = false

new Vue({
  //register router 
  router,
  store,
  //render app component to template
  render: h => h(App),
}).$mount('#app') 