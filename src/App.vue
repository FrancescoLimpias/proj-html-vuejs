<script>
// import components
import AppAbsoluteNav from "./components/AppAbsoluteNav.vue";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

// component declarations
export default {
  components: {
    AppAbsoluteNav,
    AppHeader,
    AppMain,
    AppFooter,
  }
}
</script>

<template>
  <div class="App">

    <AppAbsoluteNav />

    <header>
      <AppHeader />
    </header>

    <main>
      <AppMain />
    </main>

    <footer>
      <AppFooter />
    </footer>

  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>

<style lang="scss" scoped>
/* .App {
  // overflow: initial;
} */
</style>
