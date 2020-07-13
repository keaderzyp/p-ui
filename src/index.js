import Vue from 'vue'
import App from './app/App.vue'
import PUI from './p-ui.js'
import router from './router/index.js'
Vue.use(PUI);
let vuex = Vue.observable({
	state:{
		hello:'hello'
	},
	getters:{
		
	}
})
Vue.prototype.$store = vuex;
new Vue({
	render: h => h(App),
	router
}).$mount('#app')