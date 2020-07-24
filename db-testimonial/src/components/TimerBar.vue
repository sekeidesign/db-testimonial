<template>
  <transition name="timer">
    <div class="absolute top-0 left-0 w-full h-bar bg-black origin-left"></div>
  </transition>
</template>

<style>
  .timer-enter-active {
    transition: all 5s linear;
  }
  .timer-leave-active {
    transition: all 0s linear;
  }
  .timer-enter, .timer-leave-to {
    transform: scaleX(0);
  }
  .timer-enter-to, .timer-leave {
    transform: scaleX(1);
  }
</style>

<script>
export default {
  
}
</script>