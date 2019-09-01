<template>
  <div class="app-card">
    <CurrencyList :currencyList="selectedBoxes" :isListFeatured="true" />
    <CurrencyList :currencyList="allBoxes" />
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
      'allBoxes'
    ])
  }
};
</script>

<style scoped>
  .app-card {
    width: 50%;
    min-width: 340px;
    border: 1px solid grey;
    border-radius: 5px;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.2);
  }
</style>
