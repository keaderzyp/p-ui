import './index.scss';
import PButton from './components/p-button/p-button-export.js'
import PLink from './components/p-link/p-link-export.js'
const componentsArr = [
	PButton,
	PLink
]
const install = Vue => {
	componentsArr.forEach(component => {
		Vue.component(component.name,component)
	})
}
export default {
	install,
	PButton,
	PLink
}
export {
	PButton,
	PLink
}