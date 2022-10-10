import MyLibraryToggle from "./MyLibraryToggle";
import { ComponentStory, ComponentMeta } from "@storybook/react";


export default {
  title: "Molecules/MyLibraryToggle",
  component: MyLibraryToggle,
} as ComponentMeta<typeof MyLibraryToggle>;

export const myLibraryToggle: ComponentStory<typeof MyLibraryToggle> = () => {
  return (
    <MyLibraryToggle
      active={""}
      setActive={function (_activeState: string): void {
        throw new Error("Function not implemented.");
      }}
    ></MyLibraryToggle>
  );
};
