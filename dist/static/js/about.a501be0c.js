(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0b53":function(t,e,s){},4560:function(t,e,s){t.exports=s.p+"static/img/noData.4c3ef33a.jpg"},5751:function(t,e,s){"use strict";var i=s("0b53"),n=s.n(i);n.a},"6c67":function(t,e,s){"use strict";var i=s("81a1"),n=s.n(i);n.a},"81a1":function(t,e,s){},8887:function(t,e,s){},bb51:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("a-layout",{attrs:{id:"components-layout-demo-custom-trigger"}},[s("a-layout-sider",{attrs:{trigger:null,collapsible:""},model:{value:t.collapsed,callback:function(e){t.collapsed=e},expression:"collapsed"}},[s("div",{staticClass:"logo"}),s("a-menu",{attrs:{theme:"dark",mode:"inline",defaultSelectedKeys:["1"]}},[s("a-menu-item",{key:"1",on:{click:function(e){return t.chooseIndex("index")}}},[s("a-icon",{attrs:{type:"user"}}),s("span",[t._v("个人信息")])],1),s("a-menu-item",{key:"2",on:{click:function(e){return t.chooseIndex("reply")}}},[s("a-icon",{attrs:{type:"video-camera"}}),s("span",[t._v("回复管理")])],1),s("a-menu-item",{key:"3",on:{click:function(e){return t.chooseIndex("wechatLogin")}}},[s("a-icon",{attrs:{type:"upload"}}),s("span",[t._v("后台登陆")])],1)],1)],1),s("a-layout",[s("a-layout-header",{staticStyle:{background:"#fff",padding:"0",display:"flex","justify-content":"space-between","padding-right":"80px"}},[s("a-icon",{staticClass:"trigger",attrs:{type:t.collapsed?"menu-unfold":"menu-fold"},on:{click:function(){return t.collapsed=!t.collapsed}}}),t.isLogin?t._e():s("div",{staticClass:"login"},[s("a-button",{attrs:{type:"primary"},on:{click:t.showReg}},[t._v("注册")]),s("a-button",{staticStyle:{"margin-left":"20px"},on:{click:t.showLog}},[t._v("登录")])],1),t.isLogin?s("div",{staticClass:"login"},[s("a-button",{on:{click:t.logout}},[t._v("退出")])],1):t._e()],1),s("a-layout-content",{style:{margin:"24px 16px",padding:"24px",background:"#fff",minHeight:t.Height+"px"}},["index"==t.showKey&&t.isLogin?s("userInfo"):t._e(),"reply"==t.showKey&&t.isLogin?s("reply"):t._e(),"wechatLogin"==t.showKey&&t.isLogin?s("wechatLogin"):t._e(),t.isLogin?t._e():s("noData")],1)],1)],1)],1)},n=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"userInfo column-center"},[s("div",{staticClass:"card row-center",staticStyle:{position:"relative"}},[s("div",{staticClass:"set-info",staticStyle:{position:"absolute",right:"14px",top:"14px"}},[s("a-button",{on:{click:t.setInfo}},[s("a",{staticClass:"iconfont icon-xiugai"}),t._v("修改个人信息\n      ")])],1),s("div",{staticClass:"left column-center",staticStyle:{width:"40%",margin:"10px 0","border-right":"1px solid rgba(151,151,151,0.3)","align-self":"stretch","justify-content":"space-around"}},[s("div",{staticClass:"head-name row-center",staticStyle:{"align-self":"stretch","padding-left":"20px"}},[s("a-avatar",{staticStyle:{margin:"5px 20px 5px 0"},attrs:{size:72,icon:"user",src:"https://m.360buyimg.com/pop/jfs/t24505/175/1750670450/14994/a3c2d55f/5b697897N21140e81.jpg"}}),s("div",{staticClass:"column-center",staticStyle:{"align-items":"flex-start","flex-grow":"1"}},[s("span",{staticStyle:{"font-size":"22px",color:"#333"}},[t._v(t._s(t.userInfo.id))]),s("span",[t._v(t._s(t.userInfo.name))])])],1),s("div",{staticClass:"info-content",staticStyle:{"align-self":"flex-start","margin-left":"20px"}},[t._v("签名："+t._s(t.userInfo.signature))])]),s("div",{staticClass:"right",staticStyle:{width:"60%"}},[s("div",{staticClass:"info-content signature"},[s("span",{staticClass:"info-content-title"},[t._v("openid：")]),t._v("\n        "+t._s(t.userInfo.openid)+"\n      ")]),s("div",{staticClass:"info-content signature"},[s("span",{staticClass:"info-content-title"},[t._v("微信名：")]),t._v("\n        "+t._s(t.userInfo.wechatid)+"\n      ")]),s("div",{staticClass:"info-content signature"},[s("span",{staticClass:"info-content-title"},[t._v("邮箱：")]),t._v("\n        "+t._s(t.userInfo.email)+"\n      ")]),s("div",{staticClass:"info-content signature"},[s("span",{staticClass:"info-content-title"},[t._v("电话：")]),t._v("\n        "+t._s(t.userInfo.phone)+"\n      ")]),s("div",{staticClass:"info-content signature"},[s("span",{staticClass:"info-content-title",staticStyle:{"line-height":"24px"}},[t._v("性别：")]),"male"==t.userInfo.gender?s("a",{staticClass:"iconfont gender icon-nan",staticStyle:{background:"#1296db"}}):t._e(),"female"==t.userInfo.gender?s("a",{staticClass:"iconfont gender column-center row-center icon-nv",staticStyle:{background:"rgb(238,155,155)"}}):t._e()]),s("div",{staticClass:"info-content"})])]),s("div",{staticClass:"card row-center",staticStyle:{"justify-content":"flex-start"}},[s("div",{staticClass:"content",staticStyle:{background:"linear-gradient(to right, rgb(186, 172, 207), rgb(80, 125, 210))"}},[s("div",{staticClass:"tip"}),s("div",{staticClass:"text"},[t._v("\n        账户资产：\n        "),s("div",{staticStyle:{"font-size":"42px","margin-top":"5px"}},[t._v("￥"+t._s(t.userInfo.pay))])]),s("i",{staticClass:"iconfont icon-jinlingyingcaiwangtubiao62 first"}),s("i",{staticClass:"iconfont icon-jinlingyingcaiwangtubiao62 second"})]),s("div",{staticClass:"content",staticStyle:{background:"linear-gradient(to right, rgb(235,191,133), rgb(222,108,57))"}},[s("div",{staticClass:"tip"}),s("div",{staticClass:"text"},[t._v("\n        已处理会话：\n        "),s("div",{staticStyle:{"font-size":"42px","margin-top":"5px"}},[t._v(t._s(t.userInfo.time)+"次")])]),s("i",{staticClass:"iconfont icon-cishu first"}),s("i",{staticClass:"iconfont icon-cishu second"})])])])},o=[],c={name:"userInfo",props:{msg:String},data:function(){return{userInfo:{id:"--",name:"--",signature:"--",openid:"--",wechatid:"--",email:"--",phone:"--",gender:"male",pay:-2,time:310}}},methods:{setInfo:function(){this.$message.info("正在开发中")},getUserInfo:function(){var t=this;this.ajax({url:t.store.INTERFACE.ACCOUNT_PROFILE,method:"GET",success:function(e){200==e.code&&(console.log(e),t.userInfo.id=e.data.user_id,t.userInfo.wechatid=e.data.wechatname)}})}},mounted:function(){this.getUserInfo()}},r=c,l=(s("5751"),s("2877")),u=Object(l["a"])(r,a,o,!1,null,"80fb3f9e",null),d=u.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"reply"}},[t.dataLoading?s("div",{staticStyle:{"text-align":"center","border-radius":"4px","margin-bottom":"20px","box-shadow":"0 0 10px rgba(151, 151, 151, 0.3)",padding:"30px 50px",margin:"20px 0"},attrs:{id:"dataLoading"}},[s("a-spin")],1):t._e(),t.dataLoading?t._e():s("div",{attrs:{id:"replyData"}},[s("div",{attrs:{id:"dataWrapper"}},[0!=t.list.length?s("div",{staticClass:"title"},[s("span",{staticClass:"title"},[t._v("收到")]),s("span",[t._v("回复")]),s("a-button",{staticStyle:{visibility:"hidden"},attrs:{type:"danger"}},[s("a-icon",{attrs:{type:"minus"}}),t._v("删除\n        ")],1),s("a-button",{staticStyle:{visibility:"hidden","margin-right":"30px"},attrs:{type:"primary"},on:{click:t.save}},[s("a-icon",{attrs:{type:"save"}}),t._v("保存\n        ")],1)],1):t._e(),s("div",{staticClass:"receive-and-resopnse"},[0!=t.list.length?s("div",{attrs:{id:"item-wrapper"}},t._l(t.list,function(e,i){return s("div",{key:i,staticClass:"item"},[s("a-input",{staticStyle:{"margin-right":"30px"},attrs:{placeholder:"在此编辑收到内容",autosize:""},model:{value:e.receive,callback:function(s){t.$set(e,"receive",s)},expression:"item.receive"}}),s("a-input",{staticStyle:{"margin-right":"30px"},attrs:{placeholder:"在此编辑回复内容",autosize:""},model:{value:e.response,callback:function(s){t.$set(e,"response",s)},expression:"item.response"}}),s("a-button",{staticStyle:{"margin-right":"30px"},on:{click:function(s){return t.save(e)}}},[s("a-icon",{attrs:{type:"save"}}),t._v("保存\n            ")],1),s("a-button",{attrs:{type:"danger"},on:{click:function(s){return t.remove(e)}}},[s("a-icon",{attrs:{type:"minus"}}),t._v("删除\n            ")],1)],1)}),0):t._e(),0==t.list.length?s("div",{attrs:{id:"noData"}},[s("i",{staticClass:"iconfont icon-zanwushuju",staticStyle:{"font-size":"126px",color:"rgba(0,0,0,0.1)"}}),s("span",{staticStyle:{color:"#c5c5c5"}},[t._v("暂无数据，请点击添加按钮…")])]):t._e(),s("div",{staticStyle:{display:"flex"}},[s("a-button",{staticClass:"add",on:{click:t.add}},[s("a-icon",{attrs:{type:"plus"}}),t._v("添加\n          ")],1)],1)])])])])},g=[],f={name:"reply",data:function(){return{list:[{receive:"苹果",response:"橘子",id:0},{receive:"西柚",response:"樱桃",id:1}],loading:"",dataLoading:!0}},methods:{add:function(){this.list.push({receive:"",response:"",id:-1})},remove:function(t){var e=this;this.ajax({url:e.store.INTERFACE.DELETE+"/?id="+t.id,method:"GET",success:function(t){200==t.code&&(e.$message.success("删除成功",5),e.show())}})},show:function(){var t=this;this.ajax({url:t.store.INTERFACE.SHOW,method:"GET",success:function(e){200==e.code&&(t.dataLoading=!1,t.list=e.data)}})},save:function(t){var e=this;-1==t.id&&this.ajax({url:e.store.INTERFACE.ADD,method:"POST",data:{request:t.receive,response:t.response},success:function(t){200==t.code&&(e.$message.success("添加成功",5),console.log(t),e.show())}}),-1!==t.id&&this.ajax({url:e.store.INTERFACE.UPDATE+"/?id="+t.id,method:"POST",data:{request:t.receive,response:t.response},success:function(t){200==t.code&&(e.show(),e.$message.success("更新成功",5))}})}},mounted:function(){this.show()}},h=f,v=(s("db12"),Object(l["a"])(h,p,g,!1,null,null,null)),m=v.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"text-align":"center"}},["loading"==t.status?s("div",[s("a-spin",{attrs:{size:"large"}}),s("div",{staticClass:"top-margin"},[t._v("正在加载…")])],1):t._e(),"fail"==t.status?s("div",[s("i",{staticClass:"iconfont icon-tupianjiazaishibai",staticStyle:{"font-size":"68px",color:"rgba(0,0,0,0.2)"}}),s("div",{staticClass:"top-margin"},[t._v("加载失败咯,请刷新重试")])]):t._e(),"success"==t.status?s("div",[s("a-popover",{attrs:{title:"",placement:"top"}},[s("template",{slot:"content"},[s("img",{attrs:{src:t.src,width:"230px",alt:"微信登陆二维码"}}),s("p")]),s("div",{staticStyle:{height:"140px"}},[s("img",{attrs:{src:t.src,width:"100px",alt:"微信登陆二维码"}})])],2),s("div",{staticClass:"top-margin"},[t._v("微信扫码登录,即可实现自动回复~")])],1):t._e()])},_=[],x={name:"wechatLogin",data:function(){return{src:"",status:"loading"}},methods:{getQRcode:function(){var t=this;this.ajax({url:t.store.INTERFACE.WECHAT_LOGIN,method:"GET",success:function(e){200==e.code?(t.src=t.store.INTERFACE.QRCODE+e.data.pid+".png",t.status="success"):(t.$message.error(e.message,5),t.status="fail")}})}},mounted:function(){this.getQRcode()}},b=x,C=(s("6c67"),Object(l["a"])(b,y,_,!1,null,null,null)),w=C.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"},attrs:{id:"noData"}},[i("img",{staticStyle:{height:"100px",width:"100px",margin:"20px auto"},attrs:{src:s("4560"),alt:"暂无数据"}}),i("div",{staticStyle:{margin:"40px auto 100px",color:"rgba(91,91,91,.3)"}},[t._v("您还未登录…")])])}],E={name:"noData",data:function(){return{}}},k=E,L=(s("ecae"),Object(l["a"])(k,S,I,!1,null,null,null)),j=L.exports,T={name:"home",data:function(){return{isLogin:!1,collapsed:!1,showKey:"index",logVisible:!1,logloading:!1,regVisible:!1,regloading:!1}},components:{noData:j,userInfo:d,reply:m,wechatLogin:w},computed:{Height:function(){return document.body.clientHeight-64-48-1}},methods:{chooseIndex:function(t){this.showKey=t},showLog:function(){this.$router.push({name:"account",params:{status:"login"}})},showReg:function(){this.$router.push({name:"account",params:{status:"register"}})},logout:function(){var t=this;this.ajax({url:t.store.INTERFACE.LOGOUT,method:"GET",headers:{"Content-Type":"application/x-www-form-urlencode; charset=utf-8;"},success:function(e){200==e.code&&(localStorage.setItem("loginStatue","fail"),t.$router.go(0))}})},handleCancel:function(t){this.logVisible=!1,this.regVisible=!1}},mounted:function(){"ok"===localStorage.getItem("loginStatue")?this.isLogin=!0:this.isLogin=!1,console.log(this.Height)}},$=T,O=(s("cccb"),Object(l["a"])($,i,n,!1,null,null,null));e["default"]=O.exports},cccb:function(t,e,s){"use strict";var i=s("d563"),n=s.n(i);n.a},d563:function(t,e,s){},db12:function(t,e,s){"use strict";var i=s("f5fe"),n=s.n(i);n.a},ecae:function(t,e,s){"use strict";var i=s("8887"),n=s.n(i);n.a},f5fe:function(t,e,s){},f820:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[s("h1",[t._v("This is an about page")])])}],a=s("2877"),o={},c=Object(a["a"])(o,i,n,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=about.a501be0c.js.map