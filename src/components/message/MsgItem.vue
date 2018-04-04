<template>
  <div class="msg-item">
    <div class="swiper-item" :class="{top: item.messages.isTop}" ref="swiper" :style="{right:right+'px'}">
      <div class="msg-item-left">
        <img class="avatar" src="@/assets/avatar.jpg" alt="">
      </div>
      <div class="msg-item-content">
        <div class="top-row">
          <div class="target-name">{{item.name}}</div>
          <div class="msg-time">{{item.messages.lastContact.split(' ')[1]}}</div>
        </div>
        <div class="bottom-row">
          <p class="msg-content">{{getLastMessage(item.id).message}}</p>
          <span v-if="item.messages.unread>0" class="unread-count">{{item.messages.unread}}</span>
        </div>
      </div>
    </div>

    <div class="btn-group" ref="btns">
      <div class="fixtop" @click="settop">{{!item.messages.isTop?'置顶':'取消置顶'}}</div>
      <div class="delete" @click="del">删除</div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    props: {
      item: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {
        right: 0,
        btnsWidth: 0,
        isSwipe: false
      }
    },
    computed: {
      ...mapGetters('contact', ['getLastMessage'])
    },
    methods: {
      settop() {
        let isTop = this.item.isTop;
        if (!isTop) {
          // 触发置顶
          this.$emit('settop', this.item.id, !this.item.messages.isTop);
        }
        this.right = 0;
        this.$nextTick(() => {
          this.btnsWidth = this.$refs.btns.offsetWidth;
        });
      },
      del() {
        this.$emit('delete', this.item.id);
        this.right = 0;
      }
    },
    mounted() {
      let x, y, X, Y, swipeX, swipeY, element = this.$refs.swiper;

      this.btnsWidth = this.$refs.btns.offsetWidth;

      element.addEventListener('touchstart', e => {
        e.stopPropagation();
        x = e.changedTouches[0].pageX;
        y = e.changedTouches[0].pageY;
        X = null;
        Y = null;
        swipeX = true;
        swipeY = true;
      });

      element.addEventListener('touchmove', e => {
        X = event.changedTouches[0].pageX;
        Y = event.changedTouches[0].pageY;

        let offsetX = parseInt(Math.abs(X - x));
        let offsetY = parseInt(Math.abs(Y - y));

        if (swipeX && offsetX - offsetY > 0 && offsetX <= this.btnsWidth) {
          e.stopPropagation();

          //左滑
          if (x - X > 10) {
            e.preventDefault();
            this.right = offsetX;
          }

          swipeY = false;
        }

        if (swipeY && offsetX - offsetY < 0) {
          swipeX = false;
        }
      });

      element.addEventListener('touchend', e => {
        e.preventDefault();
        if (!this.isSwipe) {
          if (X && x - X >= this.btnsWidth / 2) {
            this.right = this.btnsWidth;
            this.isSwipe = true;
          } else {
            this.right = 0;
            this.isSwipe = false;
          }
        } else {
          this.right = 0;
          this.isSwipe = false;
        }
      });
    }
  }
</script>
<style lang="less">

</style>
