import { ComponentStory, ComponentMeta } from "@storybook/react";
import UserAvatar from "./UserAvatar";

export default {
  title: "Molecules/UserAvatar",
  component: UserAvatar,
} as ComponentMeta<typeof UserAvatar>;

export const userLogin: ComponentStory<typeof UserAvatar> = () => (
  <UserAvatar
    logClick={false}
    handleLogin={function (): void {
      throw new Error("Function not implemented.");
    }}
  ></UserAvatar>
);