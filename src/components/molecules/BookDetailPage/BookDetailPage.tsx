import { ArrowForward } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import * as React from "react";
import AuthorName from "../../atoms/AuthorName/AuthorName";
import DisplayTime from "../DisplayTime/DisplayTime";
import { useNavigate } from "react-router-dom";

export interface IBookDetailProps {}

export default function BookDetail(_props: IBookDetailProps) {
  const navigate = useNavigate();
  return (
    <Grid container>
      <Grid item md={8}>
        <Grid container direction="column" rowSpacing={3} data-testid="bookDetail">
          <Grid item>
            <Typography variant="heading">
              Beyond Entrepreneurship 2.0
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" sx={{ fontWeight: 400 }}>
              Turning Your Business into an Enduring Great Company
            </Typography>
          </Grid>
          <Grid item>
            <AuthorName>By Jim Collins and Bill Lazier</AuthorName>
          </Grid>
          <Grid item>
            <DisplayTime>15-minute read</DisplayTime>
          </Grid>
        </Grid>
        <Grid item container sx={{ marginTop: "40px" }} columnSpacing={4}>
          <Grid item>
            <Button
              variant="outlined"
              sx={{ textTransform: "none", border: "1px solid black" }}
            >
              Read Now
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{ textTransform: "none" }}
              onClick={(_event) => {
                navigate("/finishedreading");
              }}
            >
              Finished Reading
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="text"
              endIcon={<ArrowForward></ArrowForward>}
              sx={{ textTransform: "none", color: "#6D787E" }}
            >
              Send to Kindle
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={4}>
        <img src="CoverImages/2.png" alt="Entrepreneur Cover" />
      </Grid>
    </Grid>
  );
}
