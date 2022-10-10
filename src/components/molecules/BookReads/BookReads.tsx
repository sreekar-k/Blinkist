import * as React from "react";
import { ReactNode } from "react";
import { useStyles } from "../../../theme";
import PersonIcon from "../../atoms/PersonIcon/PersonIcon";
import BookReadTime from "../../atoms/BookReadTime/BookReadTime";

export interface IViewProps {
  children: ReactNode;
}

export default function BookReads(props: IViewProps) {
  const classes = useStyles();
  return (
    <div className={classes.time} data-testid='bookReads' >
      <PersonIcon />
      <BookReadTime>{props.children}</BookReadTime>
    </div>
  );
}
