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
    ...mapGetters(['normalizedCounter']),
  },
  methods: {
    ...mapActions({
      inc: 'increment'
    }),
    increment() {
      this.inc({
        value: 5
      });
    },

    ...mapMutations({
      dec: 'decrement'
    }),
    decrement() {
      this.dec();
    },
  }
}
</script>
