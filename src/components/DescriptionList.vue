<template>
  <div>
    <dl>
      <div
        v-for="(item, index) in items"
        :key="item"
        class="px-4 py-5 sm:grid sm:grid-cols-3 sm:border-gray-200"
        :class="[
          index % 2 ? 'bg-gray-50' : 'bg-white',
          border && index > 0 ? 'sm:border-t' : ''
        ]"
      >
        <dt class="text-sm leading-5 font-medium text-gray-500">
          {{ item[itemKey] }}
        </dt>
        <dd class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          {{ item[itemValue] }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
  name: "DescriptionList",
  data() {
    return {};
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => {
        return [
          {
            key: "First Item",
            value: "$1500"
          },
          {
            key: "Second Item",
            value: "150 Subscribers"
          },
          {
            key: "Third Item",
            value: "Hail Dale"
          },
          {
            key: "Fourth Item",
            value: "Number 4 is the best."
          }
        ];
      }
    },
    itemKey: {
      type: String,
      required: false,
      default: "key"
    },
    itemValue: {
      type: String,
      required: false,
      default: "value"
    },
    border: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>
