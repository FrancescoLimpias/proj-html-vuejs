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

<style lang="scss" scoped>
.App {}
</style>

<style lang="scss">
span.style-signature {
  color: #68c5f1;
}
</style>
