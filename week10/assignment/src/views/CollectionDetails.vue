<script setup>
import PezList from "../data/pez-list.json";
import { useRoute } from "vue-router";

const route = useRoute();
const paramId = route.params.id * 1;
console.log("the id is", paramId);
const item = PezList.find((item) => {
  return item.id === paramId;
});
</script>
<template>
  <h1>{{ item.pezName }}</h1>
  <img :src="item.pezFace" :alt="item.pezName" />
  <p>{{ item.madeIn }}</p>
</template>
