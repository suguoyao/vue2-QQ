<template>
  <div class="main">
    <search-temp></search-temp>

    <div class="msg-list">
      <message-item v-for="item in recentFriendsFilter" :key="item.id" :item="item" @settop="settopHandler"
                    @delete="deleteHandler"></message-item>
    </div>

    <!--添加弹窗-->

  </div>
</template>
<script>
  import SearchTemp from '@/components/common/SearchTemp'
  import MessageItem from '@/components/message/MsgItem'

  import {mapState, mapGetters, mapMutations} from 'vuex'

  export default {
    data() {
      return {}
    },
    components: {
      SearchTemp,
      MessageItem
    },
    computed: {
      ...mapGetters('contact', ['recentFriendsFilter'])
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
