<template>
  <header class="introduceMyself">
    <h1 class="title">Elie Dahrouj, </h1>

    <h1 class="title">Développeur Web Full Stack </h1>

    <h4 class="txt">
      Passioné par les dernières nouveautés technologiques, j'adore relever des défis afin
      d’approfondir mon expérience en tant que développeur.
    </h4>
  </header>
</template>

<style>
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

  @media all and (max-width: 426px) {
    .introduceMyself {
      width: 95%;
    }
  }
</style>
