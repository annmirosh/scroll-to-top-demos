import Vue from 'vue'
import App from './App.vue'

import { defineCustomElements } from 'scroll-to-top-btn/dist/loader';
Vue.config.ignoredElements = [/scroll-to-top-btn/];
defineCustomElements(window);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
