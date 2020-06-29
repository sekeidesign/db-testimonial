<template>
  <div class="bg-gray-400 grid-flow-row flex items-center justify-center">
    <img :src="this.logoURL" alt="Client Logo">
  </div>
</template>

<script>
export default {
  computed: {
    clients() {
      return this.$store.state.clients;
    }
  }
};
</script>
