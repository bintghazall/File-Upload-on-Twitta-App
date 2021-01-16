import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.component('footerElement', () => /* webpackChunkName: "footer" */ import('@/components/Footer.vue'))

import router from './router/routes'
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
