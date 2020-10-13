<template>
  <div>
    <card class="my-4" heading="Theme">
      <search-select
        class="my-4"
        v-model="themeColor"
        :items="colors"
        placeholder=""
        label="Color"
        help-text="Select the color for the application"
      />
      <search-select
        class="my-4"
        v-model="themeShadow"
        :items="shadows"
        placeholder=""
        label="Shadow"
        help-text="Select the color for the application"
      />
      <search-select
        class="my-4"
        v-model="themeRounded"
        :items="rounded"
        placeholder=""
        label="Rounded"
        help-text="Select the border shape"
      />
    </card>
    <card class="my-4" heading="Carts">
      <chart
        height="300"
        type="line"
        :options="options"
        :series="series"
      ></chart>
    </card>
    <card class="my-4" heading="Card" subheading="Some text here">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged.
    </card>
    <card class="my-4" heading="Tools">
      <badge class="my-2">Badge</badge>
      <progress-spinner class="my-2" :size="8" />
      <progress-bar class="my-2" :height="4" v-model="progressBarValue" />
      <div class="relative inline-flex my-2">
        <theme-button>Ping</theme-button>
        <span class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
          <ping color="pink" />
        </span>
      </div>
    </card>
    <card class="my-4" heading="Countdown" :padding="false">
      <countdown :time="new Date(2021, 0, 1)"></countdown>
    </card>
    <div class="my-4">
      <data-table :items="tableItems">
        <template v-slot:title="{ item }">
          <span class="italic text-gray-800 bold">{{ item }}</span>
        </template>

        <template v-slot:price="{ item }">
          <badge :color="item > 700 ? 'red' : 'green'">${{ item }}</badge>
        </template>

        <template v-slot:edit>
          <span :class="`text-${color}-500 cursor-pointer`">Edit</span>
        </template>
      </data-table>
    </div>
    <card class="my-4" heading="Breadcrumbs">
      <breadcrumbs></breadcrumbs>
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
          :rules="['max:255', 'required', 'email']"
          label="Name"
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Card from "../../components/Card";
import Badge from "../../components/Badge";
import ThemeButton from "../../components/form/Button";
import Stats from "../../components/Stats";
import DescriptionList from "../../components/DescriptionList";
import Modal from "../../components/Modal";
import Accordion from "../../components/Accordion";
import Toggle from "../../components/form/Toggle";
import FormInput from "../../components/form/Input";
import SearchSelect from "../../components/form/SearchSelect";
import DataTable from "../../components/DataTable";
import ProgressSpinner from "../../components/ProgressSpinner";
import ProgressBar from "../../components/ProgressBar";
import Ping from "../../components/Ping";
import Countdown from "../../components/Countdown";
import Breadcrumbs from "../../components/Breadcrumbs";
import Chart from "../../components/Chart";
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
    DataTable,
    ProgressSpinner,
    ProgressBar,
    Ping,
    Countdown,
    Breadcrumbs,
    Chart
  },
  data() {
    return {
      themeColor: "",
      themeShadow: "",
      themeRounded: "",
      toggleState: true,
      openModal: false,
      inputText: "",
      searchSelect: "",
      progressBarValue: 57,
      options: {
        tooltip: {
          enabled: true,
          x: {
            show: true,
            format: "hh:mm:ss"
          }
        },
        colors: ["#6875f5"],
        fill: {
          type: "gradient",
          gradient: {
            type: "vertical",
            opacityFrom: 0.5,
            opacityTo: 0.1,
            stops: [0, 100],
            colorStops: []
          }
        },
        stroke: {
          show: true,
          curve: "smooth",
          width: 2
        },
        grid: {
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        chart: {
          //id: 'vuechart-example'
          toolbar: {
            show: false,
            theme: "light",
            tools: {
              download: false,
              selection: false,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true,
              customIcons: []
            }
          }
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          labels: {
            show: true
          }
        },
        yaxis: {
          show: true,
          labels: {
            show: true
          }
        }
      },
      series: [
        {
          name: "People",
          type: "area",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
        // {
        //   name: 'series-1',
        //   data: [35, 45, 49, 55, 55, 69, 89, 99]
        // }
      ],
      tableItems: [
        {
          title: "Intro to CSS",
          name: "Derek",
          price: 858,
          edit: ""
        },
        {
          title: "Backend API's",
          name: "Adam",
          price: 112,
          edit: ""
        },
        {
          title: "Intro to JavaScript",
          name: "Chris",
          price: 1280,
          edit: ""
        },
        {
          title: "Learning SQL",
          name: "John",
          price: 858,
          edit: ""
        },
        {
          title: "ASP",
          name: "Joe",
          price: 1078,
          edit: ""
        },
        {
          title: "Its GO time",
          name: "Lee",
          price: 645,
          edit: ""
        },
        {
          title: "Rust 101",
          name: "Mac",
          price: 90,
          edit: ""
        }
      ],
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
      rounded: [
        "rounded-none",
        "rounded-sm",
        "rounded",
        "rounded-md",
        "rounded-lg"
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
  created() {
    this.test = Card;
    setInterval(() => {
      this.progressBarValue = Math.floor(Math.random() * 101);
    }, 5000);
  },
  computed: {
    ...mapGetters("user", ["user", "isLoggedIn"]),
    ...mapGetters("theme", ["color"])
  },
  methods: {
    ...mapActions("theme", ["setColor", "setShadow", "setRounded"])
  },
  watch: {
    themeColor(val) {
      this.setColor(val);
    },
    themeShadow(val) {
      this.setShadow(val);
    },
    themeRounded(val) {
      this.setRounded(val);
    }
  }
};
</script>
