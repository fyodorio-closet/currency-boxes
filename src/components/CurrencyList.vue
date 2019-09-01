<template>
	<section
		class="currency-list"
		:class="{ 'no-zero-height': isListFeatured }"
	>
		<CurrencyListItem
			v-for="box in currencyList"
			:key="box.id"
			:currencyListItem="box"
			:isItemOfFeaturedList="isListFeatured"
		/>
	</section>
</template>

<script>
import CurrencyListItem from './CurrencyListItem'

export default {
	components: { CurrencyListItem },
	props: {
		currencyList: Array,
		isListFeatured: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style scoped>
.currency-list {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	align-items: center;
	padding: 8px;
	box-sizing: border-box;
}
.no-zero-height {
	min-height: 48px;
}
</style>
