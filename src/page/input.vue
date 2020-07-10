<template>
	<div>
		<div>
			<p-link icon="fa-arrow-left" type="primary" router="/">返回</p-link>
		</div>
		<div>
			<p-input @input="handleInput" v-model="str" clearable placeholder="请输入"></p-input>
			<div>
				{{str}}
			</div>
		</div>
		<div>
			<p-input @input="handleInput" disabled v-model="str" placeholder="请输入"></p-input>
		</div>
		<div>
			<p-input placeholder="请输入" clearable ></p-input>
			<p-input placeholder="请输入" clearable size="medium"></p-input>
			<p-input placeholder="请输入" clearable size="small"></p-input>
			<p-input placeholder="请输入" clearable size="mini"></p-input>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				str:''
			}
		},
		methods:{
			handleInput(res){
				console.log(res)
			}
		}
	}
</script>

<style>
</style>
