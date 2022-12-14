
<script setup></script>
<template>
  <main>
    <img
      src="src/assets/fondo-disney.PNG"
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
      <input type="button" value="VER PERSONAJES" />
    </div>

  </main>

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
        input {
          border: 2px solid #FFFFFF;
          background: none;
          border-radius: 35px;
          color: #FFFFFF;
          padding: 2% 6% 2% 6%;
          font-size: 1.25em;
        }
    }
}
</style>