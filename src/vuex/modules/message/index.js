/**
 * Created by Sugar on 2018/3/29.
 */
import contact from '../contact/index'
import {transTime} from "@/util/index";

let c_friends = contact.state.friends;

const state = {};

const mutations = {
  setMsgTop(state, id) {
    let findex = c_friends.findIndex(item => item.id === id)
    c_friends[findex].messages.isTop = true
  },
  cancelMsgTop(state, id) {
    let findex = c_friends.findIndex(item => item.id === id)
    c_friends[findex].messages.isTop = false
  },
  deleteMsg(state, id) {
    c_friends.splice(c_friends.findIndex(item => item.id === id), 1)
  }
};

const getters = {

};


const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
