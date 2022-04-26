<template>
  <div>
      Logged in:
      <span v-if="user.loggedIn">Yes</span>
      <span v-else>No</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: "top-header",
    computed: {
    ...mapGetters({
      user: "user"
    })
  },
}
</script>

<style>

</style>