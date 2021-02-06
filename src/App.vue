<template>
  <Container title="Counter 1">
    <h2>{{ counter }}</h2>
    <button @click="counter++">+1</button>
  </Container>
</template>

<script>
import Container from "./components/Container";

export default {
  data() {
    return {
      counter: 0,
    }
  },
  components: {
    Container,
  },
}
</script>
