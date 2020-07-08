import './p-button.scss'
export default {
	name:'p-button',
	props:{
		type:{
			required:false,
			type:String,
			default:'default'
		},
		size:{
			required:false,
			type:String,
			default:'default'
		},
		loading:{
			required:false,
			type:Boolean,
			default:false
		},
		icon:{
			requird:false,
			type:String,
			default:''
		},
		"native-type":{
			requird:false,
			type:String,
			default:'button'
		},
		plain:{
			required:false,
			type:Boolean,
			default:false
		}
	},
	render(h){
		let _this = this;
		let renderIcon = () => {
			if(this.loading){
				return h('i',{
					class:'fa fa-spinner p-btn-loading'
				})
			}else{
				if(this.$slots.icon){
					return this.$slots.icon;
				}else if(this.icon.trim().length>0){
					return h('i',{
						class:`fa ${this.icon}`
					});
				}else{
					return null
				}
			}
		}
		return h('button',{
			class:`p-button p-button-${this.type} p-button-size-${this.size} ${this.plain?'is-plain':''}`,
			attrs:{
				type:this.nativeType
			},
			on:{
				click(){
					_this.$emit('click',...arguments)
				}
			}
		},[
			renderIcon(),h('span',{},this.$slots.default)
		])
	}
}