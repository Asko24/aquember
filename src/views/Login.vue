<!--login: admin@test.com Password: admin123-->
<template>
  <div>
    <form @submit.prevent="pressed">
        Login
        <div class="email">
            <input type="email" v-model="email" placeholder="login">
        </div>
        <div class="password">
            <input type="password" v-model="password" placeholder="password">
        </div>
        <button type="submit">Login</button>   
    </form>
    <div class="error" v-if="error !== ''">{{error}}</div>
    <span>Don't registered yet? <router-link to="/register">Click here to register.</router-link></span>
  </div>
</template>

<script>
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"

    export default {
        data() {
            return {
                email: '',
                password: '',
                error: ''
            }
        },
        methods: {
            async pressed(){
                try{
                    const login = await signInWithEmailAndPassword(getAuth(), this.email, this.password)
                    this.$router.replace({name: "secret"});
                    console.log(login)
                }catch(e){
                    console.log(e.message)
                    this.error = e.message
                }
            }
        },
            
    }
</script>

<style scoped>

</style>