<template>
  <div 
    class="grid-flow-row flex items-center justify-center cursor-pointer border-8 border-transparent border-opacity-50" 
    :class="{ 'border-white' : isCurrentTile }"
    :style="{ backgroundColor: '#' + brandColor }"
    @click="select()"
    >
    <img :src="logoURL" class="block w-logo h-logo object-contain logo-invert"  alt="Client Logo">
  </div>
</template>

<script>
export default {
  props: {
    logoURL: {
      type: String,
      required: true,
    },
    brandColor: {
      type: String,
      required: true,
    },
    currentTile: {
      type: Number,
      required: true,
    },
    clientId: {
      type: Number,
      required: true,
    }
  },
  computed: {
    isCurrentTile() {
      return false;
    }
  },
  methods: {
    select() {
      this.$emit('select', this.clientId)
    }
  }
}
</script>

<style scoped>
  .logo-invert{
    -webkit-filter: invert(1);
    filter: invert(1);
  }
</style>