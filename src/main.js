// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/less/index.less'
import 'mint-ui/lib/style.css'

// mint-ui
import {
  Cell, Checklist,
  Tabbar, TabItem,
  Search,
} from 'mint-ui';

Vue.component(Cell.name, Cell);
Vue.component(Checklist.name, Checklist);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Search.name, Search);

// awesome icon
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = 'QQ - ' + to.meta.title + '页';
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
