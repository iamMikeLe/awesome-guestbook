import { Alert, Snackbar } from "@mui/material";

type WarningSnackbarProps = {
  message: string;
  openSameEmailAlert: boolean;
  handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
};

export default function WarningSnackbar({
  message,
  openSameEmailAlert,
  handleClose,
}: WarningSnackbarProps) {
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={openSameEmailAlert}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          data-testid="email-exist-warning"
          onClose={handleClose}
          severity="warning"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
