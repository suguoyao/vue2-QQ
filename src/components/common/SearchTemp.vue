<template>
  <div class="search-bar">
    <div class="search-bar-inner">
      <icon name="search" scale=".8"></icon>
      <div class="search-input-box">{{placeholder}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "search-temp",
    props: {
      placeholder: {
        type: String,
        default: '搜索'
      }
    }
  }
</script>

<style lang="less" scoped>
  .search-bar {
    position: relative;
    padding: 10px;
    background-color: #fff;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    align-items: center;

    .search-bar-inner {
      padding: 6px;
      border-radius: 4px;
      background-color: #eeeff3;
      display: flex;
      flex: 1;
      align-items: center;

      .fa-icon {
        color: #d1d0d5;
      }

      .search-input-box {
        //appearance: none;
        //border: 0;
        //box-sizing: border-box;
        //width: 100%;
        //height: 100%;
        //outline: 0;
        color: #d1d0d5;
        font-size: 13px;
        box-sizing: border-box;
        padding-left: 6px;
      }
    }
  }
</style>
