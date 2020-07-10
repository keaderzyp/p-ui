import './p-input.scss';
export default{
	name:'p-input',
	props:{
		value:{
			type:String,
			required:false,
			default:''
		},
		placeholder:{
			type:String,
			required:false,
			default:''
		},
		disabled:{
			required:false,
			type:Boolean,
			default:false
		},
		readonly:{
			required:false,
			type:Boolean,
			default:false
		},
		clearable:{
			required:false,
			type:Boolean,
			default:false
		}
	},
	data(){
		return{
			inputStr:'',
			focused:false,
		}
	},
	watch:{
		value(v){
			console.log(v)
		}
	},
	model:{
		event:'cc',
		prop:'value'
	},
	render(h){
		let _this = this;
		return h('div',{
			class:'p-input'
		},[
			this.clearable&&this.value.length>0&&h('i',{
				class:'fa fa-times-circle-o p-input-clear',
				on:{
					click(){
						_this.$refs.input.value = '';
						_this.$emit('cc','')
					}
				}
			}),
			h('input',{
				class:`p-input--content ${this.disabled?'is-disabled':''}`,
				attrs:{
					placeholder:this.placeholder,
					disabled:this.disabled?'disabled':undefined,
					readonly:this.readonly?'readonly':undefined
				},
				ref:'input',
				on:{
					blur(){
						_this.$emit('blur',arguments)
					},
					focus(){
						_this.$emit('focus',arguments)
					},
					change(){
						_this.inputStr = arguments[0].target.value
						_this.$emit('cc',_this.inputStr)
						_this.$emit('change',_this.inputStr)
					},
					input(){
						_this.inputStr = arguments[0].target.value
						_this.$emit('cc',_this.inputStr)
						_this.$emit('input',_this.inputStr)
					},
				},
			})
		])
	}
}