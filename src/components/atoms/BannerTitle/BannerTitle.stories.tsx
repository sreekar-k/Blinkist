import BannerTitle from "./BannerTitle";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Atoms/BannerContent",
  component: BannerTitle,
} as ComponentMeta<typeof BannerTitle>;

export const bannerTitle: ComponentStory<typeof BannerTitle> = () => (
  <BannerTitle></BannerTitle>
);
