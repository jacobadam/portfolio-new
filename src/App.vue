<template>
  <div class="app">
    <div class="left-column">
      <MyProfile />
      <div class="anchorTags">
        <a @click="scrollToSection('About')">About</a>
        <a @click="scrollToSection('MyExperience')">Experience</a>
        <a @click="scrollToSection('MyProjects')">Projects</a>
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
import { ref, onMounted, toRefs } from "vue";
import MyProfile from "./components/MyProfile.vue";
import MyBiography from "./components/MyBiography.vue";
import MyExperience from "./components/MyExperience.vue";
import MyProjects from "./components/MyProjects.vue";

export default {
  name: "App",
  components: {
    MyProfile,
    MyBiography,
    MyExperience,
    MyProjects,
  },
  setup() {
    const scrollToSection = (section) => {
      const clickedSection = sections.value[section];

      if (clickedSection) {
        clickedSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    const sections = ref({
      About: null,
      MyExperience: null,
      MyProjects: null,
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
