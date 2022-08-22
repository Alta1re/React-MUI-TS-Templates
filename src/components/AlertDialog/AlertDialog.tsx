import * as React from "react";

// redux
import { useDispatch } from "react-redux";
import { clearAlert } from "store/alertReducer";

// material-ui components
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// i18n
import { useTranslation } from "utils/i18n";

export interface AlertProps {
  submit?: () => void;
  deny?: () => void;
  title: null | string;
  content: null | string;
  submitButtonText?: string;
  denyButtonText?: string;
}

export default function AlertDialog(props: AlertProps) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const closeDialogHandler = () => {
    dispatch(clearAlert());
  };
  return (
    <Dialog
      open={true}
      onClose={closeDialogHandler}
      onBackdropClick={closeDialogHandler}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {props.deny && (
          <Button onClick={props.deny}>
            {props.denyButtonText ? props.denyButtonText : t("CANCEL")}
          </Button>
        )}
        <Button
          onClick={props.submit ? props.submit : closeDialogHandler}
          autoFocus
        >
          {props.submitButtonText ? props.submitButtonText : t("OK")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
