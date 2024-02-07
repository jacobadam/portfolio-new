<template>
  <Profile />
  <Biography />
</template>

<script>
import Profile from "./components/Profile.vue";
import Biography from "./components/Biography.vue";

export default {
  name: "App",
  components: {
    Profile,
    Biography,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
