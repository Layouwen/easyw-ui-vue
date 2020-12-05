<template>
  <div class="topNav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'TopNav',
};
</script>

<style lang='scss' scoped>
.topNav {
  display: flex;
  padding: 16px;
  background: pink;
  
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    
    > li {
      margin: 0 1em;
    }
  }
}
</style>
