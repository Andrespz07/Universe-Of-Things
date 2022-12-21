<script setup>
import { useCharactersStore } from "../stores/charactersStore";
import { onBeforeMount } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import CardCharacters from "../components/CardCharacters.vue";

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
      <CardCharacters
        :id="character._id"
        :imageUrl="character.imageUrl"
        :name="character.name"
      />
    </div>
  </div>
  <Footer></Footer>
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
