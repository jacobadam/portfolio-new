<template>
  <div class="experience-card">
    <div class="experience-details">
      <div class="info-header">
        <h2>{{ props.company }}</h2>
        <div class="experience-dates">
          <span>{{ props.dates }}</span>
        </div>
      </div>
      <h3>{{ props.position }}</h3>
      <p>{{ props.description }}</p>

      <div class="technology-list">
        <div
          class="technology-bubble"
          v-for="tech in props.technologies"
          :key="tech"
        >
          {{ tech }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps([
  "company",
  "position",
  "description",
  "dates",
  "technologies",
]);
</script>

<style lang="scss" scoped>
.experience-card {
  display: flex;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  transition: box-shadow 0.3s, background-color 0.3s;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: #233554;
  }

  &:hover .experience-details h2 {
    color: coral;
  }

  .experience-details {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .info-header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .experience-dates {
    color: #8892b0;
  }

  h2 {
    color: white;
    transition: color 0.3s;
    margin: 0;
  }

  h3 {
    color: #8892b0;
  }

  p {
    color: #a8b2d1;
  }

  .technology-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 12px;
    font-size: 10px;
  }

  .technology-bubble {
    background-color: #4a5568;
    color: coral;
    border-radius: 20px;
    padding: 8px 10px;
    margin-right: 8px;
    margin-bottom: 8px;
  }
}
</style>
