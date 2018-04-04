<template>
  <router-link class="q-cell weui-cell_access" :to="to">
    <div class="q-cell-hd">
      <slot name="hd"></slot>
    </div>
    <div class="q-cell-bd">
      <slot name="bd"></slot>
    </div>
    <div class="q-cell-ft">
      <slot name="ft"></slot>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: "list-item",
    props: {
      to: {
        type: String,
        default: '/'
      }
    }
  }
</script>

<style lang="less" scoped>
  .q-cell {
    position: relative;
    padding: 14px 15px;
    display: flex;
    align-items: center;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    color: inherit;
    text-decoration: none;

    .q-cell-hd {
    }

    .q-cell-bd {
      flex: 1;
      font-size: 17px;
    }

    .q-cell-ft {
      position: relative;
      padding-right: 13px;
      text-align: right;
      color: #808080;

      &:after {
        content: " ";
        display: inline-block;
        height: 6px;
        width: 6px;
        border-width: 2px 2px 0 0;
        border-color: #C8C8CD;
        border-style: solid;
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        position: absolute;
        top: 50%;
        margin-top: -4px;
        right: 2px;
      }
    }

    &:after {
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      border-top: 1px solid #e5e5e5;
      color: #e5e5e5;
      transform-origin: 0 0;
      transform: scaleY(0.5);
      z-index: 2;
    }
  }
</style>
