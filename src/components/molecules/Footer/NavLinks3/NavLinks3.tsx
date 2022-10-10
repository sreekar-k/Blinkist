import { Grid } from "@mui/material";
import React from "react";
import NavHead from "../../../atoms/Footer/Nav/NavHead/NavHead";
import NavItems from "../../../atoms/Footer/Nav/NavItems/NavItems";

const list = ["About", "Careers", "partners", "Code of Conduct"];

const NavLinks3 = () => {
  return (
    <Grid 
    container
    
    data-testid='navLink3'
      direction="column"
      rowSpacing="16px"
      columnSpacing="32px"
    >
      <Grid item>
        <NavHead name="Company" />
      </Grid>
      {list.map((e) => (
        <Grid item key={e}>
          <NavItems name={e} />
        </Grid>
      ))}
    </Grid>
  );
};
export default NavLinks3;
