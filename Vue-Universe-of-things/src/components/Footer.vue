<template>
  <footer>
    <p>©Copyright 2022</p>
    <ul>
      <li><img src="../assets/instagram.png" alt="Instagram Logo" /></li>
      <li><img src="../assets/signo-de-twitter.png" alt="Twitter Logo" /></li>
      <li><img src="../assets/facebook.png" alt="Facebook Logo" /></li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
@import "../../public/sass/styles.scss";
footer {
  width: 100%;
  font-family: "Open Sans", sans-serif;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 2em;
  }
  ul {
    display: flex;
    li {
      list-style: none;

      img {
        background-color: white;
        width: 10%;
      }
    }
  }
}
</style>
