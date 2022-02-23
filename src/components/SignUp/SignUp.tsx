import React, { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import classes from "./SignUp.module.css";

import TEXT from "./language";

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const charlength = "(?=.{8,})";
const uppercaseLetter = "(?=.*[A-Z])";
const lowercaseLetter = "(?=.*[a-z])";
const digit = "(?=.*[0-9])";
const specialChar = "([^A-Za-z0-9])";

interface SignupProps {
  onSubmit: Function;
  language: "de" | "en";
}

export default function SignUp(props: SignupProps) {
  const { onSubmit, language } = props;

  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(Boolean);
  const [password, setPassword] = useState("");
  const [passwordHasUpperCase, setPasswordHasUpperCase] = useState(Boolean);
  const [passwordHasLowerCase, setPasswordHasLowerCase] = useState(Boolean);
  const [passwordHasDigit, setPasswordHasDigit] = useState(Boolean);
  const [passwordHasSpecial, setPasswordHasSpecial] = useState(Boolean);
  const [passwordHasLength, setPasswordHasLength] = useState(Boolean);
  const [passwordValid, setPasswordValid] = useState(Boolean);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(Boolean);

  useEffect(() => {
    passwordHasDigit &&
    passwordHasLength &&
    passwordHasLowerCase &&
    passwordHasUpperCase &&
    passwordHasSpecial
      ? setPasswordValid(true)
      : setPasswordValid(false);
  }, [
    passwordHasDigit,
    passwordHasLength,
    passwordHasLowerCase,
    passwordHasUpperCase,
    passwordHasSpecial,
  ]);

  useEffect(() => {
    confirmPassword === password
      ? setConfirmPasswordValid(true)
      : setConfirmPasswordValid(false);
  }, [password, confirmPassword]);

  const onSubmitHandler = () => {
    onSubmit({ email: email, password: password });
  };

  const onChangeEmailHandler = (string: string) => {
    if (string.match(mailformat)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
    setEmail(string);
  };
  const onChangePasswordHandler = (string: string) => {
    string.match(new RegExp(uppercaseLetter))
      ? setPasswordHasUpperCase(true)
      : setPasswordHasUpperCase(false);

    string.match(new RegExp(lowercaseLetter))
      ? setPasswordHasLowerCase(true)
      : setPasswordHasLowerCase(false);

    string.match(new RegExp(digit))
      ? setPasswordHasDigit(true)
      : setPasswordHasDigit(false);

    string.match(new RegExp(specialChar))
      ? setPasswordHasSpecial(true)
      : setPasswordHasSpecial(false);

    string.match(new RegExp(charlength))
      ? setPasswordHasLength(true)
      : setPasswordHasLength(false);
    setPassword(string);
  };
  const onChangeConfirmPasswordHandler = (string: string) => {
    setConfirmPassword(string);
  };

  return (
    <Grid className={classes.Container} container>
      <Grid item xs={12} md={12} className={classes.Center}>
        <Card className={classes.Card}>
          {!passwordValid && (
            <div className={classes.ValidationCard}>
              <Typography variant="caption">
                {TEXT.PASSWORD_MUST_HAVE[language]}
              </Typography>
              <ul className={classes.ValidationList}>
                {passwordHasLength ? null : (
                  <li>
                    <Typography variant="caption">
                      {TEXT.PASS_CHARS[language]}
                    </Typography>
                  </li>
                )}
                {passwordHasLowerCase ? null : (
                  <li>
                    <Typography variant="caption">
                      {TEXT.LOWER_CASE[language]}
                    </Typography>
                  </li>
                )}
                {passwordHasUpperCase ? null : (
                  <li>
                    <Typography variant="caption">
                      {TEXT.UPPER_CASE[language]}
                    </Typography>
                  </li>
                )}
                {passwordHasDigit ? null : (
                  <li>
                    <Typography variant="caption">
                      {TEXT.DIGIT[language]}
                    </Typography>
                  </li>
                )}
                {passwordHasSpecial ? null : (
                  <li>
                    <Typography variant="caption">
                      {TEXT.SPECIAL_CHAR[language]}
                    </Typography>
                  </li>
                )}
              </ul>
            </div>
          )}
          <CardHeader title="Signup" />

          <CardContent>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
                display: "flex",
                flexDirection: "column",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                className={classes.Input}
                id="email-input"
                label="email"
                variant="outlined"
                InputProps={{ type: "email", autoComplete: "email" }}
                color={
                  emailValid
                    ? "success"
                    : emailValid === undefined
                    ? "primary"
                    : "error"
                }
                onChange={(event) => onChangeEmailHandler(event.target.value)}
                value={email}
              />
              <TextField
                className={classes.Input}
                id="password-input"
                label="password"
                variant="outlined"
                InputProps={{ type: "password", autoComplete: "new-password" }}
                onChange={(event) =>
                  onChangePasswordHandler(event.target.value)
                }
                value={password}
                color={
                  passwordValid
                    ? "success"
                    : passwordValid === undefined
                    ? "primary"
                    : "error"
                }
              />
              <TextField
                className={classes.Input}
                id="confirm-password-input"
                label="confirm password"
                variant="outlined"
                InputProps={{ type: "password", autoComplete: "new-password" }}
                onChange={(event) =>
                  onChangeConfirmPasswordHandler(event.target.value)
                }
                value={confirmPassword}
                color={
                  confirmPasswordValid
                    ? "success"
                    : confirmPasswordValid === undefined
                    ? "primary"
                    : "error"
                }
              />
            </Box>
            <Typography variant="caption">
              {TEXT.VIEW_OUR[language]}
              <a href="https://globe-chaser.de/agb">
                {TEXT.TERMS_OF_SERVICE[language]}
              </a>
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              color="secondary"
              onClick={onSubmitHandler}
              disabled={!emailValid || !passwordValid || !confirmPasswordValid}
            >
              {TEXT.SUBMIT[language]}
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
