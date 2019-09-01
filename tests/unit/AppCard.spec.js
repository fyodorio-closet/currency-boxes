import AppCard from '@/components/AppCard.vue'

describe('AppCard', () => {
	it('has computed property of allBoxes (a list)', () => {
		expect(AppCard.computed.allBoxes).toBeDefined()
	})

	it('has computed property of selectedBoxes (a list)', () => {
		expect(AppCard.computed.selectedBoxes).toBeDefined()
	})
})
