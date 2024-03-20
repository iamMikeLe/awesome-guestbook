import { Box, Container, Grid } from "@mui/material";
import AddNewVisitor from "./layout/AddVisitor";

export default function Homepage() {
  return (
    <Container maxWidth={false}>
      <Box sx={{ my: 4 }}>
        <Grid container spacing={2}>
          <AddNewVisitor />
        </Grid>
      </Box>
    </Container>
  );
}
