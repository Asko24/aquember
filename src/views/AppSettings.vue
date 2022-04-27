<template>
    <div id="Dashboard" class="container-fluid w-100 vh-100">
        <div class="row align-items-center h-100 d-flex flex-column" style="padding:0px;">

            <div class="row no vertical-parent dark" style="flex:8;">
                <div class="no vertical-center" >
                    <h2 class="no">Settings</h2>
                </div>
            </div>

            <div class="row no vertical-parent" style="flex:25;">
                <div class="no vertical-center ">
                    <h2>General Settings</h2>

                    <div class="no row">
                        <div class="no col-4 ">
                            <label for="notifications" class="toggle-switchy" data-style="rounded">
                                <input checked type="checkbox" id="notifications" v-model="notifications">
                                <span class="toggle">
                                    <span class="switch"></span>
                                </span>
                            </label>
                        </div>

                        <div class="no col-4 ">
                            <p>Notifications</p>
                        </div>

                    </div> 

                    <div class="no row">
                        <div class="no col-4 ">
                            <label for="vibration" class="toggle-switchy" data-style="rounded">
                                <input checked type="checkbox" id="vibration" v-model="vibration">
                                <span class="toggle">
                                    <span class="switch"></span>
                                </span>
                            </label>
                        </div>

                        <div class="no col-4 ">
                            <p>Vibration</p>
                        </div>
                          
                    </div> 

                    <div class="no row">
                        <div class="no col-4 ">
                            <label for="sound" class="toggle-switchy" data-style="rounded">
                                <input checked type="checkbox" id="sound" v-model="sound">
                                <span class="toggle">
                                    <span class="switch"></span>
                                </span>
                            </label>
                        </div>

                        <div class="no col-4 ">
                            <p>Sound</p>
                        </div>
                          
                    </div> 

                </div>
            </div>

            <div class="row no vertical-parent" style="flex:25;">
                <div class="no vertical-center ">
                    <div class="no row">
                        <p>Notification hours</p>
                        <div class="no col-6 " style="margin-left: 3%">
                            <div id="slider">
                            </div>
                        </div>
                    </div>
                    <div class="no row">
                        <div class="no col-6 " style="margin-left: 5%; margin-top: 2%">
                            <div>
                                <div id="slider-range-value">test</div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>

            <div class="row no vertical-parent" style="flex:25;">
                <div class="no vertical-center ">
                    <div class="no row">
                        <p>Custom Daily Amount</p>
                        <div class="no col-12 ">
                            <input id="custom_daily_amount" type="text" v-model="custom_daily_amount" class="inputs" style="margin-top:0px;margin-bottom:16px"> ml
                        </div>  
                    </div>

                    <div class="no row">
                        <p>Custom Portion Size</p>
                        <div class="no col-12" >
                            <div class="no col-12 ">
                                <input id="custom_portion_size" type="text" v-model="custom_portion_size" class="inputs" style="margin-top:0px;"> ml
                            </div>  
                        </div>   
                    </div>
                </div>
            </div>

        <div class="row no vertical-parent" style="flex:25;">
                <div class="no vertical-center ">
                    <div class="no row">
                        <div class="no col-12 ">
                            <button @click="resetToDefaultData()" class="align-middle buttons" style="width:95%; height:70%;" id="reset-defaults">
                                Reset to Default Data
                            </button>
                        </div>  
                    </div>
                    <div class="no row">
                        <div class="no col-12 ">
                            <button @click="applyChanges()" class="align-middle buttons" style="width:95%; height:70%" id="apply-changes">
                                Apply Changes
                            </button>
                        </div>  
                    </div>
                </div>
            </div>

        </div>         
    </div>
    
  
</template>

<script>
import { query, collection, writeBatch, doc, getDocs, where } from "firebase/firestore";
import db from '../main.js'

