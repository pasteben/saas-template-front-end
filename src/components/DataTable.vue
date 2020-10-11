<template>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th
            :class="
              `px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider`
            "
            v-for="(heading, index) in headings"
            :key="heading"
          >
            <div
              @click="changeSort(index)"
              class="flex items-center cursor-pointer"
            >
              <div>
                {{ heading.name }}
              </div>
              <div>
                <template v-if="heading.direction === 'asc'">
                  <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
                    />
                  </svg>
                </template>
                <template v-if="heading.direction === 'desc'">
                  <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                    />
                  </svg>
                </template>
                <template v-if="heading.direction === 'none'">
                  <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" />
                  </svg>
                </template>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(object, index) in items"
          :key="object"
          :class="index % 2 ? 'bg-gray-50' : 'bg-white'"
        >
          <td
            class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"
            v-for="(value, propertyName) in object"
            :key="propertyName"
          >
            {{ value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DataTable",
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      headings: [],
      originalItems: []
    };
  },
  created() {
    this.originalItems = this.items;

    this.headings = Object.entries(this.originalItems[0]).map(item => {
      return {
        name: item[0],
        align: "left",
        direction: "asc"
      };
    });

    this.changeSort(0); //Set the default sorting to the first column
  },
  methods: {
    changeSort(index) {
      this.headings.forEach((item, forEachIndex) => {
        //Check if the current index in the loop is the index of the change sort call
        if (forEachIndex === index) {
          if (this.headings[index].direction == "asc") {
            this.headings[index].direction = "desc";
            this.sortByColumn(index, "desc");
            return;
          } else if (this.headings[index].direction == "desc") {
            this.headings[index].direction = "none";
            this.sortByColumn(index, "none");
          } else if (this.headings[index].direction == "none") {
            this.headings[index].direction = "asc";
            this.sortByColumn(index, "asc");
          }
        } else {
          //Set the rest of the index's to sort none
          this.headings[forEachIndex].direction = "none";
        }
      });
    },
    sortByColumn(index, direction) {
      const name = this.headings[index].name;

      if (direction == "desc") {
        this.originalItems.sort((a, b) => (a[name] < b[name] ? 1 : -1));
      }

      if (direction == "asc") {
        this.originalItems.sort((a, b) => (a[name] > b[name] ? 1 : -1));
      }
    }
  }
};
</script>
