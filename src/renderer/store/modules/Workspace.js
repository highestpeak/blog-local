const state = {
  tableRowSelected: [],
  dataSourceName: '',
  isMutiSelect: null
}

const mutations = {
  clearSelected (state) {
    state.tableRowSelected = []
  },
  updateSelectedRows (state, selectedItems) {
    state.tableRowSelected = selectedItems
  },
  updateDataSourceName (state, name) {
    state.dataSourceName = name
  },
  updateMutiSelect (state, isMuti) {
    state.isMutiSelect = isMuti
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
