<template>
  <div id="app">
    <app-header></app-header>
      <router-view />
  </div>
</template>

<script>
import appHeader from "./components/common/header"; 
export default {
  name: "App",
  components: {
    appHeader
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 14px;
}
</style>
