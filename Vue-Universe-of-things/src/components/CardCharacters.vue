<script setup>
defineProps({
  id: {
    type: Number,
    default: null,
  },
  imageUrl: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <div class="container">
    <img :src="imageUrl" :alt="name" />
    <p>{{ name }}</p>
    <button>
      <img
        id="favoritos"
        src="../assets/pngwing.com.png"
        alt="favourite button"
      />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "../sass/styles.scss";
.container {
  background-color: $background-color;
  width: 130px;
  height: 185px;
  border-radius: 5%;

  img {
    width: 130px;
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
    margin-top: 20px;
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
