/**
 * Created by Sugar on 2018/3/29.
 */
const state = {
  msgList: [
    {
      id: 1,
      fid: 1,
      name: 'Leo',
      unread: 5,
      isTop: false
    },
    {
      id: 2,
      fid: 2,
      name: 'Sugars',
      unread: 3,
      isTop: false
    },
    {
      id: 3,
      fid: 3,
      name: 'Jack',
      unread: 0,
      isTop: false
    },
    {
      id: 4,
      fid: 4,
      name: 'Tom',
      unread: 0,
      isTop: false
    },
    {
      id: 5,
      fid: 5,
      name: 'Peter',
      unread: 0,
      isTop: false
    },
  ]
};

const mutations = {
  setMsgTop(state, id) {
    let target = state.msgList.splice(state.msgList.findIndex(item => item.id === id), 1)
    state.msgList.unshift(target[0])
    state.msgList[0].isTop = true
  },
  deleteMsg(state, id) {
    state.msgList.splice(state.msgList.findIndex(item => item.id === id), 1)
  }
};

const getters = {
  // getMessageByFid: ({state}) => {
  // }
};


const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
