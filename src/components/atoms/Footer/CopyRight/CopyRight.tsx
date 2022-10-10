import React from "react";
import { Typography } from "@mui/material";

const CopyRight = () => {
  return (
    <Typography variant="body1" data-testid="copyright" sx={{ fontWeight: "400", color: "#6D787E" }}>
      © Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy Policies
    </Typography>
  );
};

export default CopyRight;
