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
                :checked="currencyListItem.isSelected"
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
    .currency-list-item-label {
        width: 100%;
        display: flex;
        align-content: center;
        justify-content: center;
    }
    .currency-list-item-label_checker {
        width: 100%;
        cursor: pointer;
        position: relative;
        padding-left: 22px;
        user-select: none;
    }
    .currency-list-item-label_checker input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    .currency-list-item-checkmark {
        position: absolute;
        top: 19%;
        left: 0;
        height: 16px;
        width: 16px;
        border: 1px solid grey;
        border-radius: 3px;
    }
    .currency-list-item-checkmark:after {
        content: 'x';
        line-height: 1.2rem;
        font-size: 1.2rem;
        margin-top: -2px;
        color: red;
        display: none;
        align-content: center;
        justify-content: center;
    }
    .currency-list-item-label_checker input:checked ~ .currency-list-item-checkmark:after {
        display: flex;
    }
</style>
