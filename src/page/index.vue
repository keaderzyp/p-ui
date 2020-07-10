<template>
	<div>
		<ol>
			<li>
				<p-link router="/button" >按钮</p-link>
			</li>
			<li>
				<p-link router="/link">链接</p-link>
			</li>
		</ol>
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			handleRouteTo(path){
				this.$router.push(path)
			}
		}
	}
</script>

<style>
</style>
