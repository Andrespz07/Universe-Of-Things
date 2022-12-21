<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <div>
      <img id="logo" src="../../src/assets/img/logo-disney.png" />
      <nav>
        <ul>
          <li id="home">
            <RouterLink to="/" class="link">HOME</RouterLink>
          </li>
          <li id="characters">
            <RouterLink to="characters" class="link">CHARACTERS</RouterLink>
          </li>
          <li id="favourites">
            <RouterLink to="favourites" class="link">FAVOURITES</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../sass/styles.scss";
header {
  background-color: rgb(255, 255, 255);
  margin-top: 1%;
  margin-bottom: 1%;

  div {
    display: flex;

    img {
      display: flex;
      justify-content: flex-start;
      width: 18vw;
      margin: auto;
    }
    nav {
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      text-align: center;

      ul {
        font-family: $font-family;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1vw;
        
      }

      #home,
      #characters,
      #favourites {
        margin: 5vw;
        font-size: 2em;
      }

      .link {
        text-decoration: none;
        color: black;
        font-weight: bold;
      }
    }
  }
}
</style>
