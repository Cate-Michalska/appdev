import Vue from 'vue'
import App from './App.vue'
import Chat from './components/VueQuickChat.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
