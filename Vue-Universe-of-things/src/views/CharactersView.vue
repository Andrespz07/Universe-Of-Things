<script setup>
import { useCharactersStore } from "../stores/charactersStore";
import { onBeforeMount } from "vue";
import CardCharactersVue from "../components/CardCharacters.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const store = useCharactersStore();

onBeforeMount(async () => {
  await store.fetchCharacters();
});
</script>

<template>
  <Header></Header>
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
  <Footer></Footer>
</template>
<style lang="scss" scoped></style>
