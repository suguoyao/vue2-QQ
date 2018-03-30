/**
 * Created by Sugar on 2018/3/29.
 */
const state = {
  friends: [
    {
      id: 1,
      name: 'Leo',
      avatar: '',
      messages: [
        {id: 1, message: '最近过得好吗？', time: '2018-03-28 12:35'}
      ],
    },
    {
      id: 2,
      name: 'Sugars',
      avatar: '',
      messages: [
        {id: 1, message: '在吗？', time: '2018-03-28 14:05'}
      ],
    },
    {
      id: 3,
      name: 'Jack',
      avatar: '',
      messages: [
        {id: 1, message: 'hello world', time: '2018-03-28 10:19'}
      ],
    },
    {
      id: 4,
      name: 'Tom',
      avatar: '',
      messages: [
        {id: 1, message: '你好啊', time: '2018-03-28 21:18'}
      ],
    },
    {
      id: 5,
      name: 'Peter',
      avatar: '',
      messages: [
        {id: 1, message: '这是一个Vue2仿QQ项目？', time: '2018-03-28 07:35'}
      ],
    },
  ]
};

const mutations = {};

const getters = {
  getLastMessageByFid: (state) => (fid) => {
    let findMsgList = state.friends[state.friends.findIndex(item => item.id === fid)].messages;
    return findMsgList.length > 0 ? findMsgList[findMsgList.length - 1] : null;
  },
  // getAllMessageByFid: ({state}, fid) => {
  //   return state.friends.find(friend => {
  //     return friend.id === fid ? friend.messages : []
  //   })
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
