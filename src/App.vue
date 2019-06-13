<template>
  <div id="app">
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

    <!-- 登录弹出窗体 -->
    <a-modal v-model="logVisible" title="用户登录" onOk="logSubmit">
      <template slot="footer">
        <!-- <a-button key="back" @click="handleCancel">Return</a-button> -->
        <a-button key="submit" type="primary" :loading="logloading" @click="logSubmit">登录</a-button>
      </template>
      <a-input placeholder="请输入用户名" v-model="logUsername" style="margin:10px 0;">
        <a-icon slot="prefix" type="user"/>
        <a-icon v-if="logUsername" slot="suffix" type="close-circle" @click="empty('log',1)"/>
      </a-input>
      <a-input placeholder="请输入密码" v-model="logPassword" type="password" style="margin:10px 0;">
        <a-icon slot="prefix" type="key"/>
        <a-icon v-if="logPassword" slot="suffix" type="close-circle" @click="empty('log',2)"/>
      </a-input>
    </a-modal>

    <!-- 注册弹出窗体 -->
    <a-modal v-model="regVisible" title="用户注册" onOk="regSubmit">
      <template slot="footer">
        <!-- <a-button key="back" @click="handleCancel">Return</a-button> -->
        <a-button key="submit" type="primary" :loading="regloading" @click="regSubmit">注册</a-button>
      </template>
      <a-input placeholder="请输入用户id" v-model="regUserId" style="margin:10px 0;">
        <a-icon slot="prefix" type="bulb"/>
        <a-icon v-if="regUserId" slot="suffix" type="close-circle" @click="empty('reg',1)"/>
      </a-input>
      <a-input placeholder="请输入用户名" v-model="regUsername" style="margin:10px 0;">
        <a-icon slot="prefix" type="user"/>
        <a-icon v-if="regUsername" slot="suffix" type="close-circle" @click="empty('reg',2)"/>
      </a-input>
      <a-input placeholder="请输入密码" v-model="regPassword" type="password" style="margin:10px 0;">
        <a-icon slot="prefix" type="key"/>
        <a-icon v-if="regPassword" slot="suffix" type="close-circle" @click="empty('reg',3)"/>
      </a-input>
      <a-input placeholder="请确认密码" v-model="regPassword2" type="password" style="margin:10px 0;">
        <a-icon slot="prefix" type="key"/>
        <a-icon v-if="regPassword2" slot="suffix" type="close-circle" @click="empty('reg',4)"/>
      </a-input>
      <a-input placeholder="请输入用户邮箱" v-model="regEmail" style="margin:10px 0;">
        <a-icon slot="prefix" type="mail"/>
        <a-icon v-if="regEmail" slot="suffix" type="close-circle" @click="empty('reg',5)"/>
      </a-input>
    </a-modal>
  </div>
</template>

<script>
// import home from "./views/Home.vue";
import userInfo from "./components/userInfo";
import reply from "./components/reply";
import wechatLogin from "./components/wechatLogin";
import noData from "./components/noDate";
export default {
  data() {
    return {
      // 登录态
      isLogin: true,

      collapsed: false,
      showKey: "index",
      logVisible: false,
      logloading: false,
      regVisible: false,
      regloading: false,

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
      this.logVisible = true;
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
    },
    showReg: function() {
      this.regVisible = true;
    },
    regSubmit: function(e) {
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
          last_name: self.regEmail
        },
        success: function(res) {
          console.log("zhucechengong");
          console.log(res);
        }
      });

      setTimeout(() => {
        this.regVisible = false;
        this.regloading = false;
      }, 1000);
    },
    logSubmit: function(e) {
      this.logloading = true;
      setTimeout(() => {
        this.logVisible = false;
        this.logloading = false;
        this.isLogin = true;
      }, 1000);
    },
    logout: function() {
      this.isLogin = false;
    },
    handleCancel: function(e) {
      this.logVisible = false;
    }
  },
  mounted: function() {
    // console.log(this.store.INTERFACE.REGISTER);
  }
};
</script>

<style>
@import url("//at.alicdn.com/t/font_1217929_q6sty5r3nu.css");
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
