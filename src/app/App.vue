<template>
	<div>
		<router-view></router-view>
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
