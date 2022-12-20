<script setup>
import HeaderViewVue from "../components/HeaderView.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
  <HeaderViewVue />
  <main>
    <img
      src="src/assets/fondo-disney-recor.PNG"
      alt="Banner del centenario de Disney"
    />
    <div>
      <h1>100 AÑOS DE EMOCIÓN</h1>
      <br />
      <h2>
        Descubre todos nuestros personajes a lo largo de nuestra historia y
        elige tus favoritos
      </h2>
      <br />
      <RouterLink to="/characters" class="character_button"
        >VER PERSONAJES</RouterLink
      >
    </div>
  </main>
  <Footer>
    
  </Footer>
</template>

<style lang="scss" scoped>
@import "../../public/sass/styles.scss";

main {
  background-color: $background-color;
  font-family: $font-family;
  color: white;
  img {
    width: 100%;
  }
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .character_button {
      text-decoration: none;
      border: 2px solid #ffffff;
      background: none;
      border-radius: 35px;
      color: #ffffff;
      padding: 2% 6% 2% 6%;
      font-size: 1.25em;
      margin-top: 2%;
      margin-bottom: 6%;
    }
  }
}
</style>
