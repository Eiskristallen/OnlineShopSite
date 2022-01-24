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


//retrive search list
export const reqGoodsListInfo = (searchParams)=>{
  return Ajax({
    'url':'list',
    method:'post',
    data:searchParams
  })
}

reqGoodsListInfo({brand:'apple'});