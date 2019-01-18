const state = {
    showLeft: false
};
const getters = {
    leftShow(state){
        return state.showLeft
    }
};
const mutations = {
    caidanshow(state){
        state.showLeft = true
    },
    caidanhide(state){
        state.showLeft = false
    }
};
const actions = {

};
export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}