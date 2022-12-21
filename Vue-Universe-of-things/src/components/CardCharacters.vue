<script setup>
import { useCharactersFavoriteStore } from "../stores/favouritesCharacters";

const props = defineProps({
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
const favoriteStore = useCharactersFavoriteStore();
const sendCharcatersFavorites = () => {
  favoriteStore.showCharacters(props.name);
  alert(`${props.name} se ha añadido a favoritos`);
};
</script>

<template>
  <div class="container">
    <img :src="imageUrl" :alt="name" />
    <p>{{ name }}</p>
    <button @click="sendCharcatersFavorites()">
      <img
        id="favoritos"
        src="../../src/assets/img/pngwing.com.png"
        alt="favourite button"
      />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "../sass/styles.scss";
.container {
  background-color: $background-color;
  padding: 0;
  width: 130px;
  height: 185px;
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
  
  button {
    border: none;
    background-color: $background-color;
    border-radius: 80%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 10px;

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

