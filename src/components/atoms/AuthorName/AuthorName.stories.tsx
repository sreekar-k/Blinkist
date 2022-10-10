import AuthorName from "./AuthorName";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/AuthorName",
  component: AuthorName,
} as ComponentMeta<typeof AuthorName>;

export const author: ComponentStory<typeof AuthorName> = () => (
  <AuthorName>Erica Keswin</AuthorName>
);
