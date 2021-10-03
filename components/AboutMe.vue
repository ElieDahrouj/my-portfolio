<template>
  <section class="aboutMe">
    <div class="picture">
      <div class="gradientImg"></div>
      <img class="animePicture" src="../assets/picture/firstProfile.webp" alt="profile picture">
    </div>

    <div class="moreInformationAboutMe">
      <h1 class="skills"> Compétences Techniques </h1>

      <aside class="languages">
        <img class="logo ofC" src="../assets/icon/vue.webp" alt="Vue.js">
        <img class="logo ofC" src="../assets/icon/laravel.webp" alt="Laravel">
        <img class="logo ofC" src="../assets/icon/mysql.webp" alt="MySQL">
      </aside>

      <div class="w-full btnDiv justify-center align-middle flex btn">
        <button class="btnContainer">
          <a href="/CV/CV-DAHROUJ.pdf" download>Télécharger mon CV</a>
        </button>
      </div>
    </div>
  </section>
</template>

<style>
  .skills{
    opacity: 0;
    visibility: hidden;
    transform: translateY(-100%);
  }
  .aboutMe{
    width: 70%;
    margin: 75px auto 0;
    padding: 20px 0;
    display: flex;
    justify-content: space-around;
  }
  .picture{
    position: relative;
  }

  .picture img{
    transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(
      0deg) rotateY(
      0deg) rotateZ(
      5deg) skew(
      0deg,
      0deg) translateX(-100%) scale(0.1);
    transform-style: preserve-3d;
    opacity: 0;
    visibility: hidden;
    border-radius: 60px;
    max-width: 260px;
  }

  .gradientImg{
    width: 260px;
    height: 351px;
    position: absolute;
    left: auto;
    top: 0;
    border-radius: 60px;
    background-image: linear-gradient(267deg, #8129ef, #f83bc3);
    opacity: 0;
    visibility: hidden;
    transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-5deg) skew(0deg, 0deg) translateY(-200px);
    transform-style: preserve-3d;

  }
  .moreInformationAboutMe{
    width: 55%;
    color: white;
    font-weight: bold;
    font-size: 30px;
  }
  .moreInformationAboutMe h1{
    margin-bottom: 20px;
    text-align: center;
  }
  .languages{
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-wrap: wrap;
  }

  .logo{
    width: 120px;
    opacity: 0;
    visibility: hidden;
    transform: translateX(100%);
  }

  .btnDiv{
    opacity: 0;
    transform: translateX(100%);
    visibility: hidden;
  }

  .btnContainer {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    background: linear-gradient(65deg, #edb8ff, #6148ff);
    border-radius: 80px;
    transition: transform .3s;
  }
  .btnContainer a{
    padding: 26px 72px;
    border-radius: 80px;
    background-color: #0f0823;
    color: #fff;
    font-size: 22px;
    font-weight: 700;
    text-align: center
  }
  .btnContainer:hover{
    transform: scale(.8);
  }

  @media all and (max-width: 958px) {
    .aboutMe{
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .moreInformationAboutMe{
      margin-top: 50px;
      width: 100%;
    }
    .languages{
      justify-content: center;
    }
    .languages img {
      margin:0.625rem;
    }
  }

  @media all and (max-width: 426px) {
    .aboutMe {
      width: 95%;
    }
    .btnContainer a{
      padding: 25px
    }
  }
</style>
