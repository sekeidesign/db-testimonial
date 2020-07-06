<template>
  <div class="absolute w-full h-full p-16 flex flex-col justify-center">
    <img :src="logoURL" alt="Client Logo" class="w-logo h-logo object-contain">
    <div class="w-16 border-b border-gray-400 my-12"></div>
    <div>"{{ clientQuote }}"</div>
    <div class="text-sm text-gray-700 mt-12">{{ quoteAuthor }}</div>
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
    clientQuote: {
      type: String,
      required: true,
    },
    quoteAuthor: {
      type: String,
      required: true,
    }
  },
}
</script>