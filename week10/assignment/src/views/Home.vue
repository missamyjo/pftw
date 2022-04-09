<template>
  <h1>Welcome</h1>
  <p>
    I started collecting Pez candy dispensers when I was a kid.<br />This site
    features some favorites from
    <RouterLink to="/collection">my Pez collection</RouterLink>.
  </p>
  <div container>
    <h2>Pez Fun Facts!</h2>
    <p>Pez was invented in Austria in 1927.</p>
    <p>A Pez dispenser holds 12 candy pieces.</p>
    <p>
      The logo was drawn to give the appearance that the letters are built out
      of 44 brick-like Pez mints (14 bricks in the P and 15 in each of the E and
      Z).
    </p>
    <p>
      The first PEZ dispensers were known as "regulars" - similar in shape to a
      cigarette lighter and dispensed an adult breath mint marketed as an
      alternative to tobacco.
    </p>
    <p>
      In 1955, the Pez company placed heads on the dispensers and marketed them
      for children.
    </p>
  </div>
  <footer>
    <a href="https://int.pez.com/en/Home">Pez Offical</a> |
    <a href="https://en.wikipedia.org/wiki/Pez">Pez Wiki</a>
  </footer>
</template>
<style scoped>
h2 {
  text-align: center;
}
div {
  background: linear-gradient(yellowgreen, yellow);
  width: 800px;
  border: 12px double black;
  border-radius: 12px;
  padding: 0 2.5rem 0.5rem 2.5rem;
  margin: 0 auto;
  text-align: left;
}
footer {
  padding: 20px;
}
a {
  color: black;
  text-decoration: none;
}
a:hover {
  color: greenyellow;
  text-decoration: none;
}
</style>
