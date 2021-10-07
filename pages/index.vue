<template>
  <div class="bgCustom py-7">
    <div class="cursor">
      <img src="../assets/picture/radar.webp" alt="radar dragon ball z">
      <div class="message"></div>
    </div>

    <MyHeader/>

    <AboutMe/>

    <MyProjects/>

    <MyFooter/>
  </div>
</template>

<script>
import Vue from "vue"
import global from "~/mixins/global"
Vue.mixin(global)

export default {
  components: true,
}
</script>

<style>
*{
  cursor: none;
}
.message{
  opacity: 0;
  visibility: hidden;
  transform: translateX(-75%);
  background: transparent;
  width: 83px;
  padding: 2px 4px;
  border-radius: 0 6px 6px 0;
  border: none;
  position: absolute;
  top: 30%;
  left: 89%;
  z-index: -1;
  color: #003101;
}
.cursor{
   position: fixed;
   width: 55px;
   height: 55px;
   margin: -10px 0 0 -10px;
   will-change: transform;
   user-select: none;
   pointer-events: none;
   z-index: 10000;
  border-radius: 100%;
 }
.bgCustom{
  background: linear-gradient(200deg,#251c79,#0e0822 70.71%);
  overflow-x: hidden;
}
.ofC{
  object-fit: contain;
}

.mbms{
  mix-blend-mode: screen;
}
/* width */
::-webkit-scrollbar {
  width: 7px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #bcbaba;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #bf49e5;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #482df3;
}
</style>
