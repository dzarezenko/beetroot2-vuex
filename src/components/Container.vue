<template>
  <div>
    <h1>{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
}
</script>

<style scoped>
div {
  display: block;
  width: 400px;
  margin: 30px auto;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.97); 
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.97);
  padding: 30px;
}
</style>
