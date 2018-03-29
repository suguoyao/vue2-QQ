<template>
  <div class="main">
    <div class="search-bar">
      <div class="search-bar-inner">
        <icon name="search" scale=".8"></icon>
        <div class="search-input-box">搜索</div>
      </div>
    </div>

    <div class="msg-list">
      <message-item v-for="item in msgList" :key="item.id" :item="item" @settop="settopHandler"
                    @delete="deleteHandler"></message-item>
    </div>
  </div>
</template>
<script>
  import MessageItem from '@/components/message/MsgItem'

  import {mapState, mapMutations} from 'vuex'

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
      ...mapState('message', ['msgList'])
    },
    methods: {
      ...mapMutations('message', ['setMsgTop', 'deleteMsg']),
      settopHandler(id) {
        this.setMsgTop(id);
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
