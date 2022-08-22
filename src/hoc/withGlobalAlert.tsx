import React, { useEffect, useState } from "react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "store/store";

import AlertDialog from "components/AlertDialog/AlertDialog";

const withGlobalAlert = (WrappedComponent: () => JSX.Element) => {
  const WithGlobalAlert = (props: any) => {
    const [alertDialog, setAlertDialog] = useState<JSX.Element | null>(null);
    const alert = useSelector((state: RootState) => state.alert);

    useEffect(() => {
      let newAlert;
      if (alert.title) {
        newAlert = (
          <AlertDialog
            title={alert.title}
            content={alert.content}
            submit={alert.submit}
            deny={alert.deny}
            submitButtonText={alert.submitButtonText}
            denyButtonText={alert.denyButtonText}
          />
        );
      } else {
        newAlert = null;
      }
      setAlertDialog(newAlert);
    }, [alert]);

    return (
      <>
        {alertDialog}
        <WrappedComponent {...props} />
      </>
    );
  };
  return WithGlobalAlert;
};

export default withGlobalAlert;
