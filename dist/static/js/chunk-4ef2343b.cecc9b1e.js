(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ef2343b"],{"4eaf":function(t,e,s){"use strict";var r=s("ca3f"),i=s.n(r);i.a},b5c4:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"login"}},[t._m(0),"login"==t.status?r("div",{staticStyle:{width:"350px",height:"270px",position:"absolute",background:"rgba(0,0,0,0.2)",right:"100px",top:"200px",padding:"25px","text-align":"center"}},[r("div",{staticStyle:{color:"white","font-size":"22px"}},[t._v("欢迎登陆")]),r("a-input",{staticStyle:{margin:"10px 0"},attrs:{placeholder:"请输入用户名"},model:{value:t.logUsername,callback:function(e){t.logUsername=e},expression:"logUsername"}},[r("a-icon",{attrs:{slot:"prefix",type:"user"},slot:"prefix"}),t.logUsername?r("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:function(e){return t.empty("log",1)}},slot:"suffix"}):t._e()],1),r("a-input",{staticStyle:{margin:"10px 0"},attrs:{placeholder:"请输入密码",type:"password"},model:{value:t.logPassword,callback:function(e){t.logPassword=e},expression:"logPassword"}},[r("a-icon",{attrs:{slot:"prefix",type:"key"},slot:"prefix"}),t.logPassword?r("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:function(e){return t.empty("log",2)}},slot:"suffix"}):t._e()],1),r("div",{staticStyle:{color:"white"}},[t._v("\n      还没有账号？\n      "),r("span",{staticStyle:{"text-decoration":"underline"},on:{click:function(e){t.status="register"}}},[t._v("快去注册")]),t._v("！\n    ")]),r("div",{staticClass:"center",staticStyle:{background:"rgb(0,147,221)",height:"40px",margin:"20px 0 0 0","border-radius":"5px",color:"white"},on:{click:t.logSubmit}},[t._v("登录")])],1):t._e(),"register"==t.status?r("div",{staticStyle:{background:"rgba(0,0,0,0.2)",width:"550px",height:"370px",position:"absolute","text-align":"center",padding:"25px",right:"100px",top:"200px",display:"flex","flex-direction":"row","align-items":"center"}},[r("a-popover",{attrs:{title:"",placement:"left"}},[r("template",{slot:"content"},[r("img",{staticStyle:{margin:"20px"},attrs:{width:"230px;",src:s("c4a1"),alt:"公众号二维码"}}),r("p",[t._v("微信扫码关注公众号，会向您下发一条用户id，")]),r("p",[t._v("请将其完整输入至右侧，以进行下一步注册")])]),r("div",{staticStyle:{height:"140px"}},[r("img",{staticStyle:{margin:"20px"},attrs:{width:"100px;",src:s("c4a1"),alt:"公众号二维码"}})])],2),r("div",{staticStyle:{width:"350px"}},[r("div",{staticStyle:{color:"white","font-size":"22px"}},[t._v("欢迎注册")]),r("a-input",{staticStyle:{margin:"10px 0"},attrs:{placeholder:"请输入用户名"},model:{value:t.regUsername,callback:function(e){t.regUsername=e},expression:"regUsername"}},[r("a-icon",{attrs:{slot:"prefix",type:"user"},slot:"prefix"}),t.regUsername?r("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:function(e){return t.empty("reg",2)}},slot:"suffix"}):t._e()],1),r("a-input",{staticStyle:{margin:"10px 0"},attrs:{placeholder:"关注左侧公众号获取id"},model:{value:t.regUserId,callback:function(e){t.regUserId=e},expression:"regUserId"}},[r("a-icon",{attrs:{slot:"prefix",type:"bulb"},slot:"prefix"}),t.regUserId?r("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:function(e){return t.empty("reg",1)}},slot:"suffix"}):t._e()],1),r("a-input",{staticStyle:{margin:"10px 0"},attrs:{placeholder:"请输入密码",type:"password"},model:{value:t.regPassword,callback:function(e){t.regPassword=e},expression:"regPassword"}},[r("a-icon",{attrs:{slot:"prefix",type:"key"},slot:"prefix"}),t.regPassword?r("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:function(e){return t.empty("reg",3)}},slot:"suffix"}):t._e()],1),r("a-input",{staticStyle:{margin:"10px 0"},attrs:{placeholder:"请确认密码",type:"password"},model:{value:t.regPassword2,callback:function(e){t.regPassword2=e},expression:"regPassword2"}},[r("a-icon",{attrs:{slot:"prefix",type:"key"},slot:"prefix"}),t.regPassword2?r("a-icon",{attrs:{slot:"suffix",type:"close-circle"},on:{click:function(e){return t.empty("reg",4)}},slot:"suffix"}):t._e()],1),r("div",{staticStyle:{color:"white"}},[t._v("\n        已有账号？\n        "),r("span",{staticStyle:{"text-decoration":"underline"},on:{click:function(e){t.status="login"}}},[t._v("快去登录")]),t._v("！\n      ")]),r("div",{staticClass:"center",staticStyle:{background:"rgb(0,147,221)",height:"40px",margin:"20px 0 0 0","border-radius":"5px",color:"white"},on:{click:t.regSubmit}},[t._v("注册")])],1)],1):t._e(),r("div",{staticStyle:{"flex-grow":"1"}})])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{display:"flex","flex-direction":"row","align-items":"center",width:"100%",height:"100px",background:"rgb(179,140,145)"}},[r("div",{staticStyle:{"flex-grow":"1"}}),r("div",{staticStyle:{}},[r("img",{attrs:{src:s("b640"),width:"100px",height:"100px",alt:"logo"}})]),r("div",{staticStyle:{color:"white","margin-left":"30px","font-size":"26px"}},[t._v("金橙助手")]),r("div",{staticStyle:{"flex-grow":"5"}})])}],a={name:"login",data:function(){return{status:"login",logUsername:"",logPassword:"",regUserId:"",regUsername:"",regPassword:"",regPassword2:"",regEmail:""}},methods:{regSubmit:function(t){if(this.regUserId.trim()&&this.regUsername.trim()&&this.regPassword.trim()&&this.regPassword2.trim())if(this.regPassword===this.regPassword2){this.regloading=!0;var e=this;this.ajax({url:e.store.INTERFACE.REGISTER,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencode; charset=utf-8;"},data:{username:e.regUsername,password:e.regPassword,last_name:e.regUserId},success:function(t){200==t.code&&e.$message.info("注册成功，请登录",5)}})}else this.$message.error("用户密码与确认密码需一致！",5);else this.$message.error("请输入完整用户信息！",5)},logSubmit:function(t){if(this.logUsername.trim()||this.logPassword.trim()){var e=this;this.ajax({url:e.store.INTERFACE.LOGIN,method:"POST",data:{username:e.logUsername,password:e.logPassword,reply:{"苹果":"橘子","樱桃":"西柚"}},success:function(t){200==t.code?(localStorage.setItem("loginStatue","ok"),e.$router.go(-1)):e.$message.info(t.message)}})}else this.$message.error("请输入完整用户信息！",5)},empty:function(t,e){if("log"==t)switch(e){case 1:this.logUsername="";break;case 2:this.logPassword="";break}if("reg"==t)switch(e){case 1:this.regUserId="";break;case 2:this.regUsername="";break;case 3:this.regPassword="";break;case 4:this.regPassword2="";break;case 5:this.regEmail="";break}}},mounted:function(){this.$route.params.status&&(this.status=this.$route.params.status)}},o=a,l=(s("4eaf"),s("2877")),n=Object(l["a"])(o,r,i,!1,null,null,null);e["default"]=n.exports},b640:function(t,e,s){t.exports=s.p+"static/img/logo.2830242e.jpg"},c4a1:function(t,e,s){t.exports=s.p+"static/img/QRcode.fb8a4a65.jpg"},ca3f:function(t,e,s){}}]);
//# sourceMappingURL=chunk-4ef2343b.cecc9b1e.js.map