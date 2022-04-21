<template>
  <div>
    <form @submit.prevent="pressed">
        Register
        <div class="email">
            <input type="email" v-model="email" placeholder="email">
        </div>
        <div class="password">
            <input type="password" v-model="password" placeholder="password">
        </div>
        <button type="submit">Register</button>   
    </form>
    <div class="error" v-if="error !== ''">{{error}}</div>
  </div>
</template>

<script>
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"

    export default {
        methods: {
            async pressed(){
                try{
                    const user = await createUserWithEmailAndPassword(getAuth(), this.email, this.password)
                    this.$router.replace({name: "secret"});
                    console.log(user)
                }catch(e){
                    console.log(e.message)
                    this.error = e.message
                }
            }
        },
        data() {
            return {
                email: '',
                password: '',
                error: ''
            }
        }
    }
</script>

<style scoped>

</style>