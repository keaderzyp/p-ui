import './index.scss';
import PButton from './components/p-button/p-button-export.js'
const componentsArr = [
	PButton
]
const install = Vue => {
	componentsArr.forEach(component => {
		Vue.component(component.name,component)
	})
}
export default {
	install,
	PButton
}
export {
	PButton
}