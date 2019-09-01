import { shallowMount } from '@vue/test-utils'
import CurrencyListItem from '@/components/CurrencyListItem.vue'

describe('CurrencyListItem', () => {
	it('changes item class depending on input props', () => {
		const wrapper = shallowMount(CurrencyListItem, {
			propsData: {
				currencyList: [
					{
						id: 'rub',
						name: 'RUB',
						isSelected: true
					}
				],
				isItemOfFeaturedList: true
			}
		})

		expect(
			wrapper.find('.currency-list-item_featured').exists()
		).toBeTruthy()
	})
})
