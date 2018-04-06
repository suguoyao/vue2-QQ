<template>
  <div class="contact-item">
    <div class="item-left">
      <img class="avatar" src="@/assets/avatar.jpg" alt="">
    </div>
    <div class="item-content">
      <div class="contact-name">{{contact.name}}</div>
      <p class="signature">{{contact.sign}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "contacts-item",
    props: {
      contact: {
        type: Object,
        default: null
      }
    }
  }
</script>

<style lang="less" scoped>
  .contact-item {
    position: relative;
    display: flex;
    min-height: 56px;
    padding-left: 64px;
    box-sizing: border-box;

    .item-left {
      position: absolute;
      width: 40px;
      height: 40px;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);

      .avatar {
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }
    }

    .item-content {
      position: relative;
      width: 100%;
      align-self: center;
      padding: 8px 0;

      .contact-name {
        font-size: 18px;
        font-weight: 400;
        color: #010000;
      }

      .signature {
        font-size: 14px;
        color: #999;
        margin-top: 6px;
        text-overflow: ellipsis;
        white-space: pre;
        overflow: hidden;
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

    &:last-of-type > .item-content:after {
      display: none;
    }
  }
</style>
