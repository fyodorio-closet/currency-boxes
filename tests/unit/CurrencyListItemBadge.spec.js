import { shallowMount } from '@vue/test-utils'
import CurrencyListItemBadge from '@/components/CurrencyListItemBadge.vue'

describe('CurrencyListItemBadge', () => {
	it('calls removing method when clicked', () => {
		const wrapper = shallowMount(CurrencyListItemBadge, {
			propsData: {
				removeItem: jest.fn()
			}
		})
		wrapper.find('.currency-list-item-badge').trigger('click')

		expect(wrapper.props().removeItem).toHaveBeenCalled()
	})
})
