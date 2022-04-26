<template>
<div id="Dashboard" class="container-fluid w-100 vh-100">
<div class="row align-items-center h-100 d-flex flex-column" style="padding:0px;">
    <div class="no navbar top" style="flex:2">
            <img @click="signOut()" src="../assets/icons/exit.png" style="width:25%"  alt="aaa" id="exit">
        <router-link to="/usersettings" style="width:25%">
            <img src="../assets/icons/Personal2.png" style="width:100%" alt="aaa" id="user-settings">
        </router-link>
    </div>

    <div class="no row align-items-center justify-content-center" style="flex:5">
        <div class="no row">
            <router-link to="/ReportingW">
                <img src="../assets/icons/ShotGlass.png" class="mx-auto d-block" style="width: 55%;" alt="aaa" id="drink">
            </router-link>
        </div>
    </div>

    <div class="no row align-items-center justify-content-center" style="flex:5">
        <div class="no row" style="position: relative">
            <img src="../assets/icons/WaterDropEmpty.png" class="mx-auto d-block" alt="aaa">
            <div style="position: absolute; bottom:15%; left:33%">200 ml</div>
            <!-- to będzie sie zmieniać od 15% - 70% co nam da 100/60=0.6% -->
            <div style="position: absolute; bottom:75%; left:33%">2000 ml</div>
        </div>
    </div>

    <div class="no navbar bottom" style="flex:2">
        <router-link to="/usersettings" style="width:33%">
            <img src="../assets/icons/Cog4.png" style="width:100%" alt="aaa" id="settings">
        </router-link>
        <router-link to="/home" style="width:33%">
            <img src="../assets/icons/home.png" style="width:100%" alt="aaa" id="home">
        </router-link>
        <img src="../assets/icons/Calendar.png" style="width:33%" alt="aaa" id="calendar">
    </div>
</div>
</div>
</template>

<script>
import {getAuth, signOut} from "firebase/auth"
import { mapGetters } from "vuex"

export default {
    methods: {
        signOut() {
            try{
                this.$store.dispatch('fetchUser', null);
                signOut(getAuth())
                .then(()=>{
                        this.$router.replace({name: "login"})
                        console.log("LoggedOut")
                })
            }catch(e){console.log(e.message)}
            
        }
    },
    computed: {
        ...mapGetters({
        user: "user"
        })
    },
}
</script>

<style>
html,body{
    width:100%;
    height:100%;
    margin:0;
}
.no{
    padding: 0px;
    margin: 0px;
}
.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.vertical-parent{
    position:relative
}
</style>  