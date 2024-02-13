<template>
  <div class="profile">
    <h1>Jacob Nevitt</h1>
    <h2>Front End Developer</h2>
    <h3>
      Bridging the gap between design and functionality, one line of code at a
      time.
    </h3>
    <div class="icons">
      <a
        href="https://www.linkedin.com/in/jacobnevitt/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img :src="linkedin_icon" alt="LinkedIn Icon" class="icon" />
      </a>
      <a
        href="https://github.com/jacobadam"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img :src="github_icon" alt="GitHub Icon" class="icon" />
      </a>
    </div>
  </div>
</template>

<script>
import github_icon from "../assets/github_icon.png";
import linkedin_icon from "../assets/linkedin_icon.png";

export default {
  name: "MyProfile",
  data() {
    return {
      github_icon,
      linkedin_icon,
    };
  },
};
</script>

<style scoped>
.profile {
  text-align: center;
}

.icons {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
