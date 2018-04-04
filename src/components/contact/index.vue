<template>
  <div class="main">
    <search-temp></search-temp>

    <div class="q-cells">
      <list-item to="#">
        <p slot="bd">新朋友</p>
      </list-item>
      <list-item to="#">
        <p slot="bd">创建群聊</p>
      </list-item>
    </div>

    <mt-navbar v-model="selectdTab">
      <mt-tab-item id="1">好友</mt-tab-item>
      <mt-tab-item id="2">群聊</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selectdTab" swipeable>
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" :title="'content ' + n"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 6" :title="'content ' + n"/>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
  import SearchTemp from '@/components/common/SearchTemp'
  import ListItem from '@/components/common/ListItem'

  export default {
    data() {
      return {
        selectdTab: "1"
      }
    },
    components: {
      SearchTemp,
      ListItem
    },
  }
</script>
<style lang="less">
  @import "../../less/contact/index.less";
</style>
