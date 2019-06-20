<template>
  <!-- 页面总宽度低于800像素便认为此页面显示不安全，后期需要加上判断 -->
  <!-- 平板适配时需要注意，低端窄版分辨率较低时会产生此问题 -->
  <div class="userInfo column-center">
    <div class="card row-center" style="position:relative">
      <div class="set-info" style="position:absolute;right:14px;top:14px;">
        <a-button @click="setInfo">
          <a class="iconfont icon-xiugai"></a>修改个人信息
        </a-button>
      </div>
      <div
        class="left column-center"
        style="width:40%;margin:10px 0;
              border-right:1px solid rgba(151,151,151,0.3);
              align-self:stretch;
              justify-content:space-around;"
      >
        <div class="head-name row-center" style="align-self:stretch;padding-left:20px;">
          <a-avatar
            style="margin:5px 20px 5px 0;"
            :size="72"
            icon="user"
            src="https://m.360buyimg.com/pop/jfs/t24505/175/1750670450/14994/a3c2d55f/5b697897N21140e81.jpg"
          />
          <div class="column-center" style="align-items:flex-start;flex-grow:1;">
            <span style="font-size:22px;color:#333">{{userInfo.id}}</span>
            <span>{{userInfo.name}}</span>
          </div>
        </div>
        <div
          class="info-content"
          style="align-self:flex-start;margin-left:20px;"
        >签名：{{userInfo.signature}}</div>
      </div>
      <div class="right" style="width:60%">
        <div class="info-content signature">
          <span class="info-content-title">openid：</span>
          {{userInfo.openid}}
        </div>
        <div class="info-content signature">
          <span class="info-content-title">微信名：</span>
          {{userInfo.wechatid}}
        </div>
        <div class="info-content signature">
          <span class="info-content-title">邮箱：</span>
          {{userInfo.email}}
        </div>
        <div class="info-content signature">
          <span class="info-content-title">电话：</span>
          {{userInfo.phone}}
        </div>
        <div class="info-content signature">
          <span class="info-content-title" style="line-height:24px;">性别：</span>
          <a
            v-if="userInfo.gender=='male'"
            class="iconfont gender icon-nan"
            style="background:#1296db"
          ></a>
          <a
            v-if="userInfo.gender=='female'"
            class="iconfont gender column-center row-center icon-nv"
            style="background:rgb(238,155,155)"
          ></a>
        </div>
        <div class="info-content"></div>
      </div>
    </div>
    <div class="card row-center" style="justify-content:flex-start;">
      <div
        class="content"
        style="
  background: linear-gradient(to right, rgb(186, 172, 207), rgb(80, 125, 210));"
      >
        <div class="tip"></div>
        <div class="text">
          账户资产：
          <div style="font-size:42px;margin-top:5px;">￥{{userInfo.pay}}</div>
        </div>
        <i class="iconfont icon-jinlingyingcaiwangtubiao62 first"></i>
        <i class="iconfont icon-jinlingyingcaiwangtubiao62 second"></i>
      </div>
      <div
        class="content"
        style="
  background: linear-gradient(to right, rgb(235,191,133), rgb(222,108,57));"
      >
        <div class="tip"></div>
        <div class="text">
          已处理会话：
          <div style="font-size:42px;margin-top:5px;">{{userInfo.time}}次</div>
        </div>
        <i class="iconfont icon-cishu first"></i>
        <i class="iconfont icon-cishu second"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userInfo",
  props: {
    msg: String
  },
  data: function() {
    return {
      userInfo: {
        // signature: "这个人很勤快，什么都拿走了",
        // openid: "奇奇怪怪的东东",
        // wechatid: "微信id",
        // email: "123@321.com",
        // phone: "12332112345",
        // gender: "male",
        // pay: -2,
        // time: 310
        id: "--",
        name: "--",
        signature: "--",
        openid: "--",
        wechatid: "--",
        email: "--",
        phone: "--",
        gender: "male",
        pay: -2,
        time: 310
      }
    };
  },
  methods: {
    setInfo: function() {
      this.$message.info("还没做好呢，急毛线");
    },
    getUserInfo: function() {
      var self = this;
      this.ajax({
        url: self.store.INTERFACE.ACCOUNT_PROFILE,
        method: "GET",
        success: function(res) {
          if (res.code == 200) {
            console.log(res);
          }
        }
      });
    }
  },
  mounted: function() {
    this.getUserInfo();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info-content {
  margin: 10px;
}
.info-content-title {
  display: inline-block;
  width: 65px;
}
.gender {
  margin-left: 3px;
  border-radius: 3px;
  color: #fff;
  width: 24px;
  height: 24px;
  display: inline-block;
  text-align: center;
  line-height: 24px;
}
.content {
  margin: 10px 10px;
  border-radius: 3px;
  width: 320px;
  height: 150px;
  position: relative;
}
.first {
  position: absolute;
  right: 10px;
  top: 25px;
  font-size: 96px;
  color: rgba(255, 255, 255, 0.2);
}
.second {
  position: absolute;
  right: 110px;
  top: 5px;
  font-size: 50px;
  color: rgba(255, 255, 255, 0.2);
}
.tip {
  position: absolute;
  left: 30px;
  top: 18px;
  width: 25px;
  height: 4px;
  border-radius: 3px;
  background: #fff;
}
.text {
  position: absolute;
  left: 30px;
  top: 33px;
  color: #fff;
}
</style>
