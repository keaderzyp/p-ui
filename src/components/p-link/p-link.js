import './p-link.scss';

export default {
	name:'p-link',
	props:{
		type:{
			required:false,
			type:String,
			default:'default'
		},
		underline:{
			required:false,
			type:Boolean,
			default:true
		},
		href:{
			required:false,
			type:String,
			default:''
		},
		router:{
			required:false,
			type:String,
			default:''
		},
		'router-params':{
			required:false,
			type:Object,
			default(){
				return {}
			}
		},
		disabled:{
			required:false,
			type:Boolean,
			default:false
		},
		icon:{
			requird:false,
			type:String,
			default:''
		}
	},
	render(h){
		let _this = this;
		return h('a',{
			class:`p-link p-link-${this.type} ${!this.underline?'un-underline':''} ${this.disabled?'is-disabled':''}`,
			on:{
				click(){
					if(!_this.disabled){
						if(_this.router.trim().length>0){
							if(_this.$router){
								if(Object.keys(_this.routerParams).length>0){
									_this.$router.push({name:_this.router,params:_this.routerParams})
								}else{
									_this.$router.push(_this.router)
								}
							}else{
								throw('当前项目无路由组件，请引入vue-router')
							}
							
						}else{
							_this.$emit('click',arguments);
						}
					}
				}
			},
			attrs:{
				href:this.disabled?undefined:this.href.trim().length>0?this.href:undefined,
				disabled:this.disabled?'disabled':undefined
			},
			
		},[
			this.icon.trim().length>0?
			h('i',{class:`fa ${this.icon}`}):undefined,
			h('span',{},this.$slots.default)
		])
	}
}