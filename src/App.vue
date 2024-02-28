<template>
  <div class="app">
    <div class="left-column">
      <Profile />
      <div class="anchorTags">
        <a @click="scrollToSection('about')">About</a>
        <a @click="scrollToSection('experience')">Experience</a>
        <a @click="scrollToSection('projects')">Projects</a>
      </div>
    </div>
    <div class="right-column">
      <Biography ref="about" id="about" />
      <Experience ref="experience" id="experience" />
      <Projects ref="projects" id="projects" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, toRefs } from "vue";
import Profile from "./components/Profile.vue";
import Biography from "./components/Biography.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";

export default {
  name: "App",
  components: {
    Profile,
    Biography,
    Experience,
    Projects,
  },
  setup() {
    const scrollToSection = (section) => {
      const clickedSection = sections.value[section];

      if (clickedSection) {
        clickedSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    const sections = ref({
      about: null,
      experience: null,
      projects: null,
    });

    onMounted(() => {
      Object.keys(sections.value).forEach((section) => {
        sections.value[section] =
          sections.value[section] || document.getElementById(section);
      });
    });

    return {
      scrollToSection,
      sections: toRefs(sections),
    };
  },
};
</script>

<style lang="postcss" scoped>
.app {
  display: flex;
  color: white;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  .left-column {
    flex: 0 0 35%;
    overflow: hidden;

    .anchorTags {
      padding-top: 20px;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 10px;

      a {
        cursor: pointer;
      }
    }
  }

  .right-column {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
  }
}

@media (max-width: 768px) {
  .app {
    flex-direction: column;
  }

  .left-column {
    flex: 1;
  }
}
</style>
