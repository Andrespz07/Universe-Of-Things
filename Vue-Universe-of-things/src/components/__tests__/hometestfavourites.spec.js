import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HomeView from "../views/HomeView.vue";
import FavouritesView from "../views/FavouritesView.vue";

describe("HomeView", () => {
  it("opens 'Favourites' when clicked", () => {
    const wrapper = mount(HomeView);
    wrapper.findComponent(FavouritesView);
    expect(wrapper.vue()).toContain("Favourites");
  });
});
