import { mount } from "@vue/test-utils";
import Dropdown from "@/components/Dropdown";
import { nextTick } from "vue";

describe("Dropdown.vue", () => {
  it("does not show items in the dropdown when not clicked", async () => {
    const wrapper = mount(Dropdown, {
      slots: {
        default: "<div id='test'>Testing</div>",
        content: "<div id='content'>John Doe</div>"
      }
    });

    expect(wrapper.html()).toContain("Testing");
    expect(wrapper.html()).not.toContain("John Doe");
  });

  it("shows content in the dropdown when clicked", async () => {
    const wrapper = mount(Dropdown, {
      slots: {
        default: "<div id='test'>Testing</div>",
        content: "<div id='content'>John Doe</div>"
      }
    });

    expect(wrapper.html()).toContain("Testing");
    expect(wrapper.html()).not.toContain("John Doe");

    //Click on the button to open the accordian
    wrapper.find("#test").trigger("click");

    //Wait for the accordian to open
    await nextTick();

    //Make sure the value is in the html
    expect(wrapper.html()).toContain("John Doe");
  });
});
