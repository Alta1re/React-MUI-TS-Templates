import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";

import { LanguageContext } from "../../context/languageContext";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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

import SignUp from "../../components/SignUp/SignUp";

import dataImg from "../../assets/images/data-5606639_1920.jpg";
import codinImg from "../../assets/images/coding-4570799_1920.jpg";
import fisherImg from "../../assets/images/fisherman_1920.jpg";

import classes from "./Layout.module.css";

export interface ILayoutProps {}

interface SignUpData {
  email: string;
  password: string;
}

export default function Layout(props: ILayoutProps) {
  const { language } = useContext(LanguageContext);
  const onSubmitSignupHandler = (data: SignUpData) => {
    console.log("DATA: ", data);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("USER", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("AUTH_ERROR: ", errorCode, " : ", errorMessage);
        // ..
      });
  };
  console.log("LANG: ", language);

  return (
    <div>
      <Navbar />
      <Grid
        id="home"
        container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundImage: `url(${fisherImg})`,
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
            backgroundColor: "rgba(150,150,150,0.1)",
            zIndex: 0,
          }}
        />
        <SignUp onSubmit={onSubmitSignupHandler} language={language} />
      </Grid>

      <Grid
        id="coding"
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
          <h2 className={classes.Subtitle}>Apps - Webapps - Websites</h2>
          <Grid container justifyContent="center">
            <Paper sx={{ padding: "10px" }} elevation={3}>
              <Typography variant="body1">
                Wir erstellen Ihre App, WebApp oder Website ganz nach Ihren
                Wünschen.
              </Typography>
              <Typography variant="body1">
                Von der einfachen Datenbankapplikation bis hin zur nativen App
                mit Backend-API, wir bringen Ihre Idee in Form.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        id="data"
        container
        className={classes.SecondContainer}
        style={{
          backgroundImage: `url(${dataImg})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
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
    </div>
  );
}
