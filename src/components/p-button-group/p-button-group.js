import './p-button-group.scss';
export default{
	name:'p-button-group',
	props:{
		size:{
			required:false,
			type:String,
			default:'default'
		}
	},
	render(h){
		let _this = this;
		let children = this.$slots.default.filter(item => {
			return item.tag
		})
		return h('div',{
			class:'p-button-group',
			props:{
				size:this.size
			}
		},children.map(item=>{
			try{
				item.componentOptions.propsData.size = _this.size
			}catch(e){
				throw(e)
			}
			return item;
		}))
	}
}