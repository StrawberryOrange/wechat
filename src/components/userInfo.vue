<template>
  <div class="userInfo">
    <div class="info column-center">
      <a-avatar
        :size="64"
        icon="user"
        src="https://m.360buyimg.com/pop/jfs/t24505/175/1750670450/14994/a3c2d55f/5b697897N21140e81.jpg"
      />
      <span class="nick-name info-item">这是一个昵称</span>
      <span class="signature info-item">这个人很勤快，什么都拿走了</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "userInfo",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userInfo {
  display: flex;
  flex-direction: row;
}
.column-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.info {
  border-right: 1px solid #e5e6e7;
  padding: 18px;
  /* height: 300px; */
}
.info-item {
  margin-top: 15px;
  /* width: 170px; */
}
</style>
