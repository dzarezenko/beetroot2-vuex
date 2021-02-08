<template>
  <section>

    <button v-if="!isAuthenticated" @click="login">Login</button> &nbsp; 
    <button v-else @click="logout">Logout</button>

  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions(['login', 'logout']),
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
  }
}
</script>
