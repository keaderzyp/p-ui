<template>
	<div>
		<p-button type="primary" :loading="loading"  @click="handleClick(123)">
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
		<br>
		<p-button type="primary" plain round >
			<template v-slot:icon>
				<i class="fa fa-address-book-o" aria-hidden="true"></i>
			</template>123
		</p-button>
		<p-button type="text" plain round>aaa</p-button>
		<p-button type="success" plain round icon="fa-address-book-o">123</p-button>
		<p-button type="danger" plain round icon="fa-address-book-o">123</p-button>
		<p-button type="warning" plain round>123</p-button>
		<p-button type="info" plain round>123</p-button>
		<p-button type="default" plain round>123</p-button>
		
		<br>
		<p-button type="primary"  disabled>
			<template v-slot:icon>
				<i class="fa fa-address-book-o" aria-hidden="true"></i>
			</template>123
		</p-button>
		<p-button type="text"  disabled>aaa</p-button>
		<p-button type="success"  disabled icon="fa-address-book-o">123</p-button>
		<p-button type="danger"  disabled icon="fa-address-book-o">123</p-button>
		<p-button type="warning"  disabled>123</p-button>
		<p-button type="info"  disabled>123</p-button>
		<p-button type="default"  disabled>123</p-button>
		<br>
		<p-button type="primary" plain disabled round >
			<template v-slot:icon>
				<i class="fa fa-address-book-o" aria-hidden="true"></i>
			</template>123
		</p-button>
		<p-button type="text" plain disabled round>aaa</p-button>
		<p-button type="success" plain disabled round icon="fa-address-book-o">123</p-button>
		<p-button type="danger" plain disabled round icon="fa-address-book-o">123</p-button>
		<p-button type="warning" plain disabled round>123</p-button>
		<p-button type="info" plain disabled round>123</p-button>
		<p-button type="default" plain disabled round>123</p-button>
		
		<br>
		<p-button type="primary" icon="fa-address-book-o" circle size="default">123</p-button>
		<p-button type="success" icon="fa-address-book-o" circle size="medium">123</p-button>
		<p-button type="danger" icon="fa-address-book-o" circle size="small">123</p-button>
		<p-button type="default" icon="fa-address-book-o" circle size="mini">123</p-button>
		<br>
		<p-button type="primary" circle loading plain>
			<template v-slot:icon>
				<i class="fa fa-address-book-o" aria-hidden="true"></i>
			</template>123
		</p-button>
		<p-button type="text" circle plain>aaa</p-button>
		<p-button type="success" circle plain icon="fa-address-book-o">123</p-button>
		<p-button type="danger" circle plain icon="fa-address-book-o">123</p-button>
		<p-button type="warning" circle plain>123</p-button>
		<p-button type="info" circle plain>123</p-button>
		<p-button type="default" circle plain>123</p-button>
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
