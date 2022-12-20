<script setup></script>

<template>
  <div class="container">
    <img
      src="../assets/img/Happy Blanca Nieves.PNG"
      alt="Happy Blanca Nieves"
    />
    <p>Happy</p>
    <button><img id="favoritos" src="" alt="favourite button" /></button>
  </div>
</template>

<style lang="scss" scoped>
@import "../../public/sass/styles.scss";
.container {
  background-color: $background-color;
  width: 120px;
  height: 160px;
  border-radius: 5%;

  img {
    width: 120px;
    height: 90px;
    border-radius: 5%;
  }
  p {
    font-family: $font-family;
    color: white;
    text-align: center;
  }
  button {
    border: none;
    background-color: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;

    #favoritos {
      border: none;
      background-color: none;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
