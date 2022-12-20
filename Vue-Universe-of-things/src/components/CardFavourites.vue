<script setup>

</script>

<template>

  <div class="container">
   <img src="../assets/Happy Blanca Nieves.PNG" alt="Happy Blanca Nieves">
   <p>Happy</p>
   <!-- <button><img id="papelera" src="" alt="favourite button"></button>
    -->
    <i class="bi bi-trash3-fill"></i>
  <img src="../assets/img/trash3-fill.svg">
  </div>
    
  

</template>

<style lang="scss" scoped>
@import "../../public/sass/styles.scss";
.container{
  background-color: $background-color;
  width: 108px;
  height: 160px;
  border-radius: 5%;

  img{
    width: 108px;
    height: 90px;
    border-radius: 5%;
  }
  p{
    font-family: $font-family;
    color: white;
    text-align: center;
  }
  // button{
  //   border: none;
  //   background-color: none;
  //   border-radius: 50% ;
  //   width: 20px;
  //   height:20px;
  //   display: flex;
  //   justify-content: center;

    // #favoritos {
    // border: none;
    // background-color: none;
    // border-radius: 50% ;
    // width: 20px;
    // height:20px;
    // display: flex;
    // justify-content: center;
  
      
    
    }
//   }
// }

</style>
