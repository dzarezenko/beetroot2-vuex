<template>
  <div>
    <Container title="Counter" v-if="isAuthenticated">
      <h2>{{ counter }}</h2>
      <button @click="increment">+1</button>

      <Counter />
    </Container>

    <Container title="Authorization">
      <UserAuth />
    </Container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Container from "./components/Container";
import Counter from "./components/Counter";
import UserAuth from "./components/UserAuth";

export default {
  components: {
    Container,
    Counter,
    UserAuth,
  },
  mounted() {
    console.log(this.$store);
  },
  computed: {
    //...mapGetters('counter', ['counter']),
    ...mapGetters(['isAuthenticated']),

    counter() {
      return this.$store.getters['counter/counter'];
    }
  },
  methods: {
    /*...mapActions('counter', {
      inc: 'increment',
    }),*/
    increment() {
      this.$store.dispatch('counter/increment', {
        value: 3
      });
    }
  }
}
</script>
