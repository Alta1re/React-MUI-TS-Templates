import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Divider,
  Typography,
  Paper,
} from "@mui/material";

import dataImg from "../../assets/images/data-5606639_1920.jpg";
import codinImg from "../../assets/images/coding-4570799_1920.jpg";
import smartImg from "../../assets/images/smartphone-3179295_1920.jpg";

import classes from "./Layout.module.css";

export interface ILayoutProps {}

export default function Layout(props: ILayoutProps) {
  return (
    <div>
      <Navbar />

      <Grid
        container
        style={{
          display: "flex",
          backgroundImage: `url(${codinImg})`,
          height: "100vh",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          margin: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(150,150,150,0.5)",
            zIndex: 0,
          }}
        />
        <Grid item xs={12} style={{ zIndex: 1 }}>
          <h1 className={classes.Heading}>hager - web</h1>
          <h2
            style={{
              fontSize: "3rem",
              color: "white",
              textShadow: "2px 1px 3px black",
              marginTop: "5px",
            }}
          >
            Apps - Webapps - Websites
          </h2>
          <Grid container justifyContent="center">
            <Paper sx={{ padding: "10px" }}>
              <Typography variant="body1">
                Wir erstellen Ihre App, WebApp oder Website ganz nach Ihren
                Wünschen.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundImage: `url(${dataImg})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          margin: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(150,150,150,0.5)",
            zIndex: 0,
          }}
        />
        <Card raised sx={{ borderRadius: "20px", zIndex: 1 }}>
          <CardHeader title="Mobile Apps" subheader="Für iOS und Android" />
          <Divider />
          <CardMedia
            component="img"
            height="194"
            image={dataImg}
            alt="Paella dish"
          />
          <Divider />

          <CardContent style={{ padding: "20px" }}>
            <h1
              style={{
                fontFamily: "Charmonman-bold",
                fontSize: "5rem",
                color: "white",
                textShadow: "2px 1px 3px black",
                padding: "20px",
              }}
            >
              hager-web
            </h1>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundImage: `url(${smartImg})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          margin: 0,
          // background:
          //   "linear-gradient(45deg,#5CE875,#34D15F,#00B343,#009948,#008049)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(150,150,150,0.5)",
            zIndex: 0,
          }}
        />
      </Grid>
    </div>
  );
}
