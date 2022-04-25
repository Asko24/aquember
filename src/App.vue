<template>
  <top-header></top-header>
  <nav>
    <router-link to="/oldhomeview">OldHomeView</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/home">Home</router-link> |
    <router-link to="/reporting">Reporting</router-link> | 
    <router-link to="/welcome">Welcome</router-link> |
    <router-link to="/loginw">LoginW</router-link> |
    <router-link to="/registerw">RegisterW</router-link> |
    <router-link to="/reportingw">ReportingW</router-link>
  </nav>
  <router-view/>
</template>

<script>

import TopHeader from './components/TopHeader.vue'

export default {
  components:{'top-header':TopHeader},
  
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.dropdown-menu {
  max-height: 150px;
  overflow-y: auto;
}
@import'~bootstrap/dist/css/bootstrap.css'
</style>
