import BookDetail from "./BookDetailPage";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Molecules/BookDetailPage",
  component: BookDetail,
} as ComponentMeta<typeof BookDetail>;

export const bookDetail: ComponentStory<typeof BookDetail> = () => (
  <BookDetail></BookDetail>
);
