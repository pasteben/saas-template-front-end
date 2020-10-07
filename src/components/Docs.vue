<template>
  <form-input
    v-model="search"
    placeholder="Badge"
    label="Search Components"
    type="text"
  />

  <div v-for="component in filteredComponents" :key="component">
    <card :heading="component.name" class="my-4 w-full">
      <component class="m-4" v-bind:is="component" />

      <div class="mx-4 mt-4 text-lg leading-6 font-medium text-gray-900">
        Props
      </div>

      <div class="flex flex-wrap">
        <div
          class="w-full sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-2"
          v-for="(prop, name) in component.props"
          :key="prop"
        >
          <card :padding="false" :showHeading="false" class="border">
            <dl>
              <div
                class="px-4 py-5 sm:grid sm:grid-cols-2 sm:border-gray-200 bg-white"
              >
                <dt class="text-sm leading-5 font-medium text-gray-500">
                  Name
                </dt>
                <dd
                  class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-1"
                >
                  {{ name }}
                </dd>
              </div>
              <div
                class="px-4 py-5 sm:grid sm:grid-cols-2 sm:border-gray-200 bg-gray-50 sm:border-t"
              >
                <dt class="text-sm leading-5 font-medium text-gray-500">
                  Required
                </dt>
                <dd
                  class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-1"
                >
                  {{ prop.required }}
                </dd>
              </div>
              <div
                class="px-4 py-5 sm:grid sm:grid-cols-2 sm:border-gray-200 bg-white sm:border-t"
              >
                <dt class="text-sm leading-5 font-medium text-gray-500">
                  Default
                </dt>
                <dd
                  class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-1"
                >
                  {{ prop.default }}
                </dd>
              </div>
              <div
                class="px-4 py-5 sm:grid sm:grid-cols-2 sm:border-gray-200 bg-gray-50 sm:border-t"
              >
                <dt class="text-sm leading-5 font-medium text-gray-500">
                  Type
                </dt>
                <dd
                  class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-1"
                >
                  {{ prop.type.name }}
                </dd>
              </div>
            </dl>
          </card>
        </div>
      </div>
    </card>
  </div>
</template>

<script>
/* eslint-disable */
    import Accordion from './Accordion'
    import Avatar from './Avatar'
    import Badge from './Badge'
    import Card from './Card'
    import Countdown from './Countdown'
    import DescriptionList from './DescriptionList'
    import Stats from './Stats'
    import ProgressBar from './ProgressBar'
    import ProgressSpinner from './ProgressSpinner'
    import Button from './form/Button'
    import FormInput from './form/Input'
    import SearchSelect from './form/SearchSelect'
    export default {
        components: {
            Card,
            Stats,
            Avatar,
            Badge,
            FormInput,
            ProgressBar,
            ProgressSpinner,
            Countdown,
            Accordion,
            DescriptionList,
            Button,
            SearchSelect
        },
        props: {
            test: {
                required: false,
            }
        },
        data() {
            return {
                search: ''
            }
        },
        created() {
            console.log(this.$attrs);
        },
        computed: {
            filteredComponents() {
                return Object.keys(this.$options.components)
                    .filter(key => key.toLowerCase().indexOf(this.search.toLowerCase()) > -1)
                    .sort()
                    .reduce((obj, key) => {
                        console.log(key);
                        obj[key] = this.$options.components[key];
                        console.log(obj[key])
                        return obj;
                    }, {});
            }
        }
    }
</script>