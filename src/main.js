import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue();

Vue.use(require('vue-moment'));

Vue.filter('upperCase', value => value.toUpperCase())

new Vue({
  render: h => h(App),
}).$mount('#app')
