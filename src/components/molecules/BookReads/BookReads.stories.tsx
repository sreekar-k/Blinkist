import BookReads from "./BookReads";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Molecules/BookReads",
  component: BookReads,
} as ComponentMeta<typeof BookReads>;

export const bookReads: ComponentStory<typeof BookReads> = () => <BookReads>1.5k reads</BookReads>;
