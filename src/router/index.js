import Vue from 'vue'
import Router from 'vue-router'
import Message from '@/components/message/index'
import Contact from '@/components/contact/index'
import Highlight from '@/components/highlight/index'
import Movement from '@/components/movement/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/message'
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
      meta: {title: '消息', name: 'message'}
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {title: '联系人', name: 'contact'}
    },
    {
      path: '/highlight',
      name: 'Highlight',
      component: Highlight,
      meta: {title: '热点', name: 'highlight'}
    },
    {
      path: '/movement',
      name: 'Movement',
      component: Movement,
      meta: {title: '动态', name: 'movement'}
    },
  ]
})
