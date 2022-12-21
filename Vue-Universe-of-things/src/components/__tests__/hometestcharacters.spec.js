import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HomeView from "../../views/HomeView.vue";
import CharactersView from "../../views/CharactersView.vue";

describe("HomeView", () => {
  it("opens 'Characters' when clicked", () => {
    const wrapper = mount(HomeView);
    wrapper.findComponent(CharactersView);
    expect(wrapper.vue()).toContain("Characters");
  });
});
