<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <img
      src="src/assets/fondo-disney.PNG"
      alt="Banner del centenario de Disney"
    />
    <div>
    <h1>100 AÑOS DE EMOCIÓN</h1>
<br>
    <h2>Descubre todos nuestros personajes a lo largo de nuestra historia y elige tus favoritos</h2>
<br>
    <input type="button" value="VER PERONAJES">  
  </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../../public/sass/styles.scss";
main{
  background-color: $background-color; 
    div {
      justify-content: center;
      
    }
}
</style>