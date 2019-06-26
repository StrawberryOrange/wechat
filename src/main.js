import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import "ant-design-vue/dist/antd.css"
import global from './global'
import store from "./store"

Vue.use(Antd)
Vue.mixin(global)

Vue.prototype.store = store

// 本地开发时 需要将store.js地址换成 / api，
// 作用是启用vue自带的代理，将网络请求更换为同源
// 具体配置在vue.config.js

Vue.config.productionTip = false

var cookies = document.cookie.split(';');
for (var i = 0; i < cookies.length; i++) {
  var cookie = cookies[i];
  // console.log(cookie)
  var arr = cookie.split('=');
  // console.log(arr[0] + ' ' + arr[1])
  // if (arr[0] == cookieName) {
  //   cookieValue = arr[1];
  //   break;
  // }
}
// console.log(document.cookie)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
