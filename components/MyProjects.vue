<template>
  <section class="myProject">
    <h1>Mes projets</h1>

    <img @mouseover="fourStarEnterHover" class="w-56 absolute circleProject cpov mbms" src="../assets/picture/circle.webp" alt="circle">
    <img @mouseleave="fourStarLeaverHover" class="w-56 absolute circleProject fourStar mbms" src="../assets/picture/numberFour.webp" alt="dbz four star">

    <div v-observe-visibility="{callback:visibilityShopApp, intersection:{threshold:0.5}}" class="d-flex justify-around mt-12 fw">
      <img class="w-60 m-4" src="../assets/qrCodes/heavensShopApplication.svg" alt="qrCode heavens shop application">

      <div class="d-flex flex-col mx-9">
        <p class="text-white text-2xl shopApp">Projet d'application mobile effectué en fin de 2ème année.</p>
        <p class="text-white text-2xl shopApp">Langages utilisés : <span class="font-bold">Vue.js</span> et <span class="font-bold">Ionic</span></p>

        <aside class="d-flex justify-around align-middle mt-14">
          <img class="w-28 shopApp ofC" src="../assets/icon/ionic.webp" alt="Ionic">
          <img class="w-28 shopApp ofC" src="../assets/icon/vue.webp" alt="Vue.js">
        </aside>
      </div>
    </div>

    <div v-observe-visibility="{callback:visibilityEshop, intersection:{threshold:0.5}}" class="d-flex justify-around mt-24 fw relative">
      <div class="d-flex flex-col mx-9">
        <p class="text-white text-2xl eshop">Projet d'e-commerce effectué en Full Stack en fin de 2ème année.</p>
        <p class="text-white text-2xl eshop">Langages utilisés : <span class="font-bold">Vue.js</span> et <span class="font-bold">Laravel</span></p>
        <p class="text-white text-2xl eshop">Lien version Desktop : <a class="shop font-bold" rel="noopener" href="https://heavens-shop.herokuapp.com/" target="_blank">E-commerce</a></p>

        <aside class="d-flex justify-around align-middle mt-14">
          <img class="w-28 eshop ofC" src="../assets/icon/vue.webp" alt="Vue.js">
          <img class="w-28 eshop ofC" src="../assets/icon/laravel.webp" alt="laravel">
        </aside>
      </div>

      <img class="w-56 absolute miniDonut miniDonutFirst mbms" src="../assets/picture/donut.webp" alt="circle">
      <img class="w-56 absolute miniDonut miniDonutsSecond mbms" src="../assets/picture/donut.webp" alt="circle">

      <img class="w-60 m-4" src="../assets/qrCodes/heavensShopEcommerce.png" alt="heavens shop e-commerce">
    </div>

    <div class="d-flex justify-around mt-24 fw">
      <img class="w-48 m-4" src="../assets/qrCodes/electronicRepairGithub.png" alt="electronic repair github">

      <div v-observe-visibility="{callback:visibilityProjectElectronic, intersection:{threshold:0.5}}" class="d-flex flex-col mx-9">
        <p class="text-white text-2xl projectElectronic">Projet d'application Mobile effectué en fin de 3ème année.</p>
        <p class="text-white text-2xl projectElectronic">Langages utilisés : <span class="font-bold">React Native</span> et <span class="font-bold">Laravel</span></p>
        <p class="text-white text-2xl projectElectronic">Lien du github de l'application : <a class="shop font-bold" rel="noopener" href="https://github.com/ElieDahrouj/electronic_repair" target="_blank">Electronic Repair</a></p>

        <aside class="d-flex justify-around align-middle mt-14">
          <img class="w-28 projectElectronic ofC" src="../assets/icon/react-native.webp" alt="react native">
          <img class="w-28 projectElectronic ofC" src="../assets/icon/vue.webp" alt="Vue.js">
        </aside>
      </div>
    </div>

    <div v-observe-visibility="{callback:visibilityChanged, intersection:{threshold:0.2}}" class="d-flex justify-around mt-24 fw relative">
      <div class="d-flex flex-col mx-9">
        <p class="text-white weatherApi text-2xl">Projet effectué en cours de 2ème année en utilisant <span class="font-bold">Weather API </span></p>
        <p class="text-white weatherApi text-2xl">Langages utilisés : <span class="font-bold">Vue.js</span> et <span class="font-bold">Ionic</span></p>

        <aside class="d-flex justify-around align-middle mt-14">
          <img class="w-28 weatherApi ofC" src="../assets/icon/ionic.webp" alt="Ionic">
          <img class="w-28 weatherApi ofC" src="../assets/icon/vue.webp" alt="Vue.js">
        </aside>
      </div>

      <img class="w-56 absolute donutProject mbms" src="../assets/picture/donut.webp" alt="circle">

      <img class="w-60 m-4" src="../assets/qrCodes/weather.png" alt="weather application">
    </div>
  </section>
</template>

<style>
.cpov{
  opacity: 1;
  visibility: unset;
}
.fourStar{
  visibility: hidden;
  opacity: 0;
}
.miniDonut{
  transform: scale(0.2);
  z-index: 0;
}
.miniDonutFirst{
  top: 15%;
  right: -5%;
}
.miniDonutsSecond{
  top: 10%;
  right: -17%;
}
.donutProject{
  transform: scale(0.6);
  z-index: 0;
  bottom: 29%;
  left: -13%;
}
.circleProject {
  left: 4%;
  transform: scale(0.8);
  z-index: 0;
}
.eshop{
  opacity: 0;
  visibility: hidden;
  transform: translateX(-100%);
}
.shopApp{
  opacity: 0;
  visibility: hidden;
  transform: translateX(-100%);
}
.projectElectronic{
   opacity: 0;
   visibility: hidden;
   transform: translateY(-100%);
 }
.weatherApi{
  opacity: 0;
  visibility: hidden;
  transform: translateX(-100%);
}
.myProject{
  width: 70%;
  margin: 75px auto 0;
}
.myProject h1{
  color: white;
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  opacity: 0;
  transform: translateY(100%);
  visibility: hidden;
}
.d-flex{
  display: flex;
}
.shop{
  transition: all 200ms ease-out;
}
.shop:hover{
  color:  #6952EE;
}

@media all and (max-width: 958px) {
  .myProject{
    width: 100%;
    padding:0 5px;
  }
  .fw{
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
