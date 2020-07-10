import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../page/index.vue';
import Button from '../page/button.vue';
import Link from '../page/link.vue';
import Input from '../page/input.vue';
Vue.use(VueRouter);
const routes = [
	{
		path:'/',
		component:Index,
		name:'index'
	},
	{
		path:'/button',
		component:Button,
		name:'button'
	},
	{
		path:'/link',
		component:Link,
		name:'link'
	},
	{
		path:'/input',
		component:Input,
		name:'input'
	}
]
const router = new VueRouter({
	mode:'hash',
	routes
})
export default router