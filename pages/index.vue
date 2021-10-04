<template>
  <div class="bgCustom py-7">
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
