<template>
  <div class="experience-card">
    <h2>{{ props.company }}</h2>
    <h3>{{ props.position }}</h3>
    <p>{{ props.description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["company", "position", "description"]);
</script>

<style lang="scss" scoped>
.experience-card {
  max-width: 400px;
  margin: 0 auto;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  transition: box-shadow 0.3s, background-color 0.3s;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: #233554;
  }

  &:hover h2 {
    color: coral;
  }

  h2 {
    color: white;
    transition: color 0.3s;
  }

  h3 {
    color: #8892b0;
  }

  p {
    color: #a8b2d1;
  }
}
</style>
