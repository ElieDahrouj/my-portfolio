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
</style>
