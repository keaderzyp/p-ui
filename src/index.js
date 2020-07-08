import Vue from 'vue'
import App from './app/App.vue'
import PUI from './p-ui.js'

Vue.use(PUI);
new Vue({
	render: h => h(App)
}).$mount('#app')