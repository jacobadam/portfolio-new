<template>
  <div class="app">
    <div class="left-column">
      <MyProfile :scrollToSection="scrollToSection" />
      <div class="anchorTags">
        <a
          href="#About"
          @click.prevent="scrollToSection('About')"
          :class="{ active: activeSection === 'About' }"
          >About</a
        >
        <a
          href="#MyExperience"
          @click.prevent="scrollToSection('MyExperience')"
          :class="{ active: activeSection === 'MyExperience' }"
          >Experience</a
        >
        <a
          href="#MyProjects"
          @click.prevent="scrollToSection('MyProjects')"
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
        threshold: 0.45,
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

<style lang="scss" scoped>
.app {
  display: flex;
  font-family: "Montserrat", sans-serif;
  color: white;
  height: 100vh;

  .left-column {
    flex: 0 0 35%;
    overflow: hidden;

    @media (max-width: 375px) {
      flex: 0 0 40%;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      flex: 0 0 30%;
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
        color: white;
        text-decoration: none;
        cursor: pointer;
        transition: color 0.3s;

        &:visited {
          color: white;
        }

        &:hover {
          color: #f2734a;
        }
      }

      .active {
        color: #f2734a;
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
