import { mount } from "@vue/test-utils";
import DescriptionList from "@/components/DescriptionList";

describe("DescriptionList.vue", () => {
  it("renders items when passed into it", async () => {
    const itemsArray = [
      {
        key: "First Key",
        value: "First Value"
      },
      {
        key: "Second Key",
        value: "Second Value"
      }
    ];

    const wrapper = mount(DescriptionList, {
      props: {
        items: itemsArray
      }
    });

    //Make sure the key is in the html
    expect(wrapper.html()).toContain(itemsArray[0].key);
    expect(wrapper.html()).toContain(itemsArray[0].value);
    expect(wrapper.html()).toContain(itemsArray[1].key);
    expect(wrapper.html()).toContain(itemsArray[1].value);
  });
});
