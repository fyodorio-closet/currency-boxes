<template>
  <div id="app">
    <AppCard />
  </div>
</template>

<script>
import AppCard from "./components/AppCard.vue";

export default {
  name: "app",
  components: {
    AppCard
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>
