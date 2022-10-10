import { SearchBar } from "./SearchBar";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "molecules/SearchBox",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

export const searchBox: ComponentStory<typeof SearchBar> = () => (
  <SearchBar></SearchBar>
);
