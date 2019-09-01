export default {
  selectedBoxes: (state) => {
    return state.currencyBoxes.filter(box => box.isSelected)
  },
  allBoxes: (state) => {
    return state.currencyBoxes
  }
}
