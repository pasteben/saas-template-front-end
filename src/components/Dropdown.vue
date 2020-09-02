<template>
  <div class="relative">
    <div @click="show = !show">
      <slot></slot>
    </div>

    <!--
        Profile dropdown panel, show/hide based on dropdown state.

        Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
        -->
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-out duration-200 transform"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="show"
        class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg z-10"
      >
        <slot name="content"></slot>
      </div>
    </transition>
    <div v-if="show">
      <div class="fixed inset-0">
        <div @click="show = !show" class="absolute inset-0 opacity-100"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>
