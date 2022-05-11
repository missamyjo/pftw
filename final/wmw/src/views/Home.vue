<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <ul>
      <li class="explore">
        <RouterLink to="/block">
          <img src="../assets/img/spiky_red.png" alt="explore the art kits" />
        </RouterLink>
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
    <div class="boxline">
      <div class="boxline_image">
        <RouterLink to="/kolrosing">
          <img src="../assets/img/kolrosingbox.jpg" alt="kolrosing box" />
        </RouterLink>
      </div>
      <div class="boxline_text">
        <h2>
          Artist Made <br />
          Craft Kits!
        </h2>
        <p>
          Each art kit contains all the tools necessary <br />for you to pursue
          a newly learned creative <br />skill. Enough supplies are included to
          create <br />two projects. A limited edition artist print is
          <br />included with each box. Live workshops will<br />
          be offered periodically. The kit can also be <br />completed
          independently with thoughtfully <br />designed packaging and
          instructions.
        </p>
      </div>
    </div>
  </div>
</template>

<style >
.title {
  color: white;
}
h2 {
  font-family: "RobotoSlab";
  font-size: 34px;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-align: left;
  color: #00a9a9;
}
p {
  font-family: "ZenKakuGothicNew-Regular";
  color: white;
  font-size: 17px;
  text-align: left;
}
.logo {
  max-width: 550px;
  width: 100%;
  margin: 0 0 0 80px;
}
.explore {
  max-width: 170px;
  width: 100%;
  margin: 100px 0 40px 250px;
}
ul {
  display: flex;
}
li {
  display: inline-block;
}
.block,
.clay,
.wood {
  max-width: 360px;
  width: 100%;
  margin: 0 auto;
}
.boxline {
  display: inline-block;
  margin: 32px 40px 20px 0;
}
.boxline_image {
  display: inline-block;
  margin: 30px 100px 10px 480px;
  max-width: 420px;
  vertical-align: top;
  border: solid white 3px;
  border-radius: 3px;
}
.boxline_text {
  display: inline-block;
  width: 46% @media (max-width: 400px) {
    width: 100%;
  }
}
</style>