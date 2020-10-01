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
// eslint-disable-next-line
const stripe = Stripe('pk_test_1tt1nRERgldgJBookN2o4FKU00DW0LerQy');
const elements = stripe.elements();
let card = undefined;
card = elements.create("card");
export default {
  emits: ["card-error", "card-success"],
  props: {
    submit: {
      type: Boolean,
      required: true
    }
  },
  mounted() {
    card.mount(this.$refs.card);
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
      stripe.createPaymentMethod("card", card).then(result => {
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
