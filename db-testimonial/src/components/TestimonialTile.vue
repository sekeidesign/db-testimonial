<template>
  <div class="absolute w-full h-full p-16 flex flex-col justify-center">
    <img :src="logoURL" alt="Client Logo" class="w-logo h-logo object-contain">
    <div class="w-16 border-b border-gray-400 my-12"></div>
    <div>"Our team is constantly working across different countries, time zones and offices. A lot of solutions can accommodate that now, but none make it as seamless as Dropbox and Dropbox Paper."</div>
    <div class="text-sm text-gray-700 mt-12">Morten Thomsen, Global IT Lead</div>
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
    key: {
      type: Number,
      required: true,
    }
  },
}
</script>