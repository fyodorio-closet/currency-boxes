import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import CurrencyListItem from '@/components/CurrencyListItem.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

xdescribe('CurrencyListItem', () => {
	it('changes item class depending on input props', () => {})

	it('emits updateBox action when toggleSelection method is called', () => {})
})
