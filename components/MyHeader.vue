<template>
  <header class="introduceMyself">
    <h1 class="title">Elie Dahrouj, </h1>

    <h1 class="title">Développeur Web Full Stack </h1>

    <h2 class="txt">
      Passioné par les dernières nouveautés technologiques, j'adore relever des défis afin
      d’approfondir mon expérience en tant que développeur.
    </h2>

    <img @mouseover="fiveStarEnterHover" class="w-56 absolute circle mbms" src="../assets/picture/circle.webp" alt="circle">
    <img @mouseleave="fiveStarLeaverHover" class="w-56 absolute circle mbms fiveStar z-10" src="../assets/picture/numberFive.webp" alt="five start dbz">

    <img class="w-56 absolute donut mbms" src="../assets/picture/donut.webp" alt="donut">
  </header>
</template>

<style>
.fiveStar{
  opacity: 0;
  visibility: hidden;
}
.introduceMyself{
  width: 70%;
  margin: 0 auto 70px;
}
.title{
  color: white;
  margin-top: 0;
  font-size: 50px;
  font-weight: 700;
  opacity: 0;
  visibility: hidden;
  transform: translateX(-100%) scale(0.5);
}
.txt{
  color: #b8b5cf;
  font-size: 24px;
  width: 800px;
  max-width: 100%;
  opacity: 0;
  visibility: hidden;
  transform: translateX(100%);
}
.circle {
  right: 10%;
  top: 2%;
  transform: scale(0.7);
  z-index: 0;
}
.donut{
  transform: scale(0.5);
  z-index: 0;
  bottom: 5%;
  right: 0;
}
@media all and (max-width: 426px) {
  .introduceMyself {
    width: 95%;
  }
}
</style>
