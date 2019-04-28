import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import state from './modules/state'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    state
  },
  getters
})

export default store
