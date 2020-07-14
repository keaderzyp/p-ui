import './p-input.scss';
export default{
	name:'p-input',
	props:{
		resize:{
			type:String,
			required:false,
			default:'vertical'
		},
		name:{
			type:String,
			required:false,
			default:''
		},
		max:{
			type:Number,
			required:false,
			default:-1
		},
		minlength:{
			type:Number,
			required:false,
			default:-1
		},
		maxlength:{
			type:Number,
			required:false,
			default:-1
		},
		min:{
			type:Number,
			required:false,
			default:-1
		},
		step:{
			type:Number,
			required:false,
			default:-1
		},
		type:{
			type:String,
			required:false,
			default:'text'
		},
		value:{
			type:[String,Number],
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
		},
		size:{
			required:false,
			type:String,
			default:'default'
		},
		'prefix-icon':{
			required:false,
			type:String,
			default:''
		},
		'suffix-icon':{
			required:false,
			type:String,
			default:''
		},
		autofocus:{
			required:false,
			type:Boolean,
			default:false
		},
		rows:{
			required:false,
			type:Number,
			default:2
		},
		autosize:{
			reuqired:false,
			type:[Object,Boolean],
			default(){
				return false
			}
		}
	},
	data(){
		return{
			inputStr:'',
			focused:false,
			appended:false,
			prepended:false,
			renderRows:0,
		}
	},
	model:{
		event:'cc',
		prop:'value'
	},
	created(){
		this.renderRows = this.rows
	},
	mounted(){
		if(this.autosize){
			let rows = 0;
			try{
				rows = this.$refs.textarea.textContent.split('\n').length
			}catch(e){
				rows = 1
				throw(e)
			}
			this.$refs.textarea.rows = rows;
			this.renderRows = rows;
		}
	},
	render(h){
		let _this = this;
		
		let renderInput = () => {
			
			let cleared = false;
			if(_this.clearable&&_this.inputStr.length>0){
				cleared = true;
			}else{
				cleared = false;
			}
			if(_this.prefixIcon.trim().length>0){
				_this.prepended = true;
			}else{
				_this.prepended = false;
			}
			if(_this.suffixIcon.trim().length>0){
				_this.appended = true;
			}else{
				_this.appended = false;
			}
			
			return [
				_this.prepended?h('i',{class:`fa ${_this.prefixIcon} p-input-prefix`}):undefined,
				h('input',{
					class:`p-input--content ${_this.disabled?'is-disabled':''} ${_this.prepended?'p-input-prepended':''} ${_this.appended||cleared?'p-input-appended':''} p-input-size--${_this.size}`,
					attrs:{
						placeholder:_this.placeholder,
						disabled:_this.disabled?'disabled':undefined,
						readonly:_this.readonly?'readonly':undefined,
						autofocus:_this.autofocus?'autofocus':undefined,
						type:_this.type,
						value:_this.value,
						name:_this.name,
						max:_this.max>-1?_this.max:undefined,
						min:_this.min>-1?_this.min:undefined,
						step:_this.step>-1?_this.step:undefined,
						maxlength:_this.maxlength>-1?_this.maxlength:undefined,
						minlength:_this.minlength>-1?_this.minlength:undefined,
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
				},_this.value),
				cleared?h('i',{
					class:`fa fa-times-circle-o p-input-clear`,
					on:{
						click(){
							_this.$refs.input.value = '';
							_this.inputStr = '';
							_this.$emit('cc','')
							_this.$emit('clear')
						}
					}
				}):_this.appended?h('i',{
					class:`fa ${_this.suffixIcon} p-input-suffix`
				}):undefined
			]
		}
		
		let renderTextarea = () => {
			return [h('textarea',{
				class:`p-textarea--content ${_this.disabled?'is-disabled':''} p-textarea-resize-${_this.resize} p-textarea-size--${_this.size}`,
				attrs:{
					rows:_this.renderRows,
					placeholder:_this.placeholder,
					disabled:_this.disabled?'disabled':undefined,
					readonly:_this.readonly?'readonly':undefined,
					autofocus:_this.autofocus?'autofocus':undefined,
					type:_this.type,
					name:_this.name,
					maxlength:_this.maxlength>-1?_this.maxlength:undefined,
					minlength:_this.minlength>-1?_this.minlength:undefined,
				},
				ref:'textarea',
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
					load(){
						console.log(_this)
					}
				}
			},_this.value)]
		}
		let renderTarget = h('div',{
			class:`${this.type!='textarea'?'p-input':'p-textarea'} p-${this.type!='textarea'?'input':'textarea'}-${_this.size}`
		},this.type!='textarea'?renderInput():renderTextarea());
		if(this.type=='text'&&(this.$slots.prepend||this.$slots.append)){
			let prependObj = this.$slots.prepend?this.$slots.prepend[0]:undefined;
			let renderPrepend
			if(prependObj&&prependObj.tag){
				prependObj.componentOptions.propsData.size = _this.size
				renderPrepend = [prependObj]
			}else{
				renderPrepend = h('div',{
					class:`p-input--prepend p-input-size--${_this.size}`
				},[prependObj])
			}
			
			let appendObj = this.$slots.append?this.$slots.append[0]:undefined;
			let renderAppend
			if(appendObj&&appendObj.tag){
				appendObj.componentOptions.propsData.size = _this.size
				renderAppend = [appendObj]
			}else{
				renderAppend = h('div',{
					class:`p-input--append p-input-size--${_this.size}`
				},[appendObj])
			}
			return h('div',{
				class:`p-input-pend ${this.$slots.prepend?'p-input-prepend':''} ${this.$slots.append?'p-input-append':''} ${this.$slots.append&&this.$slots.prepend?'both-pend':''}`
			},[
				this.$slots.prepend?
				renderPrepend:undefined,
				renderTarget,
				this.$slots.append?
				renderAppend:undefined,
			])
		}else{
			return renderTarget
		}
	}
}