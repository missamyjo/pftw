<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <RouterView></RouterView>
    <footer>
      <img
        src="src/assets/img/footer_black_crop.jpg"
        alt="who made who studio address"
      />
    </footer>
  </div>
</template>

<style>
html {
  font-size: 16px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  background: black;
}
#app,
body {
  margin: 0;
  padding: 0;
}
nav {
  width: 100%;
  height: 45px;
  background: white;
  text-align: center;
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
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}
.container h1 {
  text-align: center;
  font-size: 48px;
  color: white;
}
.container p,
h3 {
  width: 800px;
  font-size: inherit;
  padding: 0 100px;
}
.container img {
  display: block;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}
footer {
  display: block;
  max-width: 400px;
  width: 100%;
  margin: 40px auto 20px;
}
</style>
