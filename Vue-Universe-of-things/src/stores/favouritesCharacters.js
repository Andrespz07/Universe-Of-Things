import { defineStore } from "pinia";
import { ref } from "vue";
export const useCharactersFavoriteStore = defineStore({
  id: "favCharacters",
  state: () => ({
    FavoritesCharacters: ref([]),
  }),
  actions: {
    showCharacters(character) {
      if (this.FavoritesCharacters.indexOf(character) === -1) {
        this.FavoritesCharacters.push(character);
        console.log("funciona");
      }
    },
  },
});
