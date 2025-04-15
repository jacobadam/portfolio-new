<template>
  <div class="experience">
    <h2>Experience</h2>
    <ExperienceComponent
      v-for="(job, index) in jobs"
      :key="index"
      :company="job.company"
      :position="job.position"
      :description="job.description"
      :dates="job.dates"
      :technologies="job.technologies"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ExperienceComponent from "./ExperienceComponent.vue";

const jobs = ref([
  {
    company: "Article",
    position: "Front-end Software Developer",
    description:
      "Working as a developer on the Storefront team, I built and maintained features for the company’s e-commerce web application, which serves millions of monthly users, leveraging Vue.js, React, and Next.js. I drove a 12% increase in conversions via a product page redesign and implemented a cross-sell component that generated $30K in sales within its first month. I also spearheaded a performance optimization initiative that improved the Lighthouse score by 25% and reduced load times by 8%, significantly enhancing user experience. Additionally, I optimized product discoverability by enhancing site search with Algolia.",
    dates: "2021-2024",
    technologies: [
      "JavaScript",
      "TypeScript",
      "Vue.js",
      "Next.js",
      "React",
      "HTML",
      "CSS",
      "GraphQL",
      "Algolia",
      "Contentful",
    ],
  },
  {
    company: "SpareRoom",
    position: "Back-end Software Developer",
    description:
      "As a developer on the backend team, I contributed to the platform by developing RESTful APIs in Perl for managing listings, user accounts, and rental transactions. My responsibilities also included participating in the integration of secure payment processing within the payment system using Node.js, including working with the Stripe API. Additionally, I leveraged my full-stack capabilities to support internal teams by building the frontend of an admin tool with jQuery for data access,   utilizing MySQL to query and analyze customer data, and generating custom reports for marketing mailshots. I also enhanced team efficiency by creating automation scripts in Go for repetitive development tasks, including determining daily stand-up participants based on availability.",
    dates: "2019-2020",
    technologies: ["Perl", "Node.js", "Go", "MySQL", "jQuery", "HTML", "CSS"],
  },
  {
    company: "Northcoders",
    position: "Graduate Software Developer",
    description:
      "During this comprehensive full-stack coding course at an award-winning bootcamp, I acquired practical skills through an industry-led curriculum covering TDD, paired programming, and object-oriented programming. Collaborating with my teammates, we successfully delivering an end-to-end application in an agile environment. I also engaged in daily stand-ups, utilized a kanban board, and presented the final project.",
    dates: "2019",
    technologies: [
      "JavaScript",
      "Node.js",
      "React",
      "Express.js",
      "MySQL",
      "HTML",
      "CSS",
    ],
  },
]);
</script>

<style scoped>
.experience {
  text-align: center;
  padding-top: 10px;
}
</style>
