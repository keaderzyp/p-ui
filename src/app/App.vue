<template>
	<div>
		<p-button type="primary" :loading="loading" @click="handleClick(123)">
			<template v-slot:icon>
				<i class="fa fa-address-book-o" aria-hidden="true"></i>
			</template>123
		</p-button>
		<p-button type="text">aaa</p-button>
		<p-button type="success" :loading="loading" icon="fa-address-book-o">123</p-button>
		<p-button type="danger" icon="fa-address-book-o">123</p-button>
		<p-button type="warning">123</p-button>
		<p-button type="info">123</p-button>
		<p-button type="default">123</p-button>
		<i class="fa fa-address-book-o" aria-hidden="true"></i>
		<br>
		<p-button type="primary" size="default">123</p-button>
		<p-button type="success" size="medium">123</p-button>
		<p-button type="danger" size="small">123</p-button>
		<p-button type="default" size="mini">123</p-button>
		<br>
		<p-button type="primary" plain>
			<template v-slot:icon>
				<i class="fa fa-address-book-o" aria-hidden="true"></i>
			</template>123
		</p-button>
		<p-button type="text" plain>aaa</p-button>
		<p-button type="success" plain icon="fa-address-book-o">123</p-button>
		<p-button type="danger" plain icon="fa-address-book-o">123</p-button>
		<p-button type="warning" plain>123</p-button>
		<p-button type="info" plain>123</p-button>
		<p-button type="default" plain>123</p-button>
	</div>
</template>

<script>
	import {PButton} from '../p-ui.js'
	export default{
		components:{
			PButton
		},
		data(){
			return {
				loading:false
			}
		},
		methods:{
			handleClick(arg){
				console.log(arg)
				this.loading = !this.loading;
			}
		}
	}
</script>

<style>
</style>
