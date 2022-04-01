<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/alpaca">Alpaca</RouterLink> |
    <RouterLink to="llama">Llama</RouterLink>
  </nav>
  <div class="container">
    <RouterView></RouterView>
  </div>
</template>

<style>
html {
  font-size: 16px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
#app,
body {
  margin: 0;
  padding: 0;
}
nav {
  width: 100%;
  height: 45px;
  background: tan;
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
}
nav a.router-link-active {
  text-decoration: underline;
  color: darkgreen;
}
.container {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 50px;
}
.container h1 {
  text-align: center;
  font-size: 48px;
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
  margin: 20px auto 20px;
}
</style>
