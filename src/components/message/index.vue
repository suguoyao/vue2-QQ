<template>
  <div class="main">
    <!--<mt-search v-model="searchMsg"></mt-search>-->
    <div class="search-bar">
      <div class="search-bar-inner"></div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        searchMsg: ''
      }
    }
  }
</script>
<style lang="less">
  @import "../../less/message/index.less";
</style>
