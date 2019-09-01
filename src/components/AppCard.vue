<template>
  <div class="app-card">
    <h1>Selected</h1>
    <CurrencyList :currencyList="selectedBoxes" :isFeatured="true"/>
    <h1>All</h1>
    <CurrencyList :currencyList="unselectedBoxes" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CurrencyList from "./CurrencyList";

export default {
  components: { CurrencyList },
  computed: {
    ...mapGetters([
      'selectedBoxes',
      'unselectedBoxes'
    ])
  }
};
</script>

<style scoped></style>
