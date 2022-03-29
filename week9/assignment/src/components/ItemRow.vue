<script setup>
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
    <td><img :src="item.pezFace" /></td>
    <td>{{ item.pezName }}</td>
    <td>{{ item.backingCard }}</td>
    <td>{{ item.madeIn }}</td>
    <td>{{ item.pezYear }}</td>
    <td>{{ item.pezQuantity }}</td>
    <td>
      <button type="button" v-on:click="$emit('deleteItem', item)">
        Delete
      </button>
    </td>
  </tr>
</template>