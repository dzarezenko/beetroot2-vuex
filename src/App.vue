<template>
  <div>
    <Container title="Counter" v-if="$store.state.isLoggedIn">
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
    ...mapGetters(['counter'])
  },
  methods: {
    ...mapActions({
      inc: 'increment',
    }),
    increment() {
      this.inc({
        value: 3
      });
    }
  }
}
</script>
