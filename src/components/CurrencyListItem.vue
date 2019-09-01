<template>
    <div
            class="currency-list-item"
            v-bind:class="{
                'currency-list-item_featured': currencyListItem.isSelected,
                'currency-list-item_basic': !currencyListItem.isSelected
            }"
    >
        <div @click="toggleSelection()">{{ currencyListItem.name | casify(currencyListItem.isSelected) }}</div>
        <CurrencyListItemBadge v-if="currencyListItem.isSelected"/>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import CurrencyListItemBadge from "./CurrencyListItemBadge";

export default {
    components: { CurrencyListItemBadge },
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
    },
    filters: {
        casify: function(value, isSelected) {
            if (!value) {
                return '';
            }
            return isSelected ? value.toString().toLowerCase() : value.toString().toUpperCase();
        }
    }
}
</script>

<style scoped>
    .currency-list-item {
        width: 30%;
        margin: 1%;
        padding: 1%;
        display: flex;
        background-color: #EEE;
        box-sizing: border-box;
    }
    .currency-list-item_featured {
        justify-content: center;
        font-size: 1.2rem;
        position: relative;
    }
    .currency-list-item_basic {
        color: darkblue;
        justify-content: start;
        border: 1px solid grey;
        font-size: 1.5rem;
    }
</style>
