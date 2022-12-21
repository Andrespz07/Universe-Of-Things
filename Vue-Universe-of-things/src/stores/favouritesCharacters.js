import { defineStore } from "pinia";
import { ref } from "vue";
export const useCharactersFavoriteStore = defineStore({
  id: "FavoritesCharacters",
  state: () => ({
    FavoritesCharacters: ref([]),
  }),
  actions: {
    showCharacters(character) {
      if (this.FavoritesCharacters.indexOf(character) === -1) {
        this.FavoritesCharacters.push(character);
      }
    },
    deleteCharacter(name) {
      const searchCharacter = this.FavoritesCharacters.find(
        (item) => item.name === name
      );
      if (searchCharacter != undefined) {
        const index = this.FavoritesCharacters.indexOf(searchCharacter);
        this.FavoritesCharacters.splice(index, 1);
        return;
      }
    },
  },
});
