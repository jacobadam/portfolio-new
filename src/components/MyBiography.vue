<template>
  <div
    class="biography"
    @mouseover="showResume = true"
    @mouseleave="showResume = false"
  >
    <h2>About Me</h2>
    <p class="intro">{{ introduction }}</p>
    <p class="work-history">{{ workHistory }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const introduction = ref("I'm Jacob, a creative coder & front-end developer.");
const workHistory = ref(
  "After graduating from an award-winning coding bootcamp, I refined my skills at the UK's largest property rental website, SpareRoom, and moved on to develop revenue-driving features at Article, one of Canada's leading eCommerce companies. I'm currently focused on crafting seamless, optimized sites for freelance clients."
);

const showResume = ref(false);
</script>

<style scoped>
.biography {
  text-align: center;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 8px;
  padding: 30px 16px 16px 16px;
  margin-bottom: 16px;
  transition: box-shadow 0.3s, background-color 0.3s;
}

p {
  color: #a8b2d1;
}

.resume {
  color: #f2734a;
  font-weight: bold;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s;
  background-color: #4a5568;
  border-radius: 18px;
  padding: 8px 10px;
  margin-right: 6px;
  margin-bottom: 8px;
}

.resume.visible {
  opacity: 1;
  visibility: visible;
}
</style>
