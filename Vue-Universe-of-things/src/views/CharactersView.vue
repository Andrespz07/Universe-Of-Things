<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<style></style>
<script setup>
import { useCharactersStore } from "../stores/charactersStore";
import { onBeforeMount } from "vue";
import CardCharactersVue from "../components/CardCharacters.vue";
import HeaderViewVue from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import CardCharacters from "../components/CardCharacters.vue";

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
  <Footer> </Footer>
</template>
<style lang="scss" scoped></style>
