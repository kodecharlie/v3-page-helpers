<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <PositiveInts/>
</template>

<script>
import PositiveInts from './views/PositiveInts.vue'

export default {
  name: 'App',
  components: {
    PositiveInts
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
