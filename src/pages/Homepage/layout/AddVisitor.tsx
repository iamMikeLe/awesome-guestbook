import AddVisitorForm from "@/pages/Homepage/layout/AddVisitorForm";
import { Card, CardContent, Grid, Typography } from "@mui/material";

export default function AddNewVisitor() {
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ minWidth: 275, padding: "16px" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Add new visitor
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Fill name, email address and the department.
          </Typography>
          <AddVisitorForm />
        </CardContent>
      </Card>
    </Grid>
  );
}
