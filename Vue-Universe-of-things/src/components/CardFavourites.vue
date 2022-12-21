<script setup>
import StarComponent from "./StarComponent.vue";
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
console.log(props.id);
const favoriteStore = useCharactersFavoriteStore();
const deleteFavorites = (idchar) => {
  favoriteStore.deleteCharacter(idchar);
};
</script>

<template>
  <div class="container">
    <div class="card">
      <img :src="imageUrl" :alt="name" />
      <p>{{ name }}</p>
      <div>
        <button aria-label="delete">
          <img
            id="trash"
            src="../assets/img/trash3-fill.svg"
            alt="trash button"
            @click="deleteFavorites(props.name)"
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
    <StarComponent />
  </div>
</template>

<style lang="scss" scoped>
@import "../src/sass/styles.scss";

.container {
  width: 130px;
  height: 210px;
  padding: 0;
  text-align: center;

  .card {
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

    div {
      margin-top: 15px;
      display: flex;

      button {
        border: none;
        background-color: $background-color;
        border-radius: 50%;
        margin: auto;
        display: flex;
        justify-content: right;

        #trash,
        #pencil {
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
}
</style>
