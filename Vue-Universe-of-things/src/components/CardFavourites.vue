<script setup>

</script>

<template>
  <div class="container">
    <img src="../assets/img/Happy Blanca Nieves.PNG" :alt="name" />
    <p>happy</p>
    <button>
      <img
        id="favoritos"
        src="../assets/img/pngwing.com.png"
        alt="favourite button"
      />
    </button>
  </div>



</template>

<style lang="scss" scoped>
@import "../../public/sass/styles.scss";
.container {
  background-color: $background-color;
  width: 120px;
  height: 160px;
  border-radius: 5%;
  padding: 0;

  img {
    width: 100%;
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
    border-radius: 80%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 6px;
    background-color: red;

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
