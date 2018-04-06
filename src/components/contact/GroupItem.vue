<template>
  <div class="group">
    <div class="group-item" @click="toggles">
      <icon :class="{open:isOpen}" name="angle-right" scale="1.3"></icon>
      <p class="group-name">{{group.groupName}}</p>
      <span class="count">{{getGroupSize(group.id).length}}/{{getGroupSize(group.id).length}}</span>
    </div>

    <div v-show="isOpen" class="contanct-list">
      <contacts-item v-for="item in getGroupSize(group.id)" :key="item.id" :contact="item"></contacts-item>
    </div>
  </div>
</template>

<script>
  import ContactsItem from '@/components/contact/ContactsItem'

  import {mapGetters} from 'vuex'

  export default {
    name: "group-item",
    props: {
      group: {
        type: Object,
        default: null
      }
    },
    components: {ContactsItem},
    computed: {
      ...mapGetters('contact', ['getGroupSize'])
    },
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      toggles() {
        this.isOpen = !this.isOpen;
      }
    }
  }
</script>

<style lang="less" scoped>
  .group {
    overflow: hidden;
    background-color: #fff;

    .group-item {
      position: relative;
      display: flex;
      padding: 0 12px 0 32px;
      background-color: #fff;
      box-sizing: border-box;
      line-height: 47px;

      .fa-icon {
        position: absolute;
        color: #999;
        top: 50%;
        left: 12px;
        transform: translateY(-50%);
        transition: all .1s;

        &.open {
          transform: translateY(-50%) rotate(90deg);
        }
      }

      .group-name {
        flex: 1;
        font-size: 18px;
        font-weight: 400;
        color: #010000;
      }

      .count {
        font-size: 13px;
        font-weight: 400;
        color: #999;
      }
    }

    .contanct-list {

    }
  }
</style>
