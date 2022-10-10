import Grid from "@mui/material/Grid";
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";

export default function AuthPage() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div 
    // style={{backgroundColor:"black",width:"100%",height:"100%",minHeight: "100vh"}}
     > 

    <Grid
    container
      direction="column"
      sx={{
        width: "700px",
        height: "500px",
        margin: "200px auto",
        background: "#FFFACD",
        borderRadius: "20px",
      }}
      alignItems="center"
      rowSpacing={2}
      data-testid="loginPage"
    >
      <Grid item sx={{ marginTop: "30px" }}>
        
      </Grid>
      <Grid item>
        <Typography variant="h2" sx={{color:"red"}} >Welcome</Typography>
      </Grid>
      <Grid item container direction="column" sx={{ width: "25%" }}>
        <Button variant="contained" onClick={() => loginWithRedirect()}>
          Login
        </Button>
      </Grid>
      <Grid item container direction="column" sx={{ width: "25%" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => loginWithRedirect({ screen_hint: "signup" })}
        >
          Signup
        </Button>
      </Grid>
    </Grid>
    </div>
  );
}