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
      v-if="status=='login'"
      style="width:350px;height:270px;position:absolute;background:rgba(0,0,0,0.2);
      right:100px;top:200px;padding:25px;text-align:center"
    >
      <div style="color:white;font-size:22px;">欢迎登陆</div>
      <a-input placeholder="请输入用户名" v-model="logUsername" style="margin:10px 0;">
        <a-icon slot="prefix" type="user"/>
        <a-icon v-if="logUsername" slot="suffix" type="close-circle" @click="empty('log',1)"/>
      </a-input>
      <a-input placeholder="请输入密码" v-model="logPassword" type="password" style="margin:10px 0;">
        <a-icon slot="prefix" type="key"/>
        <a-icon v-if="logPassword" slot="suffix" type="close-circle" @click="empty('log',2)"/>
      </a-input>
      <div style="color:white;">
        还没有账号？
        <span style="text-decoration:underline;" @click="status='register'">快去注册</span>！
      </div>
      <div
        style="background:rgb(0,147,221);height:40px;margin:20px 0 0 0;border-radius:5px;
        color:white;"
        @click="logSubmit"
        class="center"
      >登录</div>
    </div>
    <div
      v-if="status=='register'"
      style="background:rgba(0,0,0,0.2);width:550px;height:370px;
      position:absolute;text-align:center;padding:25px;right:100px;top:200px;
      display:flex;flex-direction:row;align-items: center;"
    >
      <a-popover title placement="left">
        <template slot="content">
          <img style="margin:20px;" width="230px;" src="../assets/QRcode.jpg" alt="公众号二维码">
          <p>微信扫码关注公众号，会向您下发一条用户id，</p>
          <p>请将其完整输入至右侧，以进行下一步注册</p>
        </template>
        <div style="width=140px;height:140px;">
          <img style="margin:20px;" width="100px;" src="../assets/QRcode.jpg" alt="公众号二维码">
        </div>
      </a-popover>
      <div style="width:350px;">
        <div style="color:white;font-size:22px;">欢迎注册</div>
        <a-input placeholder="请输入用户名" v-model="regUsername" style="margin:10px 0;">
          <a-icon slot="prefix" type="user"/>
          <a-icon v-if="regUsername" slot="suffix" type="close-circle" @click="empty('reg',2)"/>
        </a-input>
        <a-input placeholder="关注左侧公众号获取id" v-model="regUserId" style="margin:10px 0;">
          <a-icon slot="prefix" type="bulb"/>
          <a-icon v-if="regUserId" slot="suffix" type="close-circle" @click="empty('reg',1)"/>
        </a-input>
        <a-input placeholder="请输入密码" v-model="regPassword" type="password" style="margin:10px 0;">
          <a-icon slot="prefix" type="key"/>
          <a-icon v-if="regPassword" slot="suffix" type="close-circle" @click="empty('reg',3)"/>
        </a-input>
        <a-input placeholder="请确认密码" v-model="regPassword2" type="password" style="margin:10px 0;">
          <a-icon slot="prefix" type="key"/>
          <a-icon v-if="regPassword2" slot="suffix" type="close-circle" @click="empty('reg',4)"/>
        </a-input>
        <div style="color:white;">
          已有账号？
          <span style="text-decoration:underline;" @click="status='login'">快去登录</span>！
        </div>
        <div
          style="background:rgb(0,147,221);height:40px;margin:20px 0 0 0;border-radius:5px;
        color:white;"
          @click="regSubmit"
          class="center"
        >注册</div>
      </div>
    </div>
    <div style="flex-grow: 1;"></div>
  </div>
</template>
<script>
export default {
  name: "login",
  data: function() {
    return {
      status: "login",
      // 登录用户名，密码
      logUsername: "",
      logPassword: "",

      // 注册用户名，id，密码……
      regUserId: "",
      regUsername: "",
      regPassword: "",
      regPassword2: "",
      regEmail: ""
    };
  },
  methods: {
    regSubmit: function(e) {
      if (
        !(
          this.regUserId.trim() &&
          this.regUsername.trim() &&
          this.regPassword.trim() &&
          this.regPassword2.trim()
        )
      ) {
        this.$message.error("请输入完整用户信息！", 5);
        return;
      }
      if (this.regPassword !== this.regPassword2) {
        this.$message.error("用户密码与确认密码需一致！", 5);
        return;
      }
      this.regloading = true;
      var self = this;
      this.ajax({
        url: self.store.INTERFACE.REGISTER,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencode; charset=utf-8;"
        },
        data: {
          username: self.regUsername,
          password: self.regPassword,
          last_name: self.regUserId
        },
        success: function(res) {
          if (res.code == 200) {
            self.$message.info("注册成功，请登录", 5);
          }
          // console.log("zhucechengong");
          // console.log(res);
        }
      });

      // setTimeout(() => {
      //   this.regVisible = false;
      //   this.regloading = false;
      // }, 1000);
    },
    logSubmit: function(e) {
      if (!(this.logUsername.trim() || this.logPassword.trim())) {
        this.$message.error("请输入完整用户信息！", 5);
        return;
      }
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
    if (this.$route.params.status) this.status = this.$route.params.status;
    // console.log(this.status);
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
