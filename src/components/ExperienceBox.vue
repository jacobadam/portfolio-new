<template>
  <div class="container">
    <h2>{{ props.header }}</h2>
    <h3>{{ props.title }}</h3>
    <p>{{ props.description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["header", "title", "description"]);
</script>

<style lang="scss" scoped></style>
