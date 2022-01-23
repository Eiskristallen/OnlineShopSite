//import request function
import { requestCategoryList } from "@/api";
//vuex module of home component
const state = {
  //categorylist data
  categoryList:[]
};

const mutations = {
  
 RECEIVECATEGORYLIST(state,categoryList){
   state.categoryList = categoryList;
 }

};
const actions = {
 async getCategoryList({commit}){
    const result = await requestCategoryList();
    //request success
    if(result.code === 200){
      //store data into state
      commit('RECEIVECATEGORYLIST',result.data)
    }
  }
};
const getters = {
  categoryList(){
    return state.categoryList
  }
}
export default{
  state,
  mutations,
  actions,
  getters
}