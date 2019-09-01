<template>
	<div class="currency-list-item-badge" @click="removeItem">X</div>
</template>

<script>
export default {
	props: {
		removeItem: Function
	}
}
</script>

<style scoped>
.currency-list-item-badge {
	position: absolute;
	right: -8px;
	top: -8px;
	font-size: 50%;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 16px;
	height: 16px;
	border-radius: 50%;
	border: 1px solid black;
	background-color: black;
	color: white;
	box-shadow: 0px 0px 0px 2px white;
	z-index: 1;
}
.currency-list-item-badge:hover {
	cursor: pointer;
	background-color: white;
	color: black;
}
</style>
