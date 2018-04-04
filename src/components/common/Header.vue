<template>
  <div class="header">
    <img class="avatar" src="@/assets/avatar.jpg" alt="">
    <div class="title">{{this.$route.meta.title}}</div>
    <div class="btn-right">
      <icon v-show="this.$route.meta.name==='message'" name="plus"></icon>
      <span v-show="this.$route.meta.name==='contact'">添加</span>
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
