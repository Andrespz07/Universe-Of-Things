import { defineStore } from "pinia";
import { ref } from "vue";

export const useCharactersStore = defineStore("characters", () => {
  const characters = ref([]);

  async function fetchCharacters() {
    await fetch("https://api.disneyapi.dev/characters")
      .then((res) => res.json())
      .then((json) => {
        this.characters = json.data;
      });
  }

  return { characters, fetchCharacters };
});
