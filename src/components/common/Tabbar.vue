<template>
  <mt-tabbar fixed v-model="activeTab">
    <mt-tab-item id="message">
      <icon slot="icon" name="comment-o"></icon>
      消息
    </mt-tab-item>
    <mt-tab-item id="contact">
      <icon slot="icon" name="user-o"></icon>
      联系人
    </mt-tab-item>
    <mt-tab-item id="highlight">
      <icon slot="icon" name="eye"></icon>
      看点
    </mt-tab-item>
    <mt-tab-item id="movement">
      <icon slot="icon" name="star-o"></icon>
      动态
    </mt-tab-item>
  </mt-tabbar>
</template>
<script>
  export default {
    data() {
      return {
        activeTab: this.$route.meta.name
      }
    },
    watch: {
      activeTab: function (v) {
        this.$router.push(v)
      }
    },
    created() {
      this.activeTab = this.$route.meta.name;
    }
  }
</script>
<style lang="less">
  @import "../../less/common/tabbar.less";
</style>
