<template>
  <div id="login">
    <div
      style="display:flex;flex-direction:row;align-items:center;
      width:100%;height:100px;background:rgb(179,140,145);"
    >
      <div style="flex-grow:1"></div>
      <div style="width:">
        <img src="../assets/logo.jpg" width="100px" height="100px" alt="logo">
      </div>
      <div style="color:white;margin-left:30px;font-size:26px;">金橙助手</div>
      <div style="flex-grow:5"></div>
    </div>
    <div
      style="width:350px;height:250px;position:absolute;background:rgba(0,0,0,0.1);
      right:100px;top:200px;padding:25px;"
    >
      <a-input placeholder="请输入用户名" v-model="logUsername" style="margin:10px 0;">
        <a-icon slot="prefix" type="user"/>
        <a-icon v-if="logUsername" slot="suffix" type="close-circle" @click="empty('log',1)"/>
      </a-input>
      <a-input placeholder="请输入密码" v-model="logPassword" type="password" style="margin:10px 0;">
        <a-icon slot="prefix" type="key"/>
        <a-icon v-if="logPassword" slot="suffix" type="close-circle" @click="empty('log',2)"/>
      </a-input>
      <div
        style="background:rgb(0,147,221);height:40px;margin:30px 0 0 0;border-radius:5px;
        color:white;"
        @click="logSubmit"
        class="center"
      >登录</div>
    </div>
    <div style="flex-grow: 1;"></div>
  </div>
</template>
<script>
export default {
  name: "login",
  data: function() {
    return {
      // 登录用户名，密码
      logUsername: "",
      logPassword: "",
      status: ""
    };
  },
  methods: {
    logSubmit: function(e) {
      this.logloading = true;
      var self = this;
      this.ajax({
        url: self.store.INTERFACE.LOGIN,
        method: "POST",
        // headers: {
        //   "Content-Type": "application/x-www-form-urlencode; charset=utf-8;"
        // },
        data: {
          username: self.logUsername,
          password: self.logPassword,
          reply: {
            苹果: "橘子",
            樱桃: "西柚"
          }
        },
        success: function(res) {
          if (res.code == 200) {
            // console.log(res);
            localStorage.setItem("loginStatue", "ok");
            self.$router.go(-1);
            // self.isLogin = true;
            // // console.log(res.headers["set-cookie"]);
            // let allCookies = document.cookie;
            // console.log(allCookies);
            // self.handleCancel();
            // setTimeout(() => {
            // self.getUserInfo();
            // }, 200);
          } else {
            self.$message.info(res.message);
          }
        }
      });
    },
    empty: function(foo, bar) {
      if (foo == "log") {
        switch (bar) {
          case 1:
            this.logUsername = "";
            break;
          case 2:
            this.logPassword = "";
            break;
        }
      }
      if (foo == "reg") {
        switch (bar) {
          case 1:
            this.regUserId = "";
            break;
          case 2:
            this.regUsername = "";
            break;
          case 3:
            this.regPassword = "";
            break;
          case 4:
            this.regPassword2 = "";
            break;
          case 5:
            this.regEmail = "";
            break;
        }
      }
    }
  },
  mounted: function() {
    this.status = this.$route.params.status;
    console.log(this.status);
  }
};
</script>
<style>
#login {
  position: relative;
  max-height: 800px;
  max-width: 1500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(../assets/loginBackground.jpg);
  background-size: 100% auto;
  background-repeat: no-repeat;
}
</style>
