<template>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th
            :class="
              `px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-${heading.align}`
            "
            v-for="heading in headings"
            :key="heading"
          >
            <template v-if="heading.sortable">
              <div
                @click="changeSort(heading.id)"
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
            </template>
            <template v-if="!heading.sortable">
              {{ heading.name }}
            </template>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          :items="array"
          v-for="(array, index) in items"
          :key="array"
          :class="index % 2 ? 'bg-gray-50' : 'bg-white'"
        >
          <td
            class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500"
            v-for="item in array"
            :key="item"
          >
            {{ item }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    headings: {
      type: Array,
      required: false,
      example: {
        something: true
      }
    },
    items: {
      type: Array,
      required: true
    }
  },
  created() {
    this.headings.map((heading, index) => {
      heading.id = index;
      heading.name = heading.name || null;
      heading.align = heading.align || "left";
      heading.sortable = heading.sortable || false;
      heading.direction = heading.direction || "asc";
      return heading;
    });

    //TODO Make the sorting is working
    let data = [];

    data = this.items.map((arrayOfItems, arrayOfItemsIndex) => {
      return { ...arrayOfItems };
    });

    for (const key in data) {
      console.log(data[key]);
    }
  },
  methods: {
    changeSort(headingId) {
      this.headings.forEach(heading => {
        if (headingId === heading.id) {
          if (heading.direction == "asc") {
            heading.direction = "desc";
            //heading.set(heading); //TODO Make the heading sort change
          }

          if (heading.direction == "desc") {
            heading.direction = "none";
            //heading.set(heading);
          }

          if (heading.direction == "none") {
            heading.direction = "asc";
            //heading.set(heading);
          }

          this.sortByColumn(headingId);
        }
      });
    },
    sortByColumn(headingId) {
      this.headings.forEach((heading, index) => {
        if (headingId === heading.id) {
          const headingIndex = index;
        }
      });
    }
  }
};
</script>
