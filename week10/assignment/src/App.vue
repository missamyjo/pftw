<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue";
</script>

<template>
  <NavigationBar />
  <div class="container">
    <RouterView />
  </div>
</template>

<style>
@font-face {
  font-family: "Pez";
  src: local("Pez"), url(../fonts/Pez_font.TTF) format("truetype");
}
h1 {
  font-family: "Pez", "Courier New", Courier, monospace;
  font-size: 65px;
  text-align: center;
  background: hotpink;
}
body {
  font-family: "Courier New", Courier, monospace;
  background: hotpink;
}
img {
  height: 200px;
  width: 200px;
}
.container {
  width: 100%;
  text-align: center;
  font-size: 1.4em;
  color: black;
}
td {
  padding: 1rem;
  border-radius: 10px;
}
table {
  border-spacing: 3px;
  width: 1017px;
  margin: 0 auto;
}
.odd {
  background: ivory;
}
.even {
  background: linear-gradient(yellowgreen, yellow);
}
</style>
