import { describe, it, expect } from "vitest";

import { mount, RouterLinkStub } from "@vue/test-utils";
import HomeView from "../../views/HomeView.vue";
import { RouterLink } from "vue-router";

describe("HomeView", () => {
  it("opens 'Characters' when clicked", () => {
    const wrapper = mount(HomeView,{
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    } );
    const title = wrapper.find('h1')
    expect(title.exists).toBeTruthy();
    expect(title.text()).toBe('100 AÑOS DE EMOCIÓN');
  });
});
