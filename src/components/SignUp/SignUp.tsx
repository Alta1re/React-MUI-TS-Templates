import React, { useState, useEffect } from "react";

// material-ui components
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// CSS for this component
import classes from "./SignUp.module.css";

// loacalization file
import { useTranslation } from "utils/i18n";

// regex for validation
// eslint-disable-next-line no-useless-escape
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const charlength = "(?=.{8,})";
const uppercaseLetter = "(?=.*[A-Z])";
const lowercaseLetter = "(?=.*[a-z])";
const digit = "(?=.*[0-9])";
const specialChar = "([^A-Za-z0-9])";

// typescript interface for props
// onSubmit is required function, and will be called with two props:
// "email" and "password"
// language and termsLink are optional props
// if termsLink is provided, the link will be shown at the bottom of the
// card content (above the button)
interface SignupProps {
  onSubmit: Function;
  termsLink?: string;
}

export default function SignUp(props: SignupProps) {
  // object-destructuring for props
  const { onSubmit, termsLink = "" } = props;

  // states
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

  const { t } = useTranslation();

  // password overall validation check
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

  // confirm-password validation
  useEffect(() => {
    confirmPassword === password
      ? setConfirmPasswordValid(true)
      : setConfirmPasswordValid(false);
  }, [password, confirmPassword]);

  // on submit props.onSubmit is called with email and password
  // should be then handled in the upper component
  const onSubmitHandler = () => {
    onSubmit({ email: email, password: password });
  };

  // email input handler with validation
  const onChangeEmailHandler = (string: string) => {
    if (string.match(mailformat)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
    setEmail(string);
  };

  // password input handler with validation
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

  // confirm-password input handler
  const onChangeConfirmPasswordHandler = (string: string) => {
    setConfirmPassword(string);
  };

  return (
    <Grid className={classes.Container} container>
      <Grid item xs={12} md={12} className={classes.Center}>
        <Card className={classes.Card}>
          {!passwordValid && password.length > 0 && (
            <div className={classes.ValidationCard}>
              <Typography variant="caption">
                {t("PASSWORD_MUST_HAVE")}
              </Typography>
              <ul className={classes.ValidationList}>
                {passwordHasLength ? null : (
                  <li>
                    <Typography variant="caption">{t("PASS_CHARS")}</Typography>
                  </li>
                )}
                {passwordHasLowerCase ? null : (
                  <li>
                    <Typography variant="caption">{t("LOWER_CASE")}</Typography>
                  </li>
                )}
                {passwordHasUpperCase ? null : (
                  <li>
                    <Typography variant="caption">{t("UPPER_CASE")}</Typography>
                  </li>
                )}
                {passwordHasDigit ? null : (
                  <li>
                    <Typography variant="caption">{t("DIGIT")}</Typography>
                  </li>
                )}
                {passwordHasSpecial ? null : (
                  <li>
                    <Typography variant="caption">
                      {t("SPECIAL_CHAR")}
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
                label={t("EMAIL")}
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
                label={t("PASSWORD")}
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
                label={t("CONFIRM_PASSWORD")}
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
            {termsLink !== "" && (
              <Typography variant="caption">
                {t("VIEW_OUR")}
                <a href={termsLink}>{t("TERMS_OF_SERVICE")}</a>
              </Typography>
            )}
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
              {t("SUBMIT")}
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
