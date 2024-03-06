<template>
  <div class="profile">
    <h1>{{ name }}</h1>
    <h2>{{ role }}</h2>
    <h4>{{ description }}</h4>
    <div class="icons">
      <a :href="linkedinUrl" target="_blank" rel="noopener noreferrer">
        <img :src="linkedinIcon" alt="LinkedIn Icon" class="icon" />
      </a>
      <a :href="githubUrl" target="_blank" rel="noopener noreferrer">
        <img :src="githubIcon" alt="GitHub Icon" class="icon" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("Jacob Nevitt");
const role = ref("Front End Developer");
const description = ref(
  "Bridging the gap between design and functionality one line of code at a time."
);

const linkedinIcon = ref(require("../assets/linkedin_icon.png"));
const githubIcon = ref(require("../assets/github_icon.png"));

const linkedinUrl = ref("https://www.linkedin.com/in/jacobnevitt/");
const githubUrl = ref("https://github.com/jacobadam");
</script>

<style scoped>
.profile {
  text-align: center;
}

.icons {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 10px;
}
.icon {
  filter: invert(1);
  width: 25px;
  height: 25px;
}
</style>
