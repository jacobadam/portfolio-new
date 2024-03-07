<template>
  <div class="profile">
    <h1 @click="scrollToAbout">{{ name }}</h1>
    <p>{{ description }}</p>
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
import { ref, defineProps } from "vue";

const props = defineProps(["scrollToSection"]);

const scrollToAbout = () => {
  props.scrollToSection("About");
};

const name = ref("Jacob Nevitt");
const description = ref(
  "Bridging the gap between design and functionality one line of code at a time"
);

const linkedinIcon = ref(require("../assets/linkedin_icon.png"));
const githubIcon = ref(require("../assets/github_icon.png"));

const linkedinUrl = ref("https://www.linkedin.com/in/jacobnevitt/");
const githubUrl = ref("https://github.com/jacobadam");
</script>

<style scoped>
.profile {
  text-align: center;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 8px;
  padding: 30px 16px 16px 16px;
  margin-bottom: 16px;
  transition: box-shadow 0.3s, background-color 0.3s;
}

h1 {
  color: coral;
}

h2 {
  color: #8892b0;
}

p {
  color: #a8b2d1;
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
