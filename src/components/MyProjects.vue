<template>
  <div>
    <h2>Projects</h2>
    <div class="projects">
      <div v-for="project in projects" :key="project.name" class="project">
        <a :href="project.link" class="project-link">
          <div class="project-content">
            <img
              :src="project.image"
              :alt="project.name"
              class="project-image"
            />
            <div class="project-details">
              <h3>{{ project.name }}</h3>
              <p class="project-description">{{ project.description }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import tetris from "@/assets/tetris.jpg";
import { ref } from "vue";

const projects = ref([
  {
    name: "Tetris",
    description:
      "A tetris-style game built with a combination of JavaScript, HTML, and CSS.",
    image: tetris,
    link: "https://jacobadam.github.io/tetris/",
  },
]);
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
}

.projects {
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

.project {
  margin-bottom: 20px;
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
</style>
