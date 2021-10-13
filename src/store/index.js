import { createStore } from 'vuex'
import ls from '../utility/ls'

const key = 'IMG_MANAGER'

const store = createStore({
  state: {
    list: []
  },
  mutations: {
    addItem: (state, item) => {
      state.list.push(item)
      ls.save(key, state.list)
    },
    addItems: (state, list) => {
      state.list = list
      ls.save(key, state.list)
    }
  },
  actions: {
    init ({commit}) {
      commit('addItems', ls.load(key))
    }
  }
})

export default store