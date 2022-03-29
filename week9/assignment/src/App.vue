<script setup>
import { reactive } from "vue";
import ItemRow from "./components/ItemRow.vue";

const pez = [
  {
    pezName: "Wonder Woman",
    pezFace: "images/wonderwoman.jpg",
    backingCard: "Yes",
    madeIn: "Slovenia",
    pezYear: "1985",
    pezQuantity: "3",
    id: 1,
  },
  {
    pezName: "Marge Simpson",
    pezFace: "images/marge.jpg",
    backingCard: "Yes",
    madeIn: "Hungary",
    pezYear: "unknown",
    pezQuantity: "1",
    id: 2,
  },
  {
    pezName: "Darth Vader",
    pezFace: "images/darth.jpg",
    backingCard: "Yes",
    madeIn: "China",
    pezYear: "1997",
    pezQuantity: "2",
    id: 3,
  },
  {
    pezName: "C-3PO",
    pezFace: "images/c3po.jpg",
    backingCard: "Yes",
    madeIn: "Hungary",
    pezYear: "1997",
    pezQuantity: "1",
    id: 4,
  },
  {
    pezName: "Princess Leia",
    pezFace: "images/leia.jpg",
    backingCard: "No",
    madeIn: "Hungary",
    pezYear: "1997",
    pezQuantity: "1",
    id: 5,
  },
  {
    pezName: "Yoda",
    pezFace: "images/yoda.jpg",
    backingCard: "No",
    madeIn: "Slovenia",
    pezYear: "1997",
    pezQuantity: "1",
    id: 6,
  },
  {
    pezName: "Garfield",
    pezFace: "images/garfield.jpg",
    backingCard: "No",
    madeIn: "China",
    pezYear: "unknown",
    pezQuantity: "1",
    id: 7,
  },
  {
    pezName: "Nermal",
    pezFace: "images/nermal.jpg",
    backingCard: "No",
    madeIn: "Slovenia",
    pezYear: "unknown",
    pezQuantity: "1",
    id: 8,
  },
];
const newPezObj = {
  pezFace: "",
  pezName: "",
  backingCard: "",
  madeIn: "",
  pezYear: "",
  pezQuantity: "",
};
const state = reactive({ pez, newPezObj });
function addNewPez() {
  state.pez.push({
    pezFace: state.newPezObj.pezFace,
    pezName: state.newPezObj.pezName,
    backingCard: state.newPezObj.backingCard,
    madeIn: state.newPezObj.madeIn,
    pezYear: state.newPezObj.pezYear,
    pezQuantity: state.newPezObj.pezQuantity,
    id: state.pez.length + 1,
  });
  state.newPezObj.pezFace = "";
  state.newPezObj.pezName = "";
  state.newPezObj.backingCard = "";
  state.newPezObj.madeIn = "";
  state.newPezObj.pezYear = "";
  state.newPezObj.pezQuantity = "";
}
function handleDelete(itemToDelete) {
  console.log(itemToDelete.id, itemToDelete.pezName);
  state.pez = state.pez.filter((itemToCheck) => {
    return itemToDelete !== itemToCheck;
  });
}
</script>

<template>
  <div class="app-wrapper">
    <h1>My PEZ Collection</h1>
    <div class="collection-wrapper">
      <table>
        <tr>
          <th>Pez Face</th>
          <th>Pez Name</th>
          <th>Backing Card?</th>
          <th>Made In</th>
          <th>Year</th>
          <th>How Many?</th>
        </tr>
        <ItemRow
          v-for="(pez, index) in state.pez"
          v-bind:key="index"
          v-bind:item="pez"
          v-bind:index="index"
          v-on:delete-item="handleDelete"
        />
      </table>
      <form v-on:submit.prevent="submitHandler" class="new-pez-form">
        <fieldset>
          <legend>Add a Pez to the collection!</legend>
          <div>
            <label for="pezFace">Pez Face</label>
            <input id="pezFace" type="text" v-model="newPezObj.pezFace" />
          </div>
          <div>
            <label for="pezName">Pez Name</label>
            <input id="name" type="text" v-model="newPezObj.pezName" />
          </div>
          <div>
            <label for="backingCard">Backing Card?</label>
            <input
              id="backingCard"
              input
              type="checkbox"
              class="checkmark"
              v-model="newPezObj.backingCard"
              true-value="yes"
              false-value="no"
            />
          </div>
          <div>
            <label for="madeIn">Made In</label>
            <input id="madeIn" type="text" v-model="newPezObj.madeIn" />
          </div>
          <div>
            <label for="pezYear">Year</label>
            <input id="pezYear" type="number" v-model="newPezObj.pezYear" />
          </div>
          <div>
            <label for="pezQuantity">Quantity</label>
            <input
              id="pezQuantity"
              type="number"
              v-model="newPezObj.pezQuantity"
            />
          </div>
        </fieldset>
        <button type="submit">Submit your Pez!</button>
      </form>
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: "Pez";
  src: local("Pez"), url(fonts/Pez_font.TTF) format("truetype");
}
h1 {
  font-family: "Pez", "Courier New", Courier, monospace;
  font-size: 65px;
  text-align: center;
}
.app-wrapper {
  font-family: "Courier New", Courier, monospace;
  background: hotpink;
}
.collection-wrapper {
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
legend {
  padding-top: 1rem;
  text-align: left;
  text-transform: uppercase;
  font-weight: bold;
}
.new-pez-form {
  width: 1017px;
  margin: 2px auto;
  background-color: white;
  border-radius: 10px;
  text-align: left;
}
.new-pez-form fieldset {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: none;
}
.new-pez-form div {
  margin: 4px;
  align-items: center;
}
.new-pez-form input {
  background-color: hotpink;
  color: white;
  text-transform: uppercase;
  display: block;
  border-color: black;
  border-radius: 3px;
  border-width: 0 3px 3px 0;
  padding: 8px;
}
button {
  background-color: hotpink;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 3px;
  border-color: black;
  padding: 8px;
}
button[type="submit"] {
  font-size: 20px;
  margin-bottom: 1rem;
  padding: 5px 23rem;
  margin-left: 2rem;
}
input[type="checkbox"] {
  width: 30px;
  height: 30px;
  border: black;
  border-radius: 3px;
  accent-color: hotpink;
}
input[type="number"] {
  width: 50px;
  margin: auto;
}
</style>
