import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography
          component="div"
          style={{ backgroundColor: "#eff6ff", height: "100vh", padding: 12 }}
        >
          <Grid container>
            <Grid item xs={12}>
              <Divider style={{ margin: 24 }} />
            </Grid>
            <Grid item xs={12}>
              <Typography align="center" variant="h2">
                Hola queridisimo.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <img
                style={{
                  width: "calc(100% + 72px)",
                  height: "120px",
                  marginLeft: "-36px",
                  marginBottom: "12px",
                  objectFit: "cover",
                  objectPosition: "0% 56%",
                }}
                src="/we-are.jpg"
                alt="The Groom and the Bride"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography align="center" variant="h3" paragraph>
                Es un honor que formes parte de un evento tan importante en
                nuestras vidas.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align="center" variant="h5" paragraph>
                Confirma tu asistenciaaaaaaaaaaaaaaaaaaa porfavooooooor
              </Typography>
            </Grid>
            <Grid item xs={12} align="center">
              <Button variant="contained" color="primary">Confirmeishon</Button>
            </Grid>
            <Grid item xs={12}>
              <Divider style={{ margin: 24 }} />
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
