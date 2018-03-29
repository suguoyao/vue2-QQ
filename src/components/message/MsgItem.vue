<template>
  <div class="msg-item">
    <div class="swiper-item" :class="{top: item.isTop}" ref="swiper" :style="{right:right+'px'}">
      <div class="msg-item-left">
        <img class="avatar" src="@/assets/avatar.jpg" alt="">
      </div>
      <div class="msg-item-content">
        <div class="top-row">
          <div class="target-name">{{item.name}}</div>
          <div class="msg-time">{{getLastMessageByFid(item.fid).time.split(' ')[1]}}</div>
        </div>
        <div class="bottom-row">
          <p class="msg-content">{{getLastMessageByFid(item.fid).message}}</p>
          <span v-if="item.unread>0" class="unread-count">{{item.unread}}</span>
        </div>
      </div>
    </div>

    <div class="btn-group">
      <div class="fixtop" @click="settop">{{!item.isTop?'置顶':'取消置顶'}}</div>
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
        isSwipe: false
      }
    },
    computed: {
      ...mapGetters('contact', ['getLastMessageByFid'])
    },
    methods: {
      settop() {
        this.$emit('settop', this.item.id);
        this.right = 0;
      },
      del() {
        this.$emit('delete', this.item.id);
        this.right = 0;
      }
    },
    mounted() {
      let x, y, X, Y, swipeX, swipeY, element = this.$refs.swiper;

      element.addEventListener('touchstart', e => {
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

        if (swipeX && offsetX - offsetY > 0 && offsetX <= 66 * 2) {
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
          if (X && x - X >= 66) {
            this.right = 66 * 2;
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
