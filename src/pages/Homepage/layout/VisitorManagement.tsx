import VisitorTable from "@/pages/Homepage/layout/VisitorTable";
import { rows } from "@/pages/Homepage/layout/dummyData";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Typography from "@mui/material/Typography";

export default function VisitorManagement() {
  return (
    <Grid item xs={12} md={8}>
      <TableContainer component={Paper} sx={{ minWidth: 275 }}>
        <Box component="section" sx={{ padding: "1rem 0 0 1.6rem" }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography variant="h4" color="text.primary">
              Visitor management
            </Typography>
          </Breadcrumbs>
        </Box>
        <VisitorTable rows={rows} />
      </TableContainer>
    </Grid>
  );
}
