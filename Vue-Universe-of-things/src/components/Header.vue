<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <div>
      <img id="img" src="../../src/assets/img/logo-disney.png" />
      <nav>
        <ul>
          <li id="home">
            <RouterLink to="/" class="link">Home</RouterLink>
          </li>
          <li id="characters">
            <RouterLink to="characters" class="link">Characters</RouterLink>
          </li>
          <li id="favourites">
            <RouterLink to="favourites" class="link">Favourites</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../sass/styles.scss";
header {
  // font-family: $font-family;
  // width: 100%;
  background-color: rgb(193, 20, 20);
  margin-top: 1%;
  margin-bottom: 1%;

  div {
    display: flex;

    #img {
      display: flex;
      justify-content: flex-start;
      width: 25vw;
      margin-left: 3%;
    }
    nav {
      display: flex;
      justify-content: space-between;
      // width: 60%;
      box-sizing: border-box;

      ul {
        font-family: $font-family;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // width: 60%;
        margin-left: 10%;
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
