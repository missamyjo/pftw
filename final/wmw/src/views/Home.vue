<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <ul>
    <li class="explore">
      <img src="../assets/img/spiky_red.png" alt="explore the art kits" />
    </li>
    <li class="logo">
      <img
        src="../assets/img/whomadewho_620x324.png"
        alt="who made who logotype"
      />
    </li>
  </ul>
  <ul>
    <li class="block">
      <RouterLink to="/block">
        <img src="../assets/img/block.jpg" alt="block print" />
      </RouterLink>
    </li>
    <li class="clay">
      <RouterLink to="/clay">
        <img src="../assets/img/clay.jpg" alt="clay ornament" />
      </RouterLink>
    </li>
    <li class="wood">
      <RouterLink to="/kolrosing">
        <img src="../assets/img/kolrosing.jpg" alt="bkolrosing" />
      </RouterLink>
    </li>
  </ul>
</template>

<style >
 {
}
.logo {
  max-width: 520px;
  width: 100%;
  margin: 0 0 0 50px;
}
.explore {
  max-width: 170px;
  width: 100%;
  margin: 0 0 0 200px;
}
li {
  display: inline-block;
}
.block,
.clay,
.wood {
  max-width: 360px;
  width: 100%;
  margin: 40px auto 20px 60px;
}
</style>