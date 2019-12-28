<template>
  <div id="app">
    <nav-bar/>
    <directory-persons/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import navBar from './components/navBar.vue'
import directoryPersons from './components/directoryPersons.vue'


export default {
  name: 'app',
  components: {
 navBar,
 directoryPersons
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

</style>
