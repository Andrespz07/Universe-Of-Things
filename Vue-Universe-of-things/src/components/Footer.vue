<template>
  <footer>
    <p>©Copyright 2022</p>
    <ul>
      <li>
        <img src="../../src/assets/img/instagram.png" alt="Instagram Logo" />
      </li>
      <li>
        <img
          src="../../src/assets/img/signo-de-twitter.png"
          alt="Twitter Logo"
        />
      </li>
      <li>
        <img src="../../src/assets/img/facebook.png" alt="Facebook Logo" />
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
@import "../sass/styles.scss";
footer {
  width: 100%;
  height: 80px;
  font-family: $font-family;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin-left: 1%;
    font-size: 2em;
  }
  ul {
    display: flex;
    width: 20%;
    li {
      list-style: none;

      img {
        background-color: white;
        width: 30%;
      }
    }
  }
}
</style>
