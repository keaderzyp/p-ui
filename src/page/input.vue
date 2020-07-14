<template>
	<div>
		<div>
			<p-link icon="fa-arrow-left" type="primary" router="/">返回</p-link>
		</div>
		<div>
			<p-input @input="handleInput" :maxlength="3" v-model="str" @clear="handleClear" clearable placeholder="请输入"></p-input>
			<div>
				{{str}}
			</div>
		</div>
		<div>
			<p-input type="number" v-model="num" clearable :step="10" :min="0" :max="100"></p-input>
			{{num}}
			<p-input @input="handleInput" disabled v-model="str" placeholder="请输入"></p-input>
		</div>
		<div>
			<p-input placeholder="请输入" @clear="handleClear" clearable ></p-input>
			<p-input placeholder="请输入" type="password" clearable size="medium"></p-input>
			<p-input placeholder="请输入" clearable size="small"></p-input>
			<p-input placeholder="请输入" clearable size="mini"></p-input>
		</div>
		<div>
			<p-input prefix-icon="fa-user" clearable autofocus suffix-icon="fa-user"></p-input>
		</div>
		<div style="width: 50%;">
			<p-input type="textarea" disabled></p-input>
			<p-input type="textarea" autosize v-model="str1" resize="both" placeholder="请输入"></p-input>
			{{str1}}
			<p-input type="textarea" size="medium" placeholder="请输入"></p-input>
			<p-input type="textarea" size="small" placeholder="请输入"></p-input>
			<p-input type="textarea" :rows="4" size="mini" placeholder="请输入"></p-input>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				str:'123',
				str1:`sfjlsdjflksdjklf
				sdfjklsjdflsdf
				sdfjklsjdklf
				sdfjklsdjfklsd
				sdfjksldf`,
				num:1
			}
		},
		methods:{
			handleInput(res){
				console.log(res)
			},
			handleClear(){
				console.log('cleared')
			}
		}
	}
</script>

<style>
</style>
