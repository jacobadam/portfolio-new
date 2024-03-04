<template>
  <div class="experience">
    <h1>Experience</h1>
    <ExperienceBox
      v-for="(job, index) in jobs"
      :key="index"
      :header="job.company"
      :title="job.position"
      :description="job.description"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ExperienceBox from "./ExperienceBox.vue";

const jobs = ref([
  {
    company: "Article",
    position: "Front-end Software Engineer",
    description:
      "I served as a front-end developer, actively participating in the maintenance and enhancement of a Vue powered eCommerce website. I specialized in integrating innovative technologies such as Apollo GraphQL for optimized data fetching, Algolia for seamless search functionality, and Contentful for effective content management.",
  },
  {
    company: "SpareRoom",
    position: "Back-end Software Engineer",
    description:
      "I actively contributed to the development of RESTful APIs using Perl, engaging in both front-end and back-end work for an in-house admin tool. With SQLPro, I gathered data and created custom reports, showcasing my hands-on experience. I honed my skills with Git and Linux shell for version control, ensuring smooth collaboration. These experiences reflect my growth as a junior developer, demonstrating versatility and a practical understanding of key tools in software development.",
  },
  {
    company: "NorthCoders",
    position: "Graduate Software Engineer",
    description:
      "I completed a comprehensive full-stack coding course at an award-winning bootcamp in Manchester. Acquired practical skills through an industry-led curriculum covering TDD, paired programming, and object-oriented programming. Collaborated within a group of 5, successfully delivering an end-to-end application in an agile environment. Engaged in daily stand-ups, utilized a kanban board, and presented the final project, showcasing my proficiency and adaptability as a junior developer.",
  },
]);
</script>

<style scoped>
.experience {
  text-align: center;
}
</style>
