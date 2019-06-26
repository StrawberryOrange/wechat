<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
</script>

<style>
@import url("//at.alicdn.com/t/font_1217929_c8vb4ug0c65.css");
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#app {
  height: 100%;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
