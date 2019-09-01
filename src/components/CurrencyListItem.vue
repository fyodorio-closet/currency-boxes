<template>
    <div
        class="currency-list-item"
        v-bind:class="{
            'currency-list-item_featured': isItemOfFeaturedList,
            'currency-list-item_basic': !isItemOfFeaturedList,
            'currency-list-item_basic--inactive': !isItemOfFeaturedList && !currencyListItem.isSelected
        }"
    >
        <CurrencyListItemLabel
            :currencyListItem="currencyListItem"
            :toggleSelection="toggleSelection"
            :isInteractive="!isItemOfFeaturedList"
        />
        <CurrencyListItemBadge
            v-if="isItemOfFeaturedList"
            :removeItem="toggleSelection"
        />
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import CurrencyListItemBadge from "./CurrencyListItemBadge";
import CurrencyListItemLabel from "./CurrencyListItemLabel";

export default {
    components: { CurrencyListItemLabel, CurrencyListItemBadge },
    props: {
        currencyListItem: Object,
        isItemOfFeaturedList: Boolean
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
    .currency-list-item {
        width: 31.333%;
        margin: 1%;
        padding: 1%;
        display: flex;
        box-sizing: border-box;
    }
    .currency-list-item_featured {
        justify-content: center;
        font-size: 1.2rem;
        position: relative;
        background-color: lightgrey;
    }
    .currency-list-item_basic {
        color: darkblue;
        justify-content: start;
        border: 1px solid grey;
        font-size: 1.5rem;
        background-color: white;
    }
    .currency-list-item_basic--inactive {
        background-color: #EEE;
    }
    .currency-list-item_basic--inactive:hover {
        background-color: lightgrey;
    }
</style>
