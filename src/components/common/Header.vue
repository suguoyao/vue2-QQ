<template>
  <div class="header">
    <img class="avatar" src="@/assets/avatar.jpg" alt="">
    <div class="title">{{this.$route.meta.title}}</div>
    <div class="btn-right">
      添加
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style lang="less">
  @import "../../less/common/header.less";
</style>
