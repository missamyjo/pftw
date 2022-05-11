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
    <h1 class="woodfont">Kolrosing</h1>
    <img
      class="woodpic"
      src="../assets/img/wood_front.jpg"
      alt="kolrosing
    instructions"
    />
  </div>
</template>

<style >
.woodfont {
  font-size: 3rem;
  color: white;
}
.woodpic {
  border: solid white 3px;
  border-radius: 3px;
}
</style>