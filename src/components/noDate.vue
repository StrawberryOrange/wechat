<template>
  <div id="noData" style="height:100%;">
    <img src="../assets/noData.jpg" alt="暂无数据" style="height:100px;width:100px;margin:20px auto;">
    <div style="margin:40px auto 100px; color:rgba(91,91,91,.3)">您还未登录…</div>
  </div>
</template>
<script>
export default {
  name: "noData",
  data() {
    return {};
  }
};
</script>
<style>
#noData {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
