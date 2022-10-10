import Entrepreneurship from "./Entrepreneurship";
import { ComponentStory, ComponentMeta } from "@storybook/react";


export default {
  title: "Organism/Entrepreneurship",
  component: Entrepreneurship,
} as ComponentMeta<typeof Entrepreneurship>;

export const entrepreneurship: ComponentStory<typeof Entrepreneurship> = () => (
  <Entrepreneurship></Entrepreneurship>
);




