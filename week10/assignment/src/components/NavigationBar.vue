<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <RouterLink to="/">Welcome</RouterLink> •
    <RouterLink to="/collection">My Collection</RouterLink>
  </div>
</template>
<style scoped>
div {
  text-align: center;
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
}
a {
  color: black;
  text-decoration: none;
}
a:hover {
  color: greenyellow;
  text-decoration: none;
}
</style>
