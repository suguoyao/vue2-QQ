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
      sign: '我们准备着深深地领受，那些意想不到的奇迹',
      messages: {
        content: [
          {id: 1, message: '最近过得好吗？', time: '2018-03-28 12:35'}
        ],
        lastContact: '2018-03-28 12:35',
        unread: 0,
        isTop: false
      },
      group: 'g1'
    },
    {
      id: 2,
      name: 'Sugars',
      avatar: '',
      sign: '在漫长的岁月里忽然有，彗星的出现，狂风乍起',
      messages: {
        content: [
          {id: 1, message: '在吗？', time: '2018-03-28 14:05'}
        ],
        lastContact: '2018-03-28 14:05',
        unread: 3,
        isTop: false
      },
      group: 'g1'
    },
    {
      id: 3,
      name: 'Jack',
      avatar: '',
      sign: '毫无权势，一些知识，一些智慧，以及尽可能多的趣味。',
      messages: {
        content: [
          {id: 1, message: 'hello world', time: '2018-03-28 10:19'},
          {id: 2, message: 'vue2', time: '2018-03-28 10:22'}
        ],
        lastContact: '2018-03-28 10:19',
        unread: 0,
        isTop: false
      },
      group: 'g3'
    },
    {
      id: 4,
      name: 'Tom',
      avatar: '',
      sign: '走在一条开满了桃花的路上，云蒸霞蔚，前途似锦。',
      messages: {
        content: [
          {id: 1, message: '你好啊', time: '2018-03-28 21:18'},
          {id: 2, message: '我是Tom', time: '2018-03-28 21:20'}
        ],
        lastContact: '2018-03-28 21:18',
        unread: 8,
        isTop: true
      },
      group: 'g2'
    },
    {
      id: 5,
      name: 'Peter',
      avatar: '',
      sign: '你懂的越多，懂你的人就越少',
      messages: {
        content: [
          {id: 1, message: '这是一个Vue2仿QQ项目？', time: '2018-03-28 07:35'}
        ],
        lastContact: null,
        unread: 0,
        isTop: false
      },
      group: 'g1'
    },
  ],
  groups: {
    // 好友分组
    friends: [
      {
        id: 'g1',
        groupName: '我的家人'
      },
      {
        id: 'g2',
        groupName: '老同学'
      },
      {
        id: 'g3',
        groupName: '我的好朋友'
      }
    ],
    // 群分组
    teams: [
      {
        id: 't1',
        groupName: '班级群'
      },
      {
        id: 't2',
        groupName: '开心一家人'
      }
    ]
  }
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
  getGroupSize: (state) => (groupId) => {
    return state.friends.filter(friend => friend.group === groupId)
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
