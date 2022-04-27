<template>
    <div id="Dashboard" class="container-fluid w-100 vh-100">
        <div class="row align-items-center h-100 d-flex flex-column" style="padding:0px;">
            <div class="row no vertical-parent dark" style="flex:2;">
                <div class="no vertical-center" >
                    <h2 class="no">Register To Hydration App</h2>
                    
                </div>
                
            </div>
            <div class="no row vertical-parent white" style="padding:0px;margin:0px; flex:8;">
                <div class="no vertical-center " > 
                <div class="col-md-12" style=" position:relative;">
                    <div class="email">
                        <input type="email" class="inputs" v-model="email" placeholder="login">
                    </div>
                    <div class="password">
                        <input type="password" class="inputs"  v-model="password" placeholder="password">
                    </div>
                </div>
                </div>
            </div>
            <div class="row no vertical-parent" style="flex:4;">
                <div class="no vertical-center" >
                    <h2 class="no">Gender</h2>
                </div>
                
            </div>
            <div class="row no" style="flex:8;">
                <div class="no" >
                    <div class="no row">
                        <div class="no col-2">
                            <input type="radio" v-model="gender" value="Male" id="Male">
                        </div>
                        <div class="no col-1">
                            <label for="Male">Male</label>
                        </div>
                        
                    </div>
                    <div class="no row">
                        <div class="no col-2">
                            <input type="radio" v-model="gender" value="Female" id="Female">
                        </div>
                        <div class="no col-1">
                            <label for="Female">Female</label>
                        </div>
                        
                    </div>
                    <div class="no row">
                        <div class="no col-2">
                            <input type="radio" v-model="gender" value="Other" id="Other">
                        </div>
                        <div class="no col-1">
                            <label for="Other">Other</label>
                        </div>
                        
                    </div>
                    <div class="no row">
                        <div class="no col-2">
                            <input type="radio" v-model="gender" value="Unspecified" id="Unspecified">
                        </div>
                        <div class="no col-1">
                            <label for="Unspecified">Unspecified</label>
                        </div>   
                    </div>
                
                </div> 
            </div>
            <div class="row no vertical-parent" style="flex:8;">
                <div class="no vertical-center ">
                    <div class="no row">
                        <div class="no col-12 ">
                            <button @click="register()" class="align-middle buttons" style="width:95%; height:70%;" id="register-register">
                                REGISTER
                            </button>
                        </div>
                    </div>
                    <div class="no row error" v-if="error !== ''">{{error}}</div>
                </div>
            </div>
        </div>         
    </div>
</template>

<script>
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import { collection, addDoc } from "firebase/firestore"
import db from '../main.js'
import { computed } from '@vue/runtime-core'

export default {
    methods: {
        async register(){
            try{
                const user = await createUserWithEmailAndPassword(getAuth(), this.email, this.password)
                this.updateFirestore()
                this.$router.replace({name: "login"});
                console.log(user)
            }catch(e){
                console.log(e.message)
                this.error = e.message
            }
        },
        updateFirestore() {
            const userData = {
                custom_daily_amount: 2000,
                custom_portion_size: 250,
                email: this.email,
                gender: this.gender,
                notifications: true,
                notifications_time_start: 8,
                notifications_time_end: 20,
                sound: true,
                vibration: true,
            }
            const userDataRef = addDoc(collection(db,'users'), userData)
            console.log('Document was created with ID:', userDataRef.id)
        }
    },
    data() {
        return {
            email: '',
            password: '',
            gender: '',
            error: ''
        }

  },
}
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