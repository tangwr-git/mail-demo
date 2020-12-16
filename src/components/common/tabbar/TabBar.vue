<template>
  <div id="tab-bar" class="tabbar">
    <slot></slot>
  </div>
</template>

<script>


export default {
  name: "TabBar",
}
</script>

<style>
.tabbar {
  display: flex;
  font-size: 14px;
  height: 49px;
  background: #fff;
  box-shadow: 0px 1px 3px #dddddd;
  width: 98%;
  border-radius: 26px;
  position: fixed;
  bottom: 8px;
  left: 1%;
  color: #666;
}
</style>