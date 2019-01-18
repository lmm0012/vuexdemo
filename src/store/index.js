import Vue from 'vue';
import Vuex from 'vuex';
import denglu from './modules/denglu';
import dibuzhuangtai from './modules/dibuzhuangtai';
import gouwuche from './modules/gouwuche';
Vue.use(Vuex);

export default new Vuex.Store({
   modules:{
      denglu,
      dibuzhuangtai,
      gouwuche
   }
})
// var state={   //要设置的全局访问的state对象
//     name:'liu',
//     number:0
//     //要设置的初始属性值
//   };
// var getters = {  
//    isName(state) {  
//       return state.name
//    },
//    isNumber(state) {  
//       return state.number
//    },
// };
// var mutations = {
//    changeName1(state,) {
//       state.name = 'wu';
//    },
//    changeName2(state){
//       state.name = 'zhang';
//    },
//    changeName3(state,val){
//       state.name = val;
//    },
//    changeNumber1(state,aaaa){
//       state.number += aaaa;
//    }
// };
// var actions = {
//    change1(context){
//       context.commit('changeName1')
//    },
//    change2(context,sum){
//       context.commit('changeNumber1',sum)
//    }
// };
// var store = new Vuex.Store({
//       state,
//       getters,
//       mutations,
//       actions
// });
// export default store;

 
