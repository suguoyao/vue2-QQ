/**
 * Created by Sugar on 2018/3/29.
 */
import {transTime} from "../../../util/index";

const state = {
  msgList: [
    {
      id: 1,
      fid: 1,
      name: 'Leo',
      unread: 0,
      isTop: false,
      lastContact: '2018-03-28 12:35'
    },
    {
      id: 2,
      fid: 2,
      name: 'Sugars',
      unread: 3,
      isTop: false,
      lastContact: '2018-03-28 14:05'
    },
    {
      id: 3,
      fid: 3,
      name: 'Jack',
      unread: 0,
      isTop: false,
      lastContact: '2018-03-28 10:19'
    },
    {
      id: 4,
      fid: 4,
      name: 'Tom',
      unread: 8,
      isTop: false,
      lastContact: '2018-03-28 21:18'
    },
    {
      id: 5,
      fid: 5,
      name: 'Peter',
      unread: 0,
      isTop: false,
      lastContact: '2018-03-28 07:35'
    },
  ]
};

const mutations = {
  setMsgTop(state, id) {
    let target = state.msgList.splice(state.msgList.findIndex(item => item.id === id), 1)
    state.msgList.unshift(target[0])
    state.msgList[0].isTop = true
  },
  cancelMsgTop(state, id) {
    state.msgList[state.msgList.findIndex(item => item.id === id)].isTop = false
  },
  deleteMsg(state, id) {
    state.msgList.splice(state.msgList.findIndex(item => item.id === id), 1)
  }
};

const getters = {
  lastTimeFilter: (state) => {
    // 根据最近联系时间降序排序
    return state.msgList.sort((a, b) => {
      if (!a.isTop && !b.isTop) {
        return transTime(a.lastContact) < transTime(b.lastContact)
      }
    })
  }
};


const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
