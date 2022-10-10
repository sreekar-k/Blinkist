import BookReadTime from "./BookReadTime";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/BookReadTime",
  component: BookReadTime,
} as ComponentMeta<typeof BookReadTime>;

export const bookReadTime: ComponentStory<typeof BookReadTime> = () => (
  <BookReadTime>12-minute read</BookReadTime>
);
