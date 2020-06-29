<template>
  <div class="grid grid-cols-6 grid-rows-2">
    <div class="bg-gray-400 grid-flow-row">logo tile</div>
    <div class="bg-gray-400 grid-flow-row">logo tile</div>
    <div class="bg-gray-400 grid-flow-row">logo tile</div>
    <div class="bg-gray-400 grid-flow-row">logo tile</div>
    <div class="bg-gray-400 grid-flow-row">logo tile</div>
    <div class="bg-gray-400 grid-flow-row">logo tile</div>
    <div class="bg-gray-400 grid-flow-row">logo tile</div>
    <div class="bg-gray-400 grid-flow-row">logo tile</div>
    <div class="bg-gray-200 relative col-start-3 col-span-2 row-start-1 row-span-2">
      <div class="absolute">hello I am inside a square div</div>
      <div class="pb-sq w-full"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    clients() {
      return this.$store.state.clients;
    }
  },
  components: {
  }
};
</script>
