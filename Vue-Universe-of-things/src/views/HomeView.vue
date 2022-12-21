<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";


</script>
<template>
  <Header></Header>
  <main>
    <img
      src="../assets/img/fondo-disney-recor.PNG"
      alt="Banner del centenario de Disney"
    />
    <div>
      <h1>100 AÑOS DE EMOCIÓN</h1>
      
      <h3>
        Descubre todos nuestros personajes a lo largo de nuestra historia y
        elige tus favoritos
      </h3>
      
      <RouterLink to="/characters" class="character_button"
        >VER PERSONAJES</RouterLink
      >
    </div>
  </main>
  <Footer></Footer>
</template>

<style lang="scss" scoped>
@import "../sass/styles.scss";

main {
  background-color: $background-color;
  font-family: $font-family;
  color: $colortext;
  img {
    width: 100%;
    display: flex;
  }
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
      h1{
        margin-bottom: 2%;
      }
    .character_button {
      text-decoration: none;
      border: 2px solid $colortext;
      background: none;
      border-radius: 35px;
      color: $colortext;
      padding: 2% 6% 2% 6%;
      font-size: 1.25em;
      margin-top: 2%;
      margin-bottom: 6%;
    }
  }
}
</style>
