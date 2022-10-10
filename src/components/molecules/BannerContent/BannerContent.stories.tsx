import BannerContent from "./BannerContent";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Molecules/BannerContent",
  component: BannerContent,
} as ComponentMeta<typeof BannerContent>;

export const banner: ComponentStory<typeof BannerContent> = () => <BannerContent></BannerContent>;
