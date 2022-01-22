// config vue router
//import vue and vue router
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routers'
//declear and use vue router
Vue.use(VueRouter)


//fix 
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function(location,onResolved,onRejected){
 if(onResolved === undefined && onRejected === undefined){
     return originPush.call(this,location).catch(()=>{})
 }else{
   return originPush.call(this,location,onResolved,onRejected)
 }
}


VueRouter.prototype.replace = function(location,onResolved,onRejected){
  if(onResolved === undefined && onRejected === undefined){
      return originReplace.call(this,location).catch(()=>{})
  }else{
    return originReplace.call(this,location,onResolved,onRejected)
  }
 }


//export a vuerouter object
export default new VueRouter({
routes
})