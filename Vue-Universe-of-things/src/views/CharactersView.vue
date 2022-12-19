<script setup>
import { useCharactersStore } from "../stores/charactersStore";
import { onBeforeMount } from "vue";
import CardCharactersVue from "../components/CardCharacters.vue";

const store = useCharactersStore();

onBeforeMount(async () => {
  await store.fetchCharacters();
});
</script>

<template>
  <div class="content">
    <div
      class="content__characters"
      v-for="character in store.characters"
      :key="character"
    >
      <CardCharactersVue
        :id="character.id"
        :imageUrl="character.imageUrl"
        :name="character.name"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
