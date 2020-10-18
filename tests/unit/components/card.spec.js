import { mount } from "@vue/test-utils";
import Card from "@/components/Card";
import store from "@/store/index";

describe("Card.vue", () => {
  it("renders the Card with slot contnet", async () => {
    const wrapper = mount(Card, {
      global: {
        plugins: [store]
      },
      slots: {
        default: "This is the content section."
      },
      props: {
        heading: "Heading Here"
      }
    });

    expect(wrapper.html()).toContain("Heading Here");
    expect(wrapper.html()).toContain("This is the content section.");
  });

  it("renders the Card Heading named slot", async () => {
    const wrapper = mount(Card, {
      global: {
        plugins: [store]
      },
      slots: {
        default: "This is the content section.",
        header: "<h3>This is the heading slot</h3>"
      },
      props: {
        heading: "Heading Here"
      }
    });

    expect(wrapper.html()).toContain("<h3>This is the heading slot</h3>");
    expect(wrapper.html()).not.toContain("Heading Here"); //Make sure the heading prop is gone
    expect(wrapper.html()).toContain("This is the content section.");
  });
});
