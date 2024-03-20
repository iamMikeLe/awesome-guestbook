import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#EF5742",
    },
    secondary: {
      main: "#9C27B0",
    },
    info: {
      main: "#0288D1",
    },
    warning: {
      main: "#EF6C00",
    },
    success: {
      main: "#2E7D32",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "100px",
        },
      },
    },
  },
});

export default theme;
