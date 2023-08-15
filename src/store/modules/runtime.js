const state = {
  showRedBlue: false,
  targetUrl: '',
  defWhCode: '',
  defRdCode: '',
  defDeptCode: ''
}
const mutations = {
  SET_SHOW_RED_BLUE(state, showRedBlue) {
    state.showRedBlue = showRedBlue
  },
  SET_TARGET_URL(state, path) {
    state.targetUrl = path
  },
  SET_DEF_WHCODE(state, whCode) {
    state.defWhCode = whCode
  },
  SET_DEF_RDCODE(state, rdCode) {
    state.defRdCode = rdCode
  },
  SET_DEF_DEPTCODE(state, deptCode) {
    state.defDeptCode = deptCode
  }
}
const actions = {
  setShowRedBlue({ commit }, arg) {
    commit('SET_SHOW_RED_BLUE', arg)
  },
  setTargetUrl({ commit }, arg) {
    commit('SET_TARGET_URL', arg)
  },
  setDefWhCode({ commit }, arg) {
    commit('SET_DEF_WHCODE', arg)
  },
  setDefRdCode({ commit }, arg) {
    commit('SET_DEF_RDCODE', arg)
  },
  setDefDeptCode({ commit }, arg) {
    commit('SET_DEF_DEPTCODE', arg)
  }
}
export default {
  state,
  mutations,
  actions
}
