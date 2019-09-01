export default {
	updateBox: (state, { id, isSelected }) => {
		state['currencyBoxes'] = state['currencyBoxes'].map(box =>
			box.id === id ? { ...box, isSelected } : box
		)
	}
}
