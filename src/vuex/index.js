/**
 * Created by Sugar on 2018/3/29.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import message from './modules/message/index'
import contact from './modules/contact/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  // strict: process.env.NODE_ENV !== 'production',
  modules: {
    message: message,
    contact: contact
  }
})

export default store
