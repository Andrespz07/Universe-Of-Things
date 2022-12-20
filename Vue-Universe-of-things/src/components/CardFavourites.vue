<script setup></script>

<template>
  <div class="container">
    <img
      src="../assets/img/Happy Blanca Nieves.PNG"
      alt="Happy Blanca Nieves"
    />
    <p>Happy</p>

    <div>
      <button aria-label="delete">
        <img
          id="trash"
          src="../assets/img/trash3-fill.svg"
          alt="trash button"
        />
      </button>
      <button aria-label="edit">
        <img
          id="pencil"
          src="../assets/img/pencil-square.svg"
          alt="pencil button"
        />
      </button>
    </div>
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
    width: 100%;
    height: 90px;
    border-radius: 5%;
  }
  p {
    font-family: $font-family;
    color: $colortext;
    text-align: center;
  }

  div {
    display: flex;

    button {
      border: none;
      background-color: $background-color;
      border-radius: 50%;
      margin: auto;
      display: flex;
      justify-content: right;

      #trash,
      > #pencil {
        border: none;
        background-color: $background-color;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: right;
      }

      button {
        border: none;
        background-color: $background-color;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        margin: auto;
        display: flex;
        justify-content: left;
      }

      #edit {
        border: none;
        background-color: $background-color;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: left;
      }
    }
  }
}
</style>
