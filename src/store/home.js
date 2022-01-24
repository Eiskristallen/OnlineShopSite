//import request function
import { requestCategoryList,reqBannerList,reqFloorList } from "@/api";
//vuex module of home component
const state = {
  //state data
  categoryList:[],
  bannerList:[],
  floorList:[]
};

const mutations = {
  
 RECEIVECATEGORYLIST(state,categoryList){
   state.categoryList = categoryList;
 },
 RECEIVEBANNERLIST(state,bannerList){
  state.bannerList = bannerList;
},
RECEIVEFLOORLIST(state,floorList){
  state.floorList = floorList;
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
  },
  async getBannerList({commit}){
    const result = await reqBannerList();
    //request success
    if(result.code === 200){
      //store data into state
      commit('RECEIVEBANNERLIST',result.data)
    }
  },
  async getFloorList({commit}){
    const result = await reqFloorList();
    //request success
    if(result.code === 200){
      //store data into state
      commit('RECEIVEFLOORLIST',result.data)
    }
  }
};
const getters = {
  categoryList(){
    return state.categoryList
  },
  bannerList(){
   return state.bannerList
  },
  floorList(){
    return state.floorList
  }
}
export default{
  state,
  mutations,
  actions,
  getters
}