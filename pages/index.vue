<template>
  <div class="bgCustom py-7">
    <div class="cursor">
      <img src="https://cdn.pixabay.com/photo/2017/01/31/20/13/radar-2026947_960_720.png" alt="radar dragon ball z">
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
