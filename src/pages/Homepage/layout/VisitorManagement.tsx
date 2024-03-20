import VisitorTable from "@/pages/Homepage/layout/VisitorTable";
import {
  Box,
  Breadcrumbs,
  Grid,
  Paper,
  TableContainer,
  Typography,
} from "@mui/material";

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
        <VisitorTable />
      </TableContainer>
    </Grid>
  );
}
