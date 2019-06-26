<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider :trigger="null" collapsible v-model="collapsed">
        <div class="logo"/>
        <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
          <a-menu-item key="1" @click="chooseIndex('index')">
            <a-icon type="user"/>
            <span>个人信息</span>
          </a-menu-item>
          <a-menu-item key="2" @click="chooseIndex('reply')">
            <a-icon type="video-camera"/>
            <span>回复管理</span>
          </a-menu-item>
          <a-menu-item key="3" @click="chooseIndex('wechatLogin')">
            <a-icon type="upload"/>
            <span>后台登陆</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header
          style="background: #fff; padding: 0;display:flex;justify-content:space-between;padding-right:80px;"
        >
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="()=> collapsed = !collapsed"
          />
          <!-- 未登录的登陆/注册按钮 -->
          <div class="login" v-if="!isLogin">
            <a-button type="primary" @click="showReg">注册</a-button>
            <a-button @click="showLog" style="margin-left:20px;">登录</a-button>
          </div>
          <!-- 登陆后的退出按钮 -->
          <div class="login" v-if="isLogin">
            <a-button @click="logout">退出</a-button>
          </div>
        </a-layout-header>
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
          <!-- <router-view/> -->
          <userInfo v-if="showKey == 'index' && isLogin"/>
          <reply v-if="showKey == 'reply' && isLogin"/>
          <wechatLogin v-if="showKey=='wechatLogin' &&isLogin"/>
          <noData v-if="!isLogin"/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import userInfo from "../components/userInfo";
import reply from "../components/reply";
import wechatLogin from "../components/wechatLogin";
import noData from "../components/noDate";
export default {
  name: "home",
  data() {
    return {
      // 登录态
      isLogin: false,

      collapsed: false,
      showKey: "index",
      logVisible: false,
      logloading: false,
      regVisible: false,
      regloading: false
    };
  },
  components: {
    noData,
    userInfo,
    reply,
    wechatLogin
  },
  methods: {
    chooseIndex: function(item) {
      this.showKey = item;
      // console.log(this.showKey);
    },
    showLog: function() {
      this.$router.push({
        name: "account",
        params: {
          status: "login"
        }
      });
    },
    showReg: function() {
      this.$router.push({
        name: "account",
        params: {
          status: "register"
        }
      });
    },
    logout: function() {
      var self = this;
      this.ajax({
        url: self.store.INTERFACE.LOGOUT,
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencode; charset=utf-8;"
        },
        success: function(res) {
          if (res.code == 200) {
            localStorage.setItem("loginStatue", "fail");
            self.$router.go(0);
          }
          // console.log("zhucechengong");
          // console.log(res);
        }
      });
    },
    handleCancel: function(e) {
      this.logVisible = false;
      this.regVisible = false;
    }
  },
  mounted: function() {
    // console.log(this.store.INTERFACE.REGISTER);
    if (localStorage.getItem("loginStatue") === "ok") {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
    // console.log("qaq");
  }
};
</script>
<style>
.card {
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(151, 151, 151, 0.3);
  width: 100%;
  margin-bottom: 15px;
}

.column-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.row-center {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
