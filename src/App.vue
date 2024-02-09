<template>
  <div class="app">
    <div class="left-column">
      <Profile />
    </div>
    <div class="right-column">
      <Biography />
      <Experience />
    </div>
  </div>
</template>

<script>
import Profile from "./components/Profile.vue";
import Biography from "./components/Biography.vue";
import Experience from "./components/Experience.vue";

export default {
  name: "App",
  components: {
    Profile,
    Biography,
    Experience,
  },
};
</script>

<style scoped>
.app {
  display: flex;
  height: 100vh;
}

.left-column {
  flex: 0 0 300px;
  background-color: #f0f0f0;
  overflow: hidden;
}

.right-column {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

@media (max-width: 768px) {
  .app {
    flex-direction: column;
  }

  .left-column {
    flex: 1;
  }
}
</style>
