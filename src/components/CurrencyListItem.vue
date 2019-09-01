<template>
    <li class="currency-list-item">
        <p @click="toggleSelection()">{{ currencyListItem.name }}</p>
    </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: {
        currencyListItem: Object
    },
    methods: {
        ...mapActions([
            'updateBox'
        ]),
        toggleSelection() {
            this.updateBox({ ...this.currencyListItem, isSelected: !this.currencyListItem.isSelected })
        }
    }
}
</script>

<style scoped>

</style>
