import './index.scss';
import PButton from './components/p-button/p-button-export.js'
import PLink from './components/p-link/p-link-export.js'
import PButtonGroup from './components/p-button-group/p-button-group-export.js'
import PInput from './components/p-input/p-input-export.js'
const componentsArr = [
	PButton,
	PLink,
	PButtonGroup,
	PInput
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
	PButtonGroup,
	PInput
}
export {
	PButton,
	PLink,
	PButtonGroup,
	PInput
}