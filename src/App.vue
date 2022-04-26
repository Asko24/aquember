<template>
  <top-header></top-header>
  <nav>
    <router-link to="/oldhomeview">OldHomeView</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link v-if="!user.loggedIn" to="/login">Login</router-link> |
    <router-link v-if="!user.loggedIn" to="/register">Register</router-link> |
    <router-link v-if="user.loggedIn" to="/home">Home</router-link> |
    <router-link to="/reporting">Reporting</router-link> | 
    <router-link v-if="!user.loggedIn" to="/welcome">Welcome</router-link> |
    <router-link to="/reportingw">ReportingW</router-link> |
    <router-link to="/appsettings">AppSettings</router-link> |
    <router-link v-if="user.loggedIn" to="/usersettings">UserSettings</router-link> |
  </nav>
  <router-view/>
</template>

<script>

import TopHeader from './components/TopHeader.vue'
import { computed , beforeMount} from "vue"
import { useStore } from 'vuex'

export default {
  components:{'top-header':TopHeader},
  beforeMount() {
    const store = useStore();
    this.user = computed(() => this.$store.state.user);
    this.$store.commit("SET_LOGGED_IN", null);
  },
  data(){
    return {
      user: null
    }
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
.dark{
  background-color:#335B71;
  color:white;
}
.light{
  background-color:#466A7E;
}
.white{
  background-color:white;
}
.grey{
  background-color:#eff2f7;
}
.buttons{
  background-color:#466A7E;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top:16px;
  margin-bottom:16px;
}
.inputs{
  width:90%;
  border:1px solid grey;
  border-top:0px;
  border-left:0px;
  border-right:0px;
  margin-top:16px;
  
}
@import'~bootstrap/dist/css/bootstrap.css';
@import './assets/toggle-switchy.css';
</style>
