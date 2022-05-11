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
    <h1 class="clayfont">Clay Ornament</h1>
    <img
      class="claypic"
      src="../assets/img/clay_front.jpg"
      alt="clay ornament instructions"
    />
  </div>
</template>

<style >
.clayfont {
  font-size: 3rem;
  color: white;
}
.claypic {
  border: solid white 3px;
  border-radius: 3px;
}
</style>