<template>
    <div class="currency-list-item-label">
        <div
            class="currency-list-item-label_display"
            v-if="!isInteractive"
        >
            {{ currencyListItem.name | lowercase }}
        </div>

        <label
            class="currency-list-item-label_checker"
            v-if="isInteractive"
        >
            {{ currencyListItem.name | uppercase }}
            <input
                type="checkbox"
                v-bind:checked="currencyListItem.isSelected"
                @change="toggleSelection"
            >
            <span class="currency-list-item-checkmark"></span>
        </label>
    </div>
</template>

<script>
    export default {
        props: {
            currencyListItem: Object,
            isInteractive: Boolean,
            toggleSelection: Function
        },
        filters: {
            lowercase: function(value) {
                if (!value) {
                    return '';
                }
                return value.toString().toLowerCase();
            },
            uppercase: function(value) {
                if (!value) {
                    return '';
                }
                return value.toString().toUpperCase();
            }
        }
    }
</script>

<style scoped>

</style>
