<template>
  <div class="flex">
    <div v-for="(link, index) in links" :key="link">
      <div class="flex">
        <div class="text-gray-500 text-sm leading-6 font-medium">
          {{ link.text }}
        </div>
        <div class="mx-4 text-gray-300" v-if="!(index == links.length - 1)">
          /
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs",
  props: {
    links: {
      type: Array,
      required: true,
      default: () => {
        return [
          {
            text: "Home",
            name: "home"
          },
          {
            text: "Settings",
            name: "settings"
          },
          {
            text: "Profile",
            name: "profile"
          },
          {
            text: "Name",
            name: "profile"
          }
        ];
      }
    }
  }
};
</script>
