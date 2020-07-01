import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchText : String
  },
  mutations: {
    updateMessage(state,message){
      state.searchText = message
      //Thuc hien viec axios
    }
  },
  actions: {
  },
  modules: {
  }
})
