<template>

<form>
    <p class="clasificacion">
      <input id="radio1" type="radio" name="estrellas" value="5">
      <label for="radio1">★</label>
      <input id="radio2" type="radio" name="estrellas" value="4">
      <label for="radio2">★</label>
      <input id="radio3" type="radio" name="estrellas" value="3">
      <label for="radio3">★</label>
      <input id="radio4" type="radio" name="estrellas" value="2">
      <label for="radio4">★</label>
      <input id="radio5" type="radio" name="estrellas" value="1">
      <label for="radio5">★</label>
    </p>
  </form>

</template>

<style lang="scss" scoped>
 @import "../../public/sass/styles.scss";


#form {
  width: 250px;
  margin: 0 auto;
  height: 50px;

    p {
    text-align: center;
    }

         label {
        font-size: 20px;
        }

        input[type="radio"] {
        display: none;
        }

        label {
        color:$starcoloroff;

        } :hover,
        :hover ~ label {
        color: $starcoloron;
        }

    .clasificacion {
    direction: rtl;
    unicode-bidi: bidi-override;
    }

       

        input[type="radio"]:checked ~ label {
        color: $starcoloron;
        }
}

</style>