import CurrentlyReading from "./CurrentlyReading";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Organism/CurrentlyReading",
  component: CurrentlyReading,
} as ComponentMeta<typeof CurrentlyReading>;

export const cuurentlyReading: ComponentStory<typeof CurrentlyReading> = () => (
  <CurrentlyReading></CurrentlyReading>
);
