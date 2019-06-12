import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import "ant-design-vue/dist/antd.css"
import global from './global'

Vue.use(Antd)
Vue.mixin(global)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
