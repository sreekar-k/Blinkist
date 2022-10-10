import {  Grid } from "@mui/material";
import * as React from "react";
import AuthorName from "../../../atoms/AuthorName/AuthorName";
import BookTitle from "../../../atoms/BookTitle/BookTitle";
import DisplayTime from "../../DisplayTime/DisplayTime";
import BookReads from "../../BookReads/BookReads";

import { ReactNode } from "react";
import Box from "@material-ui/core/Box";

export interface IBookCardProps {
  children?: ReactNode;
  image: string;
  title: string;
  author: string;
  time: string;
  reads?: string;
}

export default function BookCard(props: IBookCardProps) {
  
  return (
    <Grid
      item
      sx={{
        borderRadius: "8px",
        border: "1px solid #E1ECFC",
        overflow: "hidden",
        height: "470px",
      }}
      container
      direction="column"
      data-testid="defaultBookCard"
    >
      <img src={`CoverImages/${props.image}.png`} alt="Book "></img>
      <Box flexGrow={1}>
        <Grid
          item
          container
          direction="column"
          rowSpacing={2}
          sx={{ marginLeft: "15px" }}
        >
          <Grid item>
            <BookTitle>{props.title}</BookTitle>
          </Grid>
          <Grid item>
            <AuthorName>{props.author}</AuthorName>
          </Grid>
          <Grid item container alignItems="center" columnSpacing={4}>
            <Grid item>
              <DisplayTime>{props.time}</DisplayTime>
            </Grid>
            <Grid item>{props.reads && <BookReads data-testid="noOfReads">{props.reads}</BookReads>}</Grid>
          </Grid>
        </Grid>
      </Box>
      {`${props.children}` !== "undefined" && (
        <Grid item container>
          {props.children}
        </Grid>
      )}
      <Grid item container sx={{ height: "10px" }} data-testid="readAgain">
        <Grid item xs={4} sx={{ backgroundColor: "#E1ECFC" }} />
        <Grid item xs={8} sx={{ background: "#F1F6F4" }} />
      </Grid>
    </Grid>
  );
}
