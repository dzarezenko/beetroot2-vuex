<template>
  <section>
    <h2>{{ normalizedCounter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </section>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters('counter', ['normalizedCounter']),
  },
  methods: {
    ...mapActions('counter', {
      inc: 'increment'
    }),
    increment() {
      this.inc({
        value: 5
      });
    },

    ...mapMutations('counter', {
      dec: 'decrement'
    }),
    decrement() {
      this.dec();
    },
  }
}
</script>
