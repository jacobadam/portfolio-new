<template>
  <div>
    <h2>Projects</h2>
    <div class="projects">
      <div v-for="project in projects" :key="project.name" class="project">
        <a
          :href="project.link"
          class="project-link"
          target="_blank"
          rel="noreferrer"
        >
          <div class="project-content">
            <img :src="project.image" :alt="project.name" />
            <div class="project-details">
              <h3>{{ project.name }}</h3>
              <p class="project-description">{{ project.description }}</p>
            </div>
          </div>
        </a>
        <div class="technology-list">
          <div
            class="technology-bubble"
            v-for="tech in project.technologies"
            :key="tech"
          >
            {{ tech }}
          </div>
        </div>
      </div>
    </div>
    <p class="note">
      * Awaiting Spotify quota extension. Currently able to manually provide
      access for up to 25 users.
    </p>
  </div>
</template>

<script setup>
import podiatrist from "@/assets/nnwebsite.webp";
import spotify from "@/assets/spotify-stats.webp";
import tetris from "@/assets/tetris-site.webp";

import { ref } from "vue";

const projects = ref([
  {
    name: "Healthcare Website",
    description:
      "A React app that integrates the Google Maps API and utilizes EmailJS for the contact form, with styling implemented using Tailwind CSS.",
    image: podiatrist,
    link: "https://jacobadam.github.io/nn-podiatry/",
    technologies: ["ReactJS", "Tailwind", " GoogleMaps API", "EmailJS"],
  },
  {
    name: "Spotify Stats",
    description:
      "A React application integrated with the Spotify API, utilizing an Express server hosted on Heroku to handle the Authorization Code Flow. The front end, hosted on Netlify, allows users to view their top artists, top tracks, and recently played tracks. *",
    image: spotify,
    link: "https://listening-stats-jn.netlify.app/",
    technologies: ["React", "Express", "Spotify API", "Heroku", "Netlify"],
  },
  {
    name: "Tetris",
    description:
      "A tetris-style game built with a combination of JavaScript, HTML, and CSS.",
    image: tetris,
    link: "https://jacobadam.github.io/tetris/",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
]);
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
  padding-top: 30px;
}

.project {
  display: flex;
  flex-direction: column;
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

  p {
    color: #a8b2d1;
  }

  a:link {
    color: white;
    text-decoration: none;
  }

  a:visited {
    color: white;
  }

  a:hover {
    text-decoration: none;

    h3 {
      text-decoration: underline;
    }
  }
}

.project-content {
  display: flex;
  align-items: center;
}

.project img {
  width: 150px;
  height: auto;
  margin-right: 20px;
}

.project-details {
  flex: 1;
}

.project-details h3 {
  margin-bottom: 8px;
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
  border-radius: 18px;
  padding: 8px 10px;
  margin-right: 6px;
  margin-bottom: 8px;
  font-weight: bold;
}

.note {
  margin-top: 20px;
  font-size: 14px;
  color: #a8b2d1;
  text-align: center;
}
</style>
