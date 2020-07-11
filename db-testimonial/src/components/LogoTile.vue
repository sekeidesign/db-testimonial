<template>
 <div class="relative grid-flow-row">
    <div 
      class="absolute w-full h-full flex items-center justify-center cursor-pointer border-tile border-transparent" 
      :class="{ 'md:border-white md:border-opacity-50' : isCurrentTile }"
      :style="{ backgroundColor: '#' + brandColor }"
      @click="select()"
      >
      <img :src="logoURL" class="block w-logo h-logo object-contain logo-invert"  alt="Client Logo">
    </div>
    <div class="pb-square w-full"></div>
 </div>
</template>

<script>
export default {
  computed: {
    isCurrentTile: function () {
      return this.currentTile === this.clientId
    }
  },
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
  methods: {
    select() {
      this.$emit('select', this.clientId)
    },
  }
}
</script>

<style scoped>
  .logo-invert{
    -webkit-filter: invert(1);
    filter: invert(1);
  }
</style>