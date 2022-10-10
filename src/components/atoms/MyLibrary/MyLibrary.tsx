import { useStyles } from "../../../theme";
import Typography from "@mui/material/Typography";
import React, { ReactNode } from "react";


interface PropTypes {
  children: ReactNode;
}

export default function MyLibrary(props: PropTypes) {
  const classes = useStyles();
  return (
    <div className={classes.myLibrary}>
      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
        {props.children}
      </Typography>
    </div>
  );
}
