<template>
  <div class="main">
    <div class="search-bar">
      <div class="search-bar-inner">
        <icon name="search" scale=".8"></icon>
        <div class="search-input-box">搜索</div>
      </div>
    </div>

    <div class="msg-list">
      <message-item v-for="item in lastTimeFilter" :key="item.id" :item="item" @settop="settopHandler"
                    @delete="deleteHandler"></message-item>
    </div>

    <!--添加弹窗-->

  </div>
</template>
<script>
  import MessageItem from '@/components/message/MsgItem'

  import {mapState, mapGetters, mapMutations} from 'vuex'

  export default {
    data() {
      return {
        searchMsg: ''
      }
    },
    components: {
      MessageItem
    },
    computed: {
      // ...mapState('message', ['msgList']),
      ...mapGetters('message', ['lastTimeFilter'])
    },
    methods: {
      ...mapMutations('message', ['setMsgTop', 'cancelMsgTop', 'deleteMsg']),
      settopHandler(id, isTop) {
        if (isTop) {
          // 设置置顶
          this.setMsgTop(id);
        } else {
          // 取消置顶
          this.cancelMsgTop(id);
        }
      },
      deleteHandler(id) {
        this.deleteMsg(id);
      }
    }
  }
</script>
<style lang="less">
  @import "../../less/message/index.less";
</style>
