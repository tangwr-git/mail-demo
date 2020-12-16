<template >
  <tab-bar>
    <tab-bar-item path="/Home">
      <template #item-icon>
        <img src="~assets/imgs/tabbar/home_off.svg" alt="" srcset="">
      </template>
      <template #item-icon-active>
        <img src="~assets/imgs/tabbar/home_on.svg" alt="" srcset="">
      </template>
      <template #item-text class="item-text">
        <div class="item-text">首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/Category">
      <template #item-icon>
        <img src="~assets/imgs/tabbar/category_off.svg" alt="" srcset="">
      </template>
      <template #item-icon-active>
        <img src="~assets/imgs/tabbar/category_on.svg" alt="" srcset="">
      </template>
      <template #item-text>
        <div class="item-text">分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/Cart">
      <template #item-icon>
        <img src="~assets/imgs/tabbar/cart_off.svg" alt="" srcset="">
      </template>
      <template #item-icon-active>
        <img src="~assets/imgs/tabbar/cart_on.svg" alt="" srcset="">
      </template>
      <template #item-text class="item-text">
        <div class="item-text">购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/Profile">
      <template #item-icon>
        <img src="~assets/imgs/tabbar/myself_off.svg" alt="" srcset="">
      </template>
      <template #item-icon-active>
        <img src="~assets/imgs/tabbar/myself_on.svg" alt="" srcset="">
      </template>
      <template #item-text class="item-text">
        <div class="item-text">我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '../common/tabbar/TabBar';
import TabBarItem from '../common/tabbar/TabBarItem';
export default {
  name: "MainTabbar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
</style>