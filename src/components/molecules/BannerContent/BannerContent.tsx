import { Grid } from "@mui/material";
import React from "react";
import ExploreContent from "../../atoms/BannerContent/BannerContent";
import ExploreTitle from "../../atoms/BannerTitle/BannerTitle";
const BannerContent = () => {
  return (
    <Grid container rowSpacing="15px" direction="column" data-testid='bannerContent' >
      <Grid item>
        <ExploreTitle />
      </Grid>
      <Grid item>
        <ExploreContent />
      </Grid>
    </Grid>
  );
};

export default BannerContent;
