<template>
  <div class="biography">
    <h1>About Me</h1>
    <p>{{ introduction }}</p>
    <p>{{ workHistory }}</p>
    <div>Résumé Placeholder</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const introduction = ref("I'm Jacob, a creative coder & software developer.");

const workHistory = ref(
  "After graduating from an award-winning coding bootcamp, I worked on the development team for SpareRoom, the UK's largest property rental website. I'm currently a software developer on the front-end team at Article, one of Canada's fastest-growing eCommerce companies."
);
</script>

<style scoped>
.biography {
  text-align: center;
}
</style>
