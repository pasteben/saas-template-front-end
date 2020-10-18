import { mount } from "@vue/test-utils";
import Breadcrumbs from "@/components/Breadcrumbs";

describe("Breadcrumbs.vue", () => {
  it("renders the Breadcrumbs with links array as props", async () => {
    const $route = { path: "http://www.example-path.com" };

    const wrapper = mount(Breadcrumbs, {
      props: {
        links: [
          {
            text: "Home",
            name: "home"
          }
        ]
      }
    });

    expect(wrapper.html()).toContain("Home");
  });
});
