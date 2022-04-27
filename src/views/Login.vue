<template>
    <div id="Dashboard" class="container-fluid w-100 vh-100">
        <div class="row align-items-center h-100 d-flex flex-column" style="padding:0px;">
            <div class="row no vertical-parent dark" style="flex:8;">
                <div class="no vertical-center" >
                    <h2 class="no">Login to your app</h2>
                </div>
                
            </div>
            <div class="no row vertical-parent white" style="padding:0px;margin:0px; flex:16; ">
                <div class="no vertical-center " > 
                <div class="col-md-12" style=" position:relative;">
                    <div class="email">
                        <input type="email" class="inputs" v-model="email" placeholder="login">
                    </div>
                    <div class="password" >
                        <input type="password" class="inputs" v-model="password" placeholder="password">
                    </div>
                </div>
                </div>
            </div>
            
            <div class="row no vertical-parent" style="flex:24;">
                <div class="no vertical-center ">
                    <div class="no row">
                        <div class="no col-12 ">
                            <button @click="login()" class="align-middle buttons" style="width:95%; height:70%;" id="login-login">
                                Login
                            </button>
                        </div>
                    </div>
                    <div class="no row error" v-if="error !== ''">{{error}}</div>
                    <div class="no row">
                        <div class="no col-12 " >
                            <router-link to="/register">
                                <button class="align-middle buttons " style="width:95%; height:70%;" id="register-login">
                                    Register
                                </button>
                            </router-link>
                        </div>
                        
                    </div>
                </div>
            </div>
           
            
        </div>    
    </div>
    
  
</template>

<script>
import {getAuth, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import { query, collection, writeBatch, doc, getDocs, where } from "firebase/firestore";
import db from '../main.js'

    export default {
        data() {
            return {
                email: '',
                password: '',
                error: ''
            }
        },
        methods: {
            async login(){
                try{
                    var userData = null;
                    const auth = getAuth()
                    onAuthStateChanged(auth, (user) => {
                        if (user) {
                            this.$store.dispatch('fetchUser', user);
                            userData = user
                        }
                        console.log("LoggedIn:", this.$store.state.user.loggedIn)
                    });
                    await signInWithEmailAndPassword(getAuth(), this.email, this.password)
                    this.$router.replace({name: "home"})
                    console.log("Zalogowano:", userData)  
                    console.log(this.$store.state.user.loggedIn)
                    // await getDataFromDatabase()
                    const userEmail = this.$store.state.user.data.email
            const q = query(collection(db, "users"), where("email","==", userEmail));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data(),); 
                this.user_doc_id = doc.id;
                this.$store.state.user.permissionN = doc.data().notifications;
                this.$store.state.user.permissionV = doc.data().vibration;
                this.$store.state.user.permissionS = doc.data().sound;
                this.$store.state.user.notificationTimeStart = doc.data().notifications_time_start;
                this.$store.state.user.notificationTimeEnd = doc.data().notifications_time_end;
        })
                    this.backgroundNotif()
                }catch(e){
                    console.log(e.message)
                    this.error = e.message
                }
            },
            backgroundNotif(){
            if(this.$store.state.user.loggedIn){
                console.log("user is logged in")
            }
            console.log(this.$store.state.user.notificationTimeStart, this.$store.state.user.notificationTimeEnd)
                const d = new Date();
                let hour = d.getHours();
                console.log("hour: ", hour)
            console.log("user permission:", this.$store.state.user.permissionN)
            if(this.$store.state.user.loggedIn && this.$store.state.user.permissionN && this.$store.state.user.notificationTimeStart <= hour && hour < this.$store.state.user.notificationTimeEnd){
                console.log("notification status: ", this.$store.state.user.permissionN, this.$store.state.user.permissionV, this.$store.state.user.permissionS)
                Notification.requestPermission().then(function(result){
                console.log(result)
                })
                if(this.$store.state.user.permissionV){
                    navigator.vibrate(500);
                }
                if(this.$store.state.user.permissionS){
                    playSound(importedSound)
                }
                
                var img = importedAppIcon;
                var text = 'Time to drink water!';
                var notification = new Notification('Aquember friendly reminds', { body: text, icon: img });
                
            }
            // console.log("permission: ", this.$store.state.user.permission)
            // console.log(this.$store.state.user.loggedIn)
            
            setTimeout(() => {
            console.log("Delayed for 30 second.");
            this.backgroundNotif()
            }, "30000")
            }
        },
            
    } 

    function playSound(url) {
        const audio = new Audio(url);
        audio.play();
    }

    async function getDataFromDatabase() {
            const userEmail = this.$store.state.user.data.email
            const q = query(collection(db, "users"), where("email","==", userEmail));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data(),); 
                this.user_doc_id = doc.id;
                this.custom_daily_amount = doc.data().custom_daily_amount
                this.custom_portion_size = doc.data().custom_portion_size
                this.notifications = doc.data().notifications
                this.notifications_time_start = doc.data().notifications_time_start,
                this.notifications_time_end = doc.data().notifications_time_end,
                this.sound = doc.data().sound,
                this.vibration = doc.data().vibration
                this.$store.state.user.permissionN = this.notifications
                this.$store.state.user.permissionV = this.vibration
                this.$store.state.user.permissionS = this.sound
                this.$store.state.user.notificationTimeStart = this.notifications_time_start
                this.$store.state.user.notificationTimeEnd = this.notifications_time_end
        })}
import importedAppIcon from "../assets/icons/AppIcon.png"
import importedSound from "../assets/sounds/waterdrop2.mp3"
</script>

<style scoped>
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