import BannerContent from "./BannerContent";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/BannerContent",
  component: BannerContent,
} as ComponentMeta<typeof BannerContent>;

export const bannerContent: ComponentStory<typeof BannerContent> = () => (
  <BannerContent></BannerContent>
);
