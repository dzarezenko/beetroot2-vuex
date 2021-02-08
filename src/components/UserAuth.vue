<template>
  <section>

    <button v-if="!$store.state.isLoggedIn" @click="login">Login</button> &nbsp; 
    <button v-if="$store.state.isLoggedIn" @click="logout">Logout</button>

  </section>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    },
  },
}
</script>
