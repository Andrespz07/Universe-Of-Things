<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <img id="img" src="../assets/logo-disney.png" />
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
  </header>
</template>

<style lang="scss" scoped>
@import "../sass/styles.scss";
header {
  font-family: $font-family;
  width: 100%;
  background-color: white;
  margin-top: 1%;
  margin-bottom: 1%;

  nav {
    display: flex;
    width: 60%;
    box-sizing: border-box;

    #img {
      display: flex;
      justify-content: flex-start;
      margin-left: 5%;
    }

    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 60%;
      margin-left: 25%;
    }

    #home {
      padding: 0.5em 1.5em;
      font-size: 2em;
    }

    #characters {
      padding: 0.5em 1.5em;
      font-size: 2em;
    }

    #favourites {
      padding: 0.5em 1.5em;
      font-size: 2em;
    }

    .link {
      text-decoration: none;
      color: black;
      font-weight: bold;
    }
  }
}
</style>
