const state = {
  showRedBlue: false,
  targetUrl: '',

  defWhCode: '',
  defRdCode: '',
  defDeptCode: '',

  defInWhCode: '',
  defInRdCode: '',
  defInDeptCode: '',

  defOutWhCode: '',
  defOutRdCode: '',
  defOutDeptCode: '',
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
  },

  SET_DEF_IN_WHCODE(state, inWhCode) {
    state.defInWhCode = inWhCode
  },
  SET_DEF_IN_RDCODE(state, inRdCode) {
    state.defInRdCode = inRdCode
  },
  SET_DEF_IN_DEPTCODE(state, inDeptCode) {
    state.defInDeptCode = inDeptCode
  },

  SET_DEF_OUT_WHCODE(state, outWhCode) {
    state.defOutWhCode = outWhCode
  },
  SET_DEF_OUT_RDCODE(state, outRdCode) {
    state.defOutRdCode = outRdCode
  },
  SET_DEF_OUT_DEPTCODE(state, outDeptCode) {
    state.defOutDeptCode = outDeptCode
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
  },
  
  setDefInWhCode({ commit }, arg) {
    commit('SET_DEF_IN_WHCODE', arg)
  },
  setDefInRdCode({ commit }, arg) {
    commit('SET_DEF_IN_RDCODE', arg)
  },
  setDefInDeptCode({ commit }, arg) {
    commit('SET_DEF_IN_DEPTCODE', arg)
  },

  setDefOutWhCode({ commit }, arg) {
    commit('SET_DEF_OUT_WHCODE', arg)
  },
  setDefOutRdCode({ commit }, arg) {
    commit('SET_DEF_OUT_RDCODE', arg)
  },
  setDefOutDeptCode({ commit }, arg) {
    commit('SET_DEF_OUT_DEPTCODE', arg)
  }
}
export default {
  state,
  mutations,
  actions
}
