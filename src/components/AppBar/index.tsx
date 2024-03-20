import FavoriteIcon from "@mui/icons-material/Favorite";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function StaticAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <FavoriteIcon sx={{ marginRight: "0.3rem" }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Application
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
