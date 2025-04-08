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
            <img
              :src="project.image"
              :alt="project.name"
              width="150"
              height="75"
            />
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
  </div>
</template>

<script setup>
import nnWebsite from "@/assets/nn-website.webp";
import spotifyStats from "@/assets/spotify-stats.webp";
import tetris from "@/assets/tetris-site.webp";
import ksPortfolio from "@/assets/ks-portfolio.webp";
import moodTrackerApp from "@/assets/mood-tracker-app.webp";
import bechdelWallaceTest from "@/assets/bechdel-wallace-test.webp";

import { ref } from "vue";

const projects = ref([
  {
    name: "Bechdel-Wallace Test",
    description:
      "A Next.js app that evaluates movies against the Bechdel-Wallace Test, highlighting gender representation by checking if films meet key criteria for meaningful female presence and dialogue, all with a clean, user-friendly interface.",
    image: bechdelWallaceTest,
    link: "https://bechdeltest.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    name: "Mood Tracker App",
    description:
      "A React app with smooth, responsive SVG animation sequences that visually represent different mood states while maintaining seamless backend integration and real-time data updates.",
    image: moodTrackerApp,
    link: "https://mood-tracker-app.netlify.app/",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "GSAP",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Socket.IO",
      "Netlify",
      "Heroku",
    ],
  },
  {
    name: "Content Services Portfolio",
    description:
      "A Next.js app built for a small content creation and marketing business, featuring responsive design and optimized performance for SEO and accessibility.",
    image: ksPortfolio,
    link: "https://www.katieshevlin.com/",
    technologies: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "EmailJS",
      "Vercel",
    ],
  },
  {
    name: "Healthcare Website",
    description:
      "A React app that integrates the Google Maps API and utilizes EmailJS for the contact form, with styling implemented using Tailwind CSS.",
    image: nnWebsite,
    link: "https://www.neilnevitt.com/",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "GoogleMaps API",
      "EmailJS",
      "Netlify",
    ],
  },
  {
    name: "Spotify Stats",
    description:
      "A React app integrated with the Spotify API, utilizing an Express server hosted on Heroku to handle the Authorization Code Flow. The front end, hosted on Netlify, allows users to view their top artists, top tracks, and recently played tracks.",
    image: spotifyStats,
    link: "https://listening-stats-jn.netlify.app/",
    technologies: [
      "React",
      "JavaScript",
      "Express.js",
      "Spotify API",
      "Heroku",
      "Netlify",
    ],
  },
  {
    name: "Tetris",
    description:
      "A tetris-style game built with a combination of JavaScript, HTML, and CSS.",
    image: tetris,
    link: "https://jacobadam.github.io/tetris/",
    technologies: ["JavaScript", "HTML", "CSS", "GitHub Pages"],
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
  height: 75px;
  object-fit: cover;
  display: block;
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
  justify-content: center;
}

.technology-bubble {
  background-color: #050505;
  color: #f2734a;
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

.demo-link {
  color: white;
  text-decoration: none;
}

.demo-link:visited {
  color: white;
}

.demo-link:hover {
  text-decoration: underline;
}
</style>
