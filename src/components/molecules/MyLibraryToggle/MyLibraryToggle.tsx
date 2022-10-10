import { Typography,Grid } from "@mui/material";
import { useStyles } from "../../../theme";
import { useNavigate, useLocation } from "react-router-dom";
import React from 'react'

export interface IMyLibraryToggleProps {
  active: string;
  setActive: (activeState: string) => void;
}

export default function MyLibraryToggle(props: IMyLibraryToggleProps) {
  const classes = useStyles();
  const navigation = useNavigate();
  const location = useLocation();

  return (
    <Grid
      container
      
      sx={{
        marginLeft: "120px",
        marginBottom: "30px",
      }}
    >
      <Grid
        item
        onClick={() => {
          props.setActive("currentlyreading");
          navigation("/currentlyreading");
        }}
        className={
          (props.active === "currentlyreading" &&
            location.pathname === "/currentlyreading") ||
          location.pathname === "/"
            ? classes.libraryActive
            : classes.libraryDefault
        }
        data-testid="myLibraryToggle"
      >
        <Typography variant="body1"> Currently reading</Typography>
      </Grid>
      <Grid
        item
        onClick={() => {
          props.setActive("finished");
          navigation("/finishedreading");
        }}
        className={
          props.active === "finished" &&
          location.pathname === "/finishedreading"
            ? classes.libraryActive
            : classes.libraryDefault    
        }
        data-testid="finishedTab"
      >
        <Typography  variant="body1"> Finished</Typography>
      </Grid>
    </Grid>
  );
}
