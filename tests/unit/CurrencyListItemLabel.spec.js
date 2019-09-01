import { shallowMount } from '@vue/test-utils'
import CurrencyListItemLabel from '@/components/CurrencyListItemLabel.vue'

describe('CurrencyListItemLabel', () => {
	it('renders currency in lower case if it is in featured list', () => {
		const wrapper = shallowMount(CurrencyListItemLabel, {
			propsData: {
				currencyListItem: {
					id: 'rub',
					name: 'RUB',
					isSelected: true
				},
				isInteractive: false,
				toggleSelection: jest.fn()
			}
		})

		expect(wrapper.find('.currency-list-item-label_display').text()).toBe(
			'rub'
		)
	})

	it('renders checkbox for common list items', () => {
		const wrapper = shallowMount(CurrencyListItemLabel, {
			propsData: {
				currencyListItem: {
					id: 'usd',
					name: 'USD',
					isSelected: false
				},
				isInteractive: true,
				toggleSelection: jest.fn()
			}
		})

		expect(
			wrapper.find('.currency-list-item-checkmark').exists()
		).toBeTruthy()
	})
})
