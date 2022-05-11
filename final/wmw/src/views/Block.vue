<template>
  <div>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink> •
          <RouterLink to="/block">Block Print</RouterLink> •
          <RouterLink to="/clay">Clay Ornament</RouterLink> •
          <RouterLink to="/kolrosing">Kolrosing</RouterLink>
        </nav>
      </div>
    </header>
    <h1 class="blockfont">Block Print</h1>
    <img
      class="blockpic"
      src="../assets/img/block_front.jpg"
      alt="block print instructions"
    />
  </div>
</template>

<style >
.blockfont {
  font-size: 3rem;
  color: white;
}
.blockpic {
  border: solid white 3px;
  border-radius: 3px;
}
</style>