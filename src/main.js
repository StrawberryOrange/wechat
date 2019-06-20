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


Vue.config.productionTip = false

var cookies = document.cookie.split(';');
for (var i = 0; i < cookies.length; i++) {
  var cookie = cookies[i];
  // console.log(cookie)
  var arr = cookie.split('=');
  console.log(arr[0] + ' ' + arr[1])
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
