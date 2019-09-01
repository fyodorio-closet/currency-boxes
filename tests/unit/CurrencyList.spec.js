import { shallowMount } from '@vue/test-utils'
import CurrencyList from '@/components/CurrencyList.vue'

describe('CurrencyList', () => {
	it('renders correctly with passed props', () => {
		const wrapper = shallowMount(CurrencyList, {
			propsData: {
				currencyList: [
					{
						id: 'rub',
						name: 'RUB',
						isSelected: true
					},
					{
						id: 'usd',
						name: 'USD',
						isSelected: true
					}
				],
				isListFeatured: true
			}
		})

		expect(wrapper.find('.no-zero-height').exists()).toBeTruthy()

		expect(wrapper.find('section').element.children.length).toBe(2)
	})
})
