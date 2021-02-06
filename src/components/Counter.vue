<template>
  <section>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </section>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit('increment', {
        value: 5
      });
    },
    decrement() {
      this.$store.commit('decrement');
    },
  }
}
</script>
