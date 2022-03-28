<script setup>
const props = defineProps(["animal"]);
console.log(props.animal);
</script>
<template>
  <div>
    <h3>{{ props.animal.commonName }}</h3>
    <p>Binomial Name: {{ props.animal.binomialName }}</p>
    <p>Family: {{ props.animal.family }}</p>

    <p>Genus: {{ props.animal.genus }}</p>
    <p>Species: {{ props.animal.species }}</p>
    <img v-bind:src="props.animal.image" v-bind:alt="props.animal.commonName" />
  </div>
</template>;
<style scoped>
div {
  max-width: 220px;
  border: 1px solid;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
}
img {
  max-width: 200px;
  display: block;
}
h3 {
  color: red;
}
</style>