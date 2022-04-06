<script setup>
import { RouterLink } from "vue-router";
const props = defineProps(["item", "index"]);
console.log("the item", props.item);
</script>
<template>
  <tr
    class="collectionRow"
    v-bind:class="{
      collectionRow: true,
      even: (index + 1) % 2 === 0,
      odd: (index + 1) % 2 !== 0,
    }"
  >
    <td>
      <RouterLink :to="'/collection/' + item.id"
        ><img :src="item.pezFace"
      /></RouterLink>
    </td>
    <td>{{ item.pezName }}</td>
    <td>{{ item.backingCard }}</td>
    <td>{{ item.madeIn }}</td>
    <td>{{ item.pezYear }}</td>
    <td>{{ item.pezQuantity }}</td>
  </tr>
</template>
<style scoped>
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