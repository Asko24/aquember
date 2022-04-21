<template>
  <div>
      Logged in:
      <span v-if="loggedIn">Yes</span>
      <span v-else>No</span>
      <div>
          <button v-if="loggedIn" @click="signOut">Sign out</button>
      </div>
  </div>
</template>

<script>
import {getAuth, signOut, onAuthStateChanged} from 'firebase/auth'

export default {
    name: "top-header",
    mounted() {
        this.setupFirebase();
    },
    methods: {
        setupFirebase() {
            onAuthStateChanged(getAuth(), function(user){
                if (user) {
                    // User is signed in.
                    console.log("signed in");
                    this.loggedIn = true;
                } else {
                    // No user is signed in.
                    this.loggedIn = false;
                    console.log("signed out", this.loggedIn);
                }
            });
        },
        signOut() {
            signOut()
            .then(() => {
                this.$router.replace({ name: "login" });
                this.setupFirebase()
            });
            console.log(signOutData)
        }
    },
    data() {
        return {    
            loggedIn: false   
        }
    }

}
</script>

<style>

</style>