/**
 * Created by Sugar on 2018/3/29.
 */
import {transTime} from "@/util/index";

const state = {
  friends: [
    {
      id: 1,
      name: 'Leo',
      avatar: '',
      messages: {
        content: [
          {id: 1, message: '最近过得好吗？', time: '2018-03-28 12:35'}
        ],
        lastContact: '2018-03-28 12:35',
        unread: 0,
        isTop: false
      }
    },
    {
      id: 2,
      name: 'Sugars',
      avatar: '',
      messages: {
        content: [
          {id: 1, message: '在吗？', time: '2018-03-28 14:05'}
        ],
        lastContact: '2018-03-28 14:05',
        unread: 3,
        isTop: false
      }
    },
    {
      id: 3,
      name: 'Jack',
      avatar: '',
      messages: {
        content: [
          {id: 1, message: 'hello world', time: '2018-03-28 10:19'},
          {id: 2, message: 'vue2', time: '2018-03-28 10:22'}
        ],
        lastContact: '2018-03-28 10:19',
        unread: 0,
        isTop: false
      }
    },
    {
      id: 4,
      name: 'Tom',
      avatar: '',
      messages: {
        content: [
          {id: 1, message: '你好啊', time: '2018-03-28 21:18'},
          {id: 2, message: '我是Tom', time: '2018-03-28 21:20'}
        ],
        lastContact: '2018-03-28 21:18',
        unread: 8,
        isTop: true
      }
    },
    {
      id: 5,
      name: 'Peter',
      avatar: '',
      messages: {
        content: [
          {id: 1, message: '这是一个Vue2仿QQ项目？', time: '2018-03-28 07:35'}
        ],
        lastContact: null,
        unread: 0,
        isTop: false
      }
    },
  ]
};

const mutations = {};

const getters = {
  getLastMessage: (state) => (id) => {
    let findMsgList = state.friends[state.friends.findIndex(item => item.id === id)].messages.content;
    return findMsgList.length > 0 ? findMsgList[findMsgList.length - 1] : {};
  },
  recentFriendsFilter(state) {
    // 根据最近联系时间降序排序
    let recentFriends = state.friends.filter(friend => friend.messages.lastContact !== null);

    return recentFriends.sort((a, b) => {
      let _a = a.messages;
      let _b = b.messages;

      if (_a.isTop || _b.isTop) {
        return _a.isTop < _b.isTop
      }

      return transTime(_a.lastContact) < transTime(_b.lastContact)
    })
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
