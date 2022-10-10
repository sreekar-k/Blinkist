import * as React from "react";
import { ReactNode } from "react";
import { useStyles } from "../../../theme";
import BookReadTime from "../../atoms/BookReadTime/BookReadTime";
import TimerIcon from "../../atoms/TimerIcon/TimerIcon";
export interface IDisplayTimeProps {
  children: ReactNode;
}

export default function DisplayTime(props: IDisplayTimeProps) {
  const classes = useStyles();
  return (
    <div className={classes.time}>
      <TimerIcon />
      <BookReadTime>{props.children}</BookReadTime>
    </div>
  );
}
