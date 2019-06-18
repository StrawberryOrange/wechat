import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import "ant-design-vue/dist/antd.css"
import mixin from './methods'
import global from './global'
import store from "./store"

Vue.use(Antd)
Vue.mixin(global)

Vue.prototype.store = store

Vue.use(mixin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
