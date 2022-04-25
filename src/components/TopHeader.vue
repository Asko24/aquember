<template>
  <div>
      Logged in:
      <span v-if="user.loggedIn">Yes</span>
      <span v-else>No</span>
      <div>
          <button v-if="user.loggedIn" @click.prevent="signOut">Sign out</button>
      </div>
  </div>
</template>

<script>
import {getAuth, signOut} from "firebase/auth"
import { mapGetters } from "vuex"

export default {
    name: "top-header",
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
    data() {
        return {    
 
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

</style>