<template>
  <div>
    <card class="my-4" heading="Card" subheading="Some text here">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </card>
    <card class="my-4" heading="Description list" :padding="false">
      <description-list :items="ListItems" :border="true"></description-list>
    </card>
    <card class="my-4" heading="Form" :padding="true">
      <div class="my-4">
        <toggle v-model="toggleState"></toggle> State: {{ toggleState }}
      </div>
      <div class="my-4">
        <form-input
          v-model="inputText"
          placeholder="example@gmail.com"
          label="Input"
          help-text="Dont make your password short and easy to guess."
        />
      </div>
      <div class="my-4">
        <search-select
          v-model="searchSelect"
          :items="ListItems"
          item-text="key"
          placeholder="example@gmail.com"
          label="Search Select"
          help-text="Dont make your password short and easy to guess."
        />
        <div class="my-2">Selected: {{ searchSelect }}</div>
      </div>
      <div class="mt-4">
        <theme-button>Submit</theme-button>
      </div>
    </card>
    <card class="my-4" heading="Edit Theme">
      {{ themeColor }}
      <search-select
        v-model="themeColor"
        :items="colors"
        placeholder=""
        label="Search Select"
        help-text="Select the color for the application"
      />
      {{ themeShadow }}
      <search-select
        v-model="themeShadow"
        :items="shadows"
        placeholder=""
        label="Search Select"
        help-text="Select the color for the application"
      />
    </card>
    <div class="my-4">
      <badge color="teal">Badge</badge>
    </div>
    <div class="flex w-full my-4">
      <stats
        class="m-2 flex-1"
        color="purple"
        heading="Stats"
        first-metric="56.76"
        second-metric="67.76"
        :percent-change="29.67"
      ></stats>
      <stats
        class="m-2 flex-1"
        color="purple"
        heading="Followers"
        first-metric="5.34"
        second-metric="3.29"
        :percent-change="29.67"
      ></stats>
      <stats
        class="m-2 flex-1"
        color="purple"
        heading="Subscribers"
        first-metric="67.76"
        second-metric="56.76"
        :percent-change="-15.67"
      ></stats>
    </div>
    <div class="my-4">
      <card class="my-4" heading="Accordion" :padding="false">
        <accordion :items="questionandAnswers"></accordion>
      </card>
    </div>
    <div class="my-4">
      <theme-button @click="openModal = true">Open Modal</theme-button>
    </div>
    <modal v-model="openModal" heading="Test">
      <template v-slot:heading>
        <h1>Here might be a page title</h1>
      </template>

      <template v-slot:default>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </template>

      <template v-slot:footer>
        <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
          <button
            type="button"
            class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
          >
            Deactivate
          </button>
        </span>
        <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
          <button
            @click="openModal = false"
            type="button"
            class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
          >
            Cancel
          </button>
        </span>
      </template>
    </modal>
    <card heading="Avatar">
      <avatar name="Derek Schmitt"></avatar>
    </card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Card from "../../components/Card";
import Badge from "../../components/Badge";
import ThemeButton from "../../components/ThemeButton";
import Stats from "../../components/Stats";
import DescriptionList from "../../components/DescriptionList";
import Avatar from "../../components/Avatar";
import Modal from "../../components/Modal";
import Accordion from "../../components/Accordion";
import Toggle from "../../components/form/Toggle";
import FormInput from "../../components/form/Input";
import SearchSelect from "../../components/form/SearchSelect";
export default {
  name: "Theme",
  components: {
    Card,
    Badge,
    ThemeButton,
    Stats,
    DescriptionList,
    Toggle,
    FormInput,
    SearchSelect,
    Accordion,
    Modal,
    Avatar
  },
  data() {
    return {
      themeColor: "",
      themeShadow: "shadow",
      toggleState: true,
      openModal: false,
      inputText: "",
      searchSelect: "",
      colors: [
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "indigo",
        "purple",
        "pink"
      ],
      shadows: [
        "shadow-none",
        "shadow-xs",
        "shadow-sm",
        "shadow",
        "shadow-md",
        "shadow-lg",
        "shadow-xl",
        "shadow-2xl",
        "shadow-inner"
      ],
      questionandAnswers: [
        {
          key: "What's the best thing about Switzerland?",
          value:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
        },
        {
          key: "How do you make holy water?",
          value:
            "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus."
        },
        {
          key: "What do you call someone with no body and no nose?",
          value:
            "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem."
        },
        {
          key: "Why do you never see elephants hiding in trees?",
          value:
            "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
        }
      ],
      ListItems: [
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
        },
        {
          key: "Fifth Item",
          value:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
        }
      ]
    };
  },
  computed: {
    ...mapGetters("user", ["user", "isLoggedIn"])
  },
  methods: {
    ...mapActions("theme", ["setColor", "setShadow"])
  },
  watch: {
    themeColor(val) {
      this.setColor(val);
    },
    themeShadow(val) {
      this.setShadow(val);
    }
  }
};
</script>
