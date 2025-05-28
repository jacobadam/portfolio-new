<template>
  <div class="app">
    <vue-particles :options="particlesOptions" id="tsparticles" />
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
      <MyBiography ref="myAboutRef" id="About" />
      <MyExperience ref="myExperienceRef" id="MyExperience" />
      <MyProjects ref="myProjectsRef" id="MyProjects" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import MyProfile from "./MyProfile.vue";
import MyBiography from "./MyBiography.vue";
import MyExperience from "./MyExperience.vue";
import MyProjects from "./MyProjects.vue";

const activeSection = ref(null);
const observer = ref(null);

const myAboutRef = ref(null);
const myExperienceRef = ref(null);
const myProjectsRef = ref(null);

const sections = ref({
  About: null,
  MyExperience: null,
  MyProjects: null,
});

const scrollToSection = (section) => {
  if (section === "About" && myAboutRef.value) {
    myAboutRef.value.$el.scrollIntoView({ behavior: "smooth" });
  } else if (section === "MyExperience" && myExperienceRef.value) {
    myExperienceRef.value.$el.scrollIntoView({ behavior: "smooth" });
  } else if (section === "MyProjects" && myProjectsRef.value) {
    myProjectsRef.value.$el.scrollIntoView({ behavior: "smooth" });
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
  sections.value.About = myAboutRef.value.$el;
  sections.value.MyExperience = myExperienceRef.value.$el;
  sections.value.MyProjects = myProjectsRef.value.$el;

  Object.keys(sections.value).forEach((section) => {
    sections.value[section] =
      sections.value[section] || document.getElementById(section);
  });

  observer.value = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
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

const particlesOptions = {
  fpsLimit: 60,
  particles: {
    number: { value: 200, density: { enable: true, value_area: 800 } },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 2, opacity_min: 0, sync: false },
    },
    size: {
      value: 0.5,
      random: true,
      anim: { enable: false, speed: 2, size_min: 0.3, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 110,
      color: "#33b1f8",
      opacity: 0.25,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onClick: {
        enable: true,
        mode: "repulse",
      },
      onHover: {
        enable: true,
        mode: "grab",
      },
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  retina_detect: true,
};
</script>

<style lang="scss" scoped>
#tsparticles {
  z-index: -1;
  // @media (max-width: 1023px) {
  //   display: none;
  // }
}

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