export default {
    name: "top-header",
    mounted() {

        var slider = document.getElementById('slider');
        slider.innerHTML = ""

        noUiSlider.create(slider, {
            start: [8, 20],
            connect: true,
            step: 1,
            range: {
                'min': 0,
                'max': 24
            }
        });

        var rangeSliderValueElement = document.getElementById('slider-range-value');

        slider.noUiSlider.on('update', function (values) {
            this.notifications_time_start = values[0]
            this.notifications_time_end = values[1]

            values[0] = parseInt(values[0])
            if (values[0] <= 12) {
                values[0] = values[0] + ' AM'
            }
            else {
                values[0] = values[0] - 12
                values[0] = values[0] + ' PM'
            }

            values[1] = parseInt(values[1])
                if (values[1] <= 12) {
                values[1] = values[1] + ' AM'
            }
            else {
                values[1] = values[1] - 12
                values[1] = values[1] + ' PM'
            }

            rangeSliderValueElement.innerHTML = values.join(' - ');
        });
    },
    methods: {

        async sendVibrate() {
            // Default at false
            var canVibrate = false
            // Check firebase for vibration permissions
            const userEmail = this.$store.state.user.data.email
            const q = query(collection(db, "users"), where("email","==", userEmail));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            // Overwrite with permissions status from firebase
            canVibrate = (doc.data()["vibration"]);
            })
            // Only if 'vibration: true' on firebase
            if (canVibrate == true){
                console.log("i vibrated");
                navigator.vibrate(500);
            }
        },
        testNotification(){
            console.log("i sent popup")
            Notification.requestPermission().then(function(result){
                console.log(result)
            })
            var img = importedAppIcon;
            var text = 'Time to drink water!';
            var notification = new Notification('Aquember friendly reminds', { body: text, icon: img });
            playSound(importedSound)
        },
        testTime(){
            var now = new Date();
            var seconds = now.getSeconds();
            console.log(seconds);
        },
        
        async getDataFromDatabase() {
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
        })},

        async checkNotificationsState() {
            if (document.getElementById('notifications').checked) {
            const userEmail = this.$store.state.user.data.email
            const q = query(collection(db, "users"), where("email","==", userEmail));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            this.docid = doc.id
            })

            const batch = writeBatch(db);
            const sfRef = doc(db, "users", this.docid);
            batch.update(sfRef, {notifications: true});
            await batch.commit();
            } else {
            const userEmail = this.$store.state.user.data.email
            const q = query(collection(db, "users"), where("email","==", userEmail));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            this.docid = doc.id
            })

            const batch = writeBatch(db);
            const sfRef = doc(db, "users", this.docid);
            batch.update(sfRef, {notifications: false});
            await batch.commit();
            }
        },

        async checkVibrationState() {
            if (document.getElementById('vibration').checked) {
            const userEmail = this.$store.state.user.data.email
            const q = query(collection(db, "users"), where("email","==", userEmail));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            this.docid = doc.id
            })

            const batch = writeBatch(db);
            const sfRef = doc(db, "users", this.docid);
            batch.update(sfRef, {vibration: true});
            await batch.commit();
            } else {
            const userEmail = this.$store.state.user.data.email
            const q = query(collection(db, "users"), where("email","==", userEmail));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            this.docid = doc.id
            })

            const batch = writeBatch(db);
            const sfRef = doc(db, "users", this.docid);
            batch.update(sfRef, {vibration: false});
            await batch.commit();
            }
        },

        async checkSoundState() {
            if (document.getElementById('sound').checked) {
            const userEmail = this.$store.state.user.data.email
            const q = query(collection(db, "users"), where("email","==", userEmail));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            this.docid = doc.id
            })

            const batch = writeBatch(db);
            const sfRef = doc(db, "users", this.docid);
            batch.update(sfRef, {sound: true});
            await batch.commit();
            } else {
            const userEmail = this.$store.state.user.data.email
            const q = query(collection(db, "users"), where("email","==", userEmail));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            this.docid = doc.id
            })

            const batch = writeBatch(db);
            const sfRef = doc(db, "users", this.docid);
            batch.update(sfRef, {sound: false});
            await batch.commit();
            }
        },

        async checkNotificationsHours() {
            var NotiValues = document.getElementById('slider-range-value').innerHTML.split(" - ")
            var NotiStartValue = NotiValues[0]
            var NotiEndValue = NotiValues[1]

            var NotiStartNoonTime = NotiStartValue.split(" ")[1]
            var NotiStartValue = NotiStartValue.split(" ")[0]
            NotiStartValue = parseInt(NotiStartValue) 

            var NotiEndNoonTime = NotiEndValue.split(" ")[1]
            var NotiEndValue = NotiEndValue.split(" ")[0]
            NotiEndValue = parseInt(NotiEndValue) 
 
            if (NotiStartNoonTime == "PM"){
                NotiStartValue = NotiStartValue + 12
            }

            if (NotiEndNoonTime == "PM"){
                NotiEndValue = NotiEndValue + 12
            }

            // STORING TO FIREBASE
            const userEmail = this.$store.state.user.data.email
            const q = query(collection(db, "users"), where("email","==", userEmail));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            this.docid = doc.id
            })

            const batch = writeBatch(db);
            const sfRef = doc(db, "users", this.docid);
            batch.update(sfRef, {notifications_time_start: NotiStartValue,
            notifications_time_end: NotiEndValue
            });
            await batch.commit();
        },

        async checkCustomInputs() {
            var DailyAmount = document.getElementById('custom_daily_amount').value
            DailyAmount = parseInt(DailyAmount)
            var PortionSize = document.getElementById('custom_portion_size').value
            PortionSize = parseInt(PortionSize)

            // STORING TO FIREBASE
            const userEmail = this.$store.state.user.data.email
            const q = query(collection(db, "users"), where("email","==", userEmail));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            this.docid = doc.id
            })

            const batch = writeBatch(db);
            const sfRef = doc(db, "users", this.docid);
            batch.update(sfRef, {custom_daily_amount: DailyAmount,
            custom_portion_size: PortionSize
            });
            await batch.commit();
        },

        async getNotiStart() {
            const userEmail = this.$store.state.user.data.email
            const q = query(collection(db, "users"), where("email","==", userEmail));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            console.log(doc.data()["notifications_time_start"]);
            return (doc.data()["notifications_time_start"]);
        })},

        async getNotiEnd() {
            const userEmail = this.$store.state.user.data.email
            const q = query(collection(db, "users"), where("email","==", userEmail));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            console.log(doc.data()["notifications_time_end"]);
            return (doc.data()["notifications_time_end"]);
        })},

        async resetToDefaultData() {
            const userEmail = this.$store.state.user.data.email
            const q = query(collection(db, "users"), where("email","==", userEmail));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            this.docid = doc.id
            })
            const batch = writeBatch(db);
            const sfRef = doc(db, "users", this.docid);
            batch.update(sfRef, {
            custom_daily_amount: 2000,
            custom_portion_size: 250,
            notifications: true,
            notifications_time_start: 8,
            notifications_time_end: 20,
            sound: true,
            vibration: true
            });
            await batch.commit();
        },

        async applyChanges() {
            await Promise.all([
                this.checkNotificationsState(),
                this.checkVibrationState(),
                this.checkSoundState(),
                this.checkNotificationsHours(),
                this.checkCustomInputs()
            ]);
        }



    },

    data() {
        return {
            user_doc_id: '',
            custom_daily_amount: 2000,
            custom_portion_size: 250,
            notifications: true,
            notifications_time_start: 8,
            notifications_time_end: 20,
            sound: true,
            vibration: true
        }
    }
}

function playSound(url) {
  const audio = new Audio(url);
  audio.play();
}

import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
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