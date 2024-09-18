<template>
  <div class="app">
    <div class="left-column">
      <MyProfile :scrollToSection="scrollToSection" />
      <div class="anchorTags">
        <a
          @click="scrollToSection('About')"
          :class="{ active: activeSection === 'About' }"
          >About</a
        >
        <a
          @click="scrollToSection('MyExperience')"
          :class="{ active: activeSection === 'MyExperience' }"
          >Experience</a
        >
        <a
          @click="scrollToSection('MyProjects')"
          :class="{ active: activeSection === 'MyProjects' }"
          >Projects</a
        >
      </div>
    </div>
    <div class="right-column">
      <MyBiography ref="About" id="About" />
      <MyExperience ref="MyExperience" id="MyExperience" />
      <MyProjects ref="MyProjects" id="MyProjects" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import MyProfile from "./MyProfile.vue";
import MyBiography from "./MyBiography.vue";
import MyExperience from "./MyExperience.vue";
import MyProjects from "./MyProjects.vue";

export default {
  name: "App",
  components: {
    MyProfile,
    MyBiography,
    MyExperience,
    MyProjects,
  },
  setup() {
    const activeSection = ref(null);
    const observer = ref(null);

    const sections = ref({
      About: null,
      MyExperience: null,
      MyProjects: null,
    });

    const scrollToSection = (section) => {
      const clickedSection = sections.value[section];

      if (clickedSection) {
        clickedSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    };

    onMounted(() => {
      Object.keys(sections.value).forEach((section) => {
        sections.value[section] =
          sections.value[section] || document.getElementById(section);
      });

      observer.value = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      });

      Object.values(sections.value).forEach((section) => {
        if (section) {
          observer.value.observe(section);
        }
      });
      document.title = "Jacob Nevitt";
    });

    onBeforeUnmount(() => {
      if (observer.value) {
        observer.value.disconnect();
      }
    });

    return {
      scrollToSection,
      activeSection,
      sections,
    };
  },
};
</script>

<style lang="postcss" scoped>
.app {
  display: flex;
  font-family: "Montserrat", sans-serif;
  color: white;
  height: 100vh;

  .left-column {
    flex: 0 0 35%;
    overflow: hidden;

    @media (max-width: 768px) {
      position: sticky;
      top: 0;
      z-index: 2;
    }

    .anchorTags {
      padding-top: 20px;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 10px;

      a {
        cursor: pointer;
        transition: color 0.3s;
      }

      .active {
        color: coral;
      }

      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  .right-column {
    flex: 1;
    overflow-y: auto;
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
