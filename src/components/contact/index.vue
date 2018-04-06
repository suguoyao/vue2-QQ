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
        <group-item v-for="g in groups.friends" :key="g.id" :group="g"></group-item>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <group-item v-for="g in groups.teams" :key="g.id" :group="g"></group-item>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
  import SearchTemp from '@/components/common/SearchTemp'
  import ListItem from '@/components/common/ListItem'
  import GroupItem from '@/components/contact/GroupItem'

  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        selectdTab: "1"
      }
    },
    components: {
      SearchTemp,
      ListItem,
      GroupItem
    },
    computed: {
      ...mapState('contact', ['groups'])
    }
  }
</script>
<style lang="less">
  @import "../../less/contact/index.less";
</style>
