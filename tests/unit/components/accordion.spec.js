import { mount } from "@vue/test-utils";
import Accordion from "@/components/Accordion";
import { nextTick } from "vue";

describe("Accordion.vue", () => {
  it("renders items when passed into it", async () => {
    const itemsArray = [
      {
        key: "First Key",
        value: "First Value"
      }
    ];

    const wrapper = mount(Accordion, {
      props: {
        items: itemsArray
      }
    });

    //Make sure the key is in the html
    expect(wrapper.html()).toContain(itemsArray[0].key);
  });

  it("will show the value when clicked", async () => {
    const itemsArray = [
      {
        key: "First Key",
        value: "First Value"
      }
    ];

    const wrapper = mount(Accordion, {
      props: {
        items: itemsArray
      }
    });

    //Make sure the key is in the html
    expect(wrapper.html()).toContain(itemsArray[0].key);

    //Click on the button to open the accordian
    wrapper.find("button").trigger("click");

    //Wait for the accordian to open
    await nextTick();

    //Make sure the value is in the html
    expect(wrapper.html()).toContain(itemsArray[0].value);
  });
});
