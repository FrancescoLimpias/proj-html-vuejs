<script>
// import components
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

// component declarations
export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  }
}
</script>

<template>
  <div class="App">
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<style scoped>
.App {}
</style>
