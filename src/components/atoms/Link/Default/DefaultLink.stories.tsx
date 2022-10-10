import { ComponentMeta, ComponentStory } from "@storybook/react";
import DefaultLink from "./DefaultLink";


export default {
  title: "Atoms/Link/Default",
  component: DefaultLink,
} as ComponentMeta<typeof DefaultLink>;

const template: ComponentStory<typeof DefaultLink> = (args) => (
  <DefaultLink {...args}></DefaultLink>
);
export const Default = template.bind({});
Default.args = {
  //   varaint: "navLink",
  children: "My Library",
};
