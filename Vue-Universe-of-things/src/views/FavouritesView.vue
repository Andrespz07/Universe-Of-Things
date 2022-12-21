<script setup>
import CardCharacters from "../components/CardCharacters.vue";
import { useCharactersFavoriteStore } from "../stores/favouritesCharacters";
const favoriteStore = useCharactersFavoriteStore();
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
  <main>
    <div class="content">
      <div
        class="content__characters"
        v-for="character in favoriteStore.FavoritesCharacters"
        :key="character"
      >
        <CardCharacters
          :id="character.id"
          :imageUrl="character.imageUrl"
          :name="character.name"
        />
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-evenly;
  align-items: center;
  margin: 3%;
  .content__characters {
    margin-top: 3%;
    padding: 1%;
  }
  p {
    font-size: 0.5em;
  }
}
</style>
