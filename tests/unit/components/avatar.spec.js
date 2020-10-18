import { mount } from "@vue/test-utils";
import Avatar from "@/components/Avatar";

describe("Avatar.vue", () => {
  it("renders the initials of the name", async () => {
    const name = "John Doe";

    const wrapper = mount(Avatar, {
      props: {
        name: name
      }
    });

    expect(wrapper.html()).toContain("JD");
  });
});
