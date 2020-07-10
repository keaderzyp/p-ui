import './index.scss';
import PButton from './components/p-button/p-button-export.js'
import PLink from './components/p-link/p-link-export.js'
import PButtonGroup from './components/p-button-group/p-button-group-export.js'
const componentsArr = [
	PButton,
	PLink,
	PButtonGroup
]
const install = Vue => {
	componentsArr.forEach(component => {
		Vue.component(component.name,component)
	})
}
export default {
	install,
	PButton,
	PLink,
	PButtonGroup
}
export {
	PButton,
	PLink,
	PButtonGroup
}