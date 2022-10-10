import FinishedReading from "./FinishedReading";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Organism/FinishedReading",
  component: FinishedReading,
} as ComponentMeta<typeof FinishedReading>;

export const finishedReading: ComponentStory<typeof FinishedReading> = () => (
  <FinishedReading></FinishedReading>
);
