import BookDetailPage from "./BookDetailPage";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Organism/BookDetailPage",
  component: BookDetailPage,
} as ComponentMeta<typeof BookDetailPage>;

export const bookDetailPage: ComponentStory<typeof BookDetailPage> = () => (
  <BookDetailPage></BookDetailPage>
);
