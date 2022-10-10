import React from "react";
import { Typography } from "@mui/material";

const BannerContent = () => {
  return (
    <Typography data-testid='exploreContent' variant="subtitle2" width="461px" sx={{ color: "#6D787E" }}>
      Everything you need to know about thriving on a shoestring budget, making
      your first million, and hiring right from the start.
    </Typography>
  );
};

export default BannerContent;
