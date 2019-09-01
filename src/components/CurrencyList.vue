<template>
    <div class="currency-list">
        <ul v-if="isFeatured">
            <CurrencyListItem v-for="box in currencyList" :key="box.id" :currencyListItem="box" />
        </ul>
        <ul v-if="!isFeatured">
            <CurrencyListItem v-for="box in currencyList" :key="box.id" :currencyListItem="box" />
        </ul>
    </div>
</template>

<script>
import CurrencyListItem from "./CurrencyListItem";

export default {
    components: {CurrencyListItem},
    props: {
        currencyList: Array,
        isFeatured: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>

</style>
