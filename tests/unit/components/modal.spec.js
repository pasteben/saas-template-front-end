import { mount } from "@vue/test-utils";
import Modal from "@/components/Modal";
import { nextTick } from "vue";

describe("Modal.vue", () => {
  it("does not show items in the Modal when not open", async () => {
    const wrapper = mount(Modal, {
      slots: {
        default: "<div id='test'>Testing</div>"
      }
    });

    expect(wrapper.html()).not.toContain("Testing");
  });

  it("shows content in the modal when clicked", async () => {
    const wrapper = mount(Modal, {
      slots: {
        default: "<div id='test'>Testing</div>"
      }
    });

    expect(wrapper.html()).not.toContain("Testing");

    //Click on the button to open the modal
    wrapper.find("#test").trigger("click");

    //Wait for the modal to open
    await nextTick();

    //Make sure the value is in the html
    expect(wrapper.html()).toContain("John Doe");
  });
});
