import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button } from 'vant' // 前端 UI 框架
import 'lib-flexible/flexible' // 移动端分辨率适配

Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
