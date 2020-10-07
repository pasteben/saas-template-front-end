<template>
  <div v-if="!expired">
    <div class="flex text-center">
      <div class="p-2">
        <div :class="`text-2xl leading-8 font-semibold text-${timerColor}-600`">
          {{ days }}
        </div>
        <div
          class="px-6 py-2 whitespace-no-wrap text-sm leading-5 text-gray-500"
        >
          Days
        </div>
      </div>
      <div class="border-r my-5"></div>
      <div class="p-2">
        <div :class="`text-2xl leading-8 font-semibold text-${timerColor}-600`">
          {{ hours }}
        </div>
        <div
          class="px-6 py-2 whitespace-no-wrap text-sm leading-5 text-gray-500"
        >
          Hours
        </div>
      </div>
      <div class="border-r my-5"></div>
      <div class="p-2">
        <div :class="`text-2xl leading-8 font-semibold text-${timerColor}-600`">
          {{ minutes }}
        </div>
        <div
          class="px-6 py-2 whitespace-no-wrap text-sm leading-5 text-gray-500"
        >
          Minutes
        </div>
      </div>
      <div class="border-r my-5"></div>
      <div class="p-2">
        <div :class="`text-2xl leading-8 font-semibold text-${timerColor}-600`">
          {{ seconds }}
        </div>
        <div
          class="px-6 py-2 whitespace-no-wrap text-sm leading-5 text-gray-500"
        >
          Seconds
        </div>
      </div>
    </div>
  </div>
  <div v-if="expired" class="p-2 text-2xl font-semibold text-indigo-600">
    Expired
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Countdown",
  example: {
    time: new Date(2021, 0, 1),
    color: "red"
  },
  props: {
    time: {
      type: Date,
      required: true,
      default: new Date(2021, 0, 1)
    },
    color: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      end: null,
      days: null,
      hours: null,
      minutes: null,
      seconds: null,
      expired: false
    };
  },
  computed: {
    timerColor() {
      if (this.color) {
        return this.color;
      } else {
        //Override the color to the theme color if one is not provided as a prop
        return this.themeColor;
      }
    },
    ...mapGetters("theme", {
      themeColor: "color"
    })
  },
  created() {
    this.end = new Date(this.time).getTime();

    setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = this.end - now;

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      //If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(); //TODO check if this works
        this.expired = true;
      }
    }, 1000);
  }
};
</script>
