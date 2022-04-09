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
  <p>Backing Card? {{ item.backingCard }}</p>
  <p>Made In: {{ item.madeIn }}</p>
  <p>Year: {{ item.pezYear }}</p>
  <p>How Many? {{ item.pezQuantity }}</p>
</template>
<style scoped>
img {
  background: white;
  height: 400px;
  width: 400px;
  padding: 1rem;
  border: dashed 3px;
  border-radius: 12px;
}
</style>