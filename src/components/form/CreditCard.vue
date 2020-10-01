<template>
  <label for="Card" class="block text-sm font-medium leading-5 text-gray-700"
    >Card</label
  >
  <div class="mt-1 relative rounded-md shadow-sm">
    <div
      ref="card"
      class="text-gray-900 form-input block w-full pr-10 sm:text-sm sm:leading-5"
    ></div>
  </div>
</template>

<script>
export default {
  emits: ["card-error", "card-success"],
  data() {
    return {
      stripe: null,
      ellements: null,
      card: null
    };
  },
  props: {
    submit: {
      type: Boolean,
      required: true
    }
  },
  mounted() {
    // eslint-disable-next-line
    this.stripe = Stripe(process.env.VUE_APP_STRIPE_PUBLIC_TOKEN);
    this.elements = this.stripe.elements();
    this.card = this.elements.create("card");
    this.card.mount(this.$refs.card);
  },
  watch: {
    submit(newState) {
      if (newState === true) {
        this.submitCard();
      }
    }
  },
  methods: {
    submitCard() {
      this.stripe.createPaymentMethod("card", this.card).then(result => {
        if (result.error) {
          this.$emit("card-error", result.error);
          console.log(result.error);
          this.$forceUpdate(); // Forcing the DOM to update so the Stripe Element can update.
          return;
        }
        // Access the paymentMethod with result.paymentMethod
        this.$emit("card-success", result.paymentMethod.id);
      });
    }
  }
};
</script>
