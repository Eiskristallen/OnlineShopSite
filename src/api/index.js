//configure api function
import Ajax from '@/ajax/Ajax' //import the custom ajax instance

export const requestCategoryList = () =>{
  return Ajax({
    url:'product/getBaseCategoryList',
    method:'get'
  })
}
