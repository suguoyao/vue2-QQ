<template>
  <div id="app">
    <top-header></top-header>

    <router-view/>

    <tabbar></tabbar>
  </div>
</template>
<script>
  import TopHeader from '@/components/common/Header.vue'
  import Tabbar from '@/components/common/Tabbar.vue'

  export default {
    name: 'App',
    components: {
      TopHeader,
      Tabbar
    }
  }
</script>
<style>

</style>
