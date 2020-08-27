<template>
  <div class="relative">
    <label
      :for="label"
      class="block text-sm font-medium leading-5 text-gray-700"
      >{{ label }}</label
    >
    <div class="mt-1 relative rounded-md shadow-sm">
      <input
        v-model="input"
        :id="label"
        @focus="dropdownOpen = true"
        @blur="blurFunc()"
        :class="[
          error
            ? 'text-red-900 border-red-300 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red'
            : 'text-gray-900'
        ]"
        class="form-input block w-full pr-10 sm:text-sm sm:leading-5"
        :placeholder="placeholder"
      />
    </div>

    <div
      v-if="dropdownOpen"
      class="absolute mt-1 w-full rounded-md bg-white shadow-lg overflow-hidden"
    >
      <ul
        v-for="item in filtered().slice(0, 10)"
        :key="item"
        tabindex="-1"
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-item-3"
        class="max-h-60 text-base leading-6 overflow-auto focus:outline-none sm:text-sm sm:leading-5"
      >
        <!--
          Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

          Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
        -->
        <li
          @click="select(item)"
          :class="[item === selectedItem ? 'text-gray-900 font-bold' : '']"
          id="listbox-option-0"
          role="option"
          class="select-none relative py-2 pl-3 pr-9 hover:text-white hover:bg-indigo-600 text-gray-900 cursor-pointer"
        >
          <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
          <span class="font-normal block truncate">
            {{ itemText ? item[itemText] : item }}
          </span>

          <!--
            Checkmark, only display for selected option.

            Highlighted: "text-white", Not Highlighted: "text-indigo-600"
          -->
          <span
            v-if="item === selectedItem"
            class="hover:text-white absolute inset-y-0 right-0 flex items-center pr-4"
          >
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </li>

        <!-- More options... -->
      </ul>
    </div>

    <!-- <div v-if="dropdownOpen" class="absolute w-full z-10 bg-white">
      <div v-for="item in filtered().slice(0, 5)" :key="item">
        <div
          class="p-2 shadow-lg bg-white hover:bg-gray-200 cursor-pointer rounded"
          @click="select(item)"
        >
          {{ itemText ? item[itemText] : item }}
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownOpen: false,
      loading: false,
      selectedItem: null,
      input: ""
    };
  },
  props: {
    label: {
      type: String,
      required: false,
      default: null
    },
    placeholder: {
      type: String,
      required: false,
      default: null
    },
    error: {
      type: String,
      required: false
    },
    items: {
      type: Array,
      required: true
    },
    itemText: {
      type: String,
      required: false
    }
  },
  watch: {
    input() {
      this.dropdownOpen = true;
    }
  },
  methods: {
    filtered: function() {
      this.dropdownOpen = true;
      if (this.itemText) {
        return this.items.filter(item => {
          return (
            item[this.itemText]
              .toLowerCase()
              .indexOf(this.input.toLowerCase()) > -1
          );
        });
      } else {
        return this.items.filter(item => {
          return item.toLowerCase().indexOf(this.input.toLowerCase()) > -1;
        });
      }
    },
    select: function(item) {
      if (this.itemText) {
        this.input = item[this.itemText];
      } else {
        this.input = item;
      }
      this.$emit("update:modelValue", item);
      this.selectedItem = item;
      this.$nextTick(() => {
        this.dropdownOpen = false;
      });
    },
    blurFunc: function() {
      setTimeout(() => {
        this.dropdownOpen = false;
      }, 200);
    }
  }
};
</script>
