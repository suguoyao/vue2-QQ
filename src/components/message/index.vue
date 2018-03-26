<template>
  <div class="main">
    <div class="search-bar">
      <div class="search-bar-inner">
        <icon name="search" scale=".8"></icon>
        <div class="search-input-box">搜索</div>
      </div>
    </div>

    <div class="msg-list">
      <message-item v-for="i in 10" :key="i"></message-item>
    </div>
  </div>
</template>
<script>
  import MessageItem from '@/components/message/MsgItem'

  export default {
    data() {
      return {
        searchMsg: ''
      }
    },
    components: {
      MessageItem
    }
  }
</script>
<style lang="less">
  @import "../../less/message/index.less";
</style>
