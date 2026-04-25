<template>
  <div>
    <!-- <NavBar v-if="!this.$route.mete.hideNav" /> -->
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/navBar.vue";

export default {
  name: "App",
  components: { NavBar },
};
</script>

<style scoped></style>
