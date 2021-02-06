<template>
  <Container title="Counter 1">
    <h2>{{ counter }}</h2>
    <button @click="increment">+1</button>

    <Counter />
  </Container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Container from "./components/Container";
import Counter from "./components/Counter";

export default {
  components: {
    Container,
    Counter,
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
