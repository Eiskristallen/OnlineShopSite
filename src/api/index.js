//configure api function
import Ajax from '@/ajax/Ajax' //import the custom ajax instance
import mockAjax from '@/ajax/mockAjax'
export const requestCategoryList = () =>{
  return Ajax({
    url:'product/getBaseCategoryList',
    method:'get'
  })
}
//mock interfaces banner
export const reqBannerList = () =>{
  return mockAjax({
    url:'/banner',
    method:'get'
  })
}
//mock interfaces banner
export const reqFloorList = () =>{
  return mockAjax({
    url:'/floor',
    method:'get'
  })
}