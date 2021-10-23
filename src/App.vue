<template>
  <nav-bar></nav-bar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>


import NavBar from "./components/common/NavBar.vue";
export default {
  name: 'App',
  components: {NavBar},
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Helvetica, sans-serif;
}



</style>
