<template>
  <div :class="[tabbarItem,{active: isActive}]" @click="itemClick">
    <div class="item-icon" v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div class="item-icon" v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String
  },
  data () {
    return {
      // isActive: true,
      tabbarItem: 'tabbar-item'
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
      // return false
    }
  },
  methods: {
    itemClick () {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
.tabbar-item {
  flex: 1;
  text-align: center;
}
.tabbar-item .item-icon {
  margin-top: 4px;
}
img {
  height: 24px;
  width: 24px;
  vertical-align: middle;
}
.active .item-text {
  color: #921010;
}
</style>