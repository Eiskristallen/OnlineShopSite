//modulize router configuration
//import route components
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
export default [
   //config route for each route page
   {
    path:'/home',
    component:Home
  },
  {
    //receive params keyword
    path:'/search/:keyword?',
    component:Search,
    name:'search',
    //take params and set it to a property of current component
    props:true
  },
  {
    path:'/login',
    component:Login,
    meta: { 
      isHide:true //use to hide footer
     }
  },
  {
    path:'/register',
    component:Register,
     
    meta: { 
      isHide:true //use to hide footer
     }
  },
  //redirect router
  {
    path:'/',
    redirect:'/home'
  }
]