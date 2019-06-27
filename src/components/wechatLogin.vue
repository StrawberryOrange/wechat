<template>
  <div style="text-align:center;">
    <div v-if="status=='loading'">
      <a-spin size="large"/>
      <div class="top-margin">正在加载…</div>
    </div>
    <div v-if="status=='fail'">
      <i class="iconfont icon-tupianjiazaishibai" style="font-size:68px;color:rgba(0,0,0,0.2)"></i>
      <div class="top-margin">加载失败咯,请刷新重试</div>
    </div>
    <div v-if="status=='success'">
      <a-popover title placement="top">
        <template slot="content">
          <img v-bind:src="src" width="230px" alt="微信登陆二维码">
          <p></p>
        </template>
        <div style="width=140px;height:140px;">
          <img v-bind:src="src" width="100px" alt="微信登陆二维码">
        </div>
      </a-popover>
      <div class="top-margin">微信扫码登录,即可实现自动回复~</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "wechatLogin",
  data: function() {
    return {
      src: "",
      status: "loading"
    };
  },
  methods: {
    getQRcode: function() {
      var self = this;
      this.ajax({
        url: self.store.INTERFACE.WECHAT_LOGIN,
        method: "GET",
        success: function(res) {
          if (res.code == 200) {
            self.src = self.store.INTERFACE.QRCODE + res.data.pid + ".png";
            self.status = "success";
            // self.$message.success("删除成功", 5);
            // self.show();
          } else {
            self.$message.error(res.message, 5);
            self.status = "fail";
          }
        }
      });
    }
  },
  mounted: function() {
    this.getQRcode();
  }
};
</script>
<style>
.top-margin {
  margin-top: 15px;
}
</style>
