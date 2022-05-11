<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <RouterView></RouterView>
    <footer>
      <img
        src="./assets/img/footer_black_crop.jpg"
        alt="who made who studio address"
      />
    </footer>
  </div>
</template>

<style>
@font-face {
  font-family: "RobotoSlab";
  src: local("RobotoSlab"),
    url(./assets/fonts/RobotoSlab-Bold.TTF) format("truetype");
}
@font-face {
  font-family: "ZenKakuGothicNew-Black";
  src: local("ZenKakuGothicNew"),
    url(./assets/fonts/ZenKakuGothicNew-Black.TTF) format("truetype");
}
@font-face {
  font-family: "ZenKakuGothicNew-Regular";
  src: local("ZenKakuGothicNew"),
    url(./assets/fonts/ZenKakuGothicNew-Regular.TTF) format("truetype");
}

html {
  background: black;
}
h1 {
  font-family: "RobotoSlab";
  font-size: 36px;
  text-transform: uppercase;
  letter-spacing: 5px;
}
#app,
body {
  margin: 0;
  padding: 0;
}
nav {
  font-family: "ZenKakuGothicNew-Black";
  text-transform: uppercase;
  width: 100%;
  height: 45px;
  background: white;
  text-align: center;
  border: solid white 3px;
  border-radius: 3px;
}
nav a,
nav a:hover,
nav a:link,
nav a:active,
nav a:visited {
  color: black;
  font-weight: 900;
  font-size: 24px;
  line-height: 1.75;
  text-decoration: none;
}
nav a.router-link-active {
  color: #f51e26;
}
.container {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
.container img {
  display: block;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}
footer {
  display: block;
  max-width: 340px;
  width: 100%;
  margin: 40px auto;
}
</style>
