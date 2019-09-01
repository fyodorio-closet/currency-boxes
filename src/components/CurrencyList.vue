<template>
    <div>
        <section class="currency-list">
            <CurrencyListItem
                    v-for="box in currencyList"
                    :key="box.id"
                    :currencyListItem="box"
            />
        </section>
    </div>
</template>

<script>
import CurrencyListItem from "./CurrencyListItem";

export default {
    components: { CurrencyListItem },
    props: {
        currencyList: Array
    }
}
</script>

<style scoped>
    .currency-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 8px;
        box-sizing: border-box;
    }
</style>
