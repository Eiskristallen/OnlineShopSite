import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
Vue.config.productionTip = false

import TypeNav from '@/components/TypeNav'
//register typenav globally
Vue.component('TypeNav',TypeNav)

Vue.config.productionTip = false

new Vue({
  //register router 
  router,
  //render app component to template
  render: h => h(App),
}).$mount('#app') 