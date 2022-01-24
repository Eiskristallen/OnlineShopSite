import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/mock/mockServer'
import 'swiper/css/swiper.min.css';
Vue.config.productionTip = false
import TypeNav from '@/components/TypeNav'
import SliderLoop from '@/components/SliderLoop'
//register global components
Vue.component('TypeNav',TypeNav)
Vue.component('SliderLoop',SliderLoop)
Vue.config.productionTip = false

new Vue({
  //register router 
  router,
  store,
  //render app component to template
  render: h => h(App),
}).$mount('#app') 