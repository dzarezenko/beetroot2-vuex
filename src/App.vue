<template>
  <Container title="Counter 1">
    <h2>{{ $store.state.counter }}</h2>
    <button @click="increment">+1</button>

    <Counter />
  </Container>
</template>

<script>
import Container from "./components/Container";
import Counter from "./components/Counter";

export default {
  components: {
    Container,
    Counter,
  },
  mounted() {
    console.log(this);
  },
  methods: {
    increment() {
      this.$store.commit('increment', {
        value: 3
      });
    }
  }
}
</script>
