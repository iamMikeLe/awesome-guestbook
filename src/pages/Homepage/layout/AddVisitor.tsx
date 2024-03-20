import PersonIcon from "@mui/icons-material/Person";
import RestoreIcon from "@mui/icons-material/Restore";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import * as React from "react";

export default function AddNewVisitor() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Add new visitor
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Fill name, email address and the department.
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              fullWidth
              required
              id="outlined-required"
              label="Full name"
              margin="normal"
            />
            <TextField
              fullWidth
              required
              id="outlined-required-email"
              label="Email"
              type="email"
              margin="normal"
            />

            <FormControl
              fullWidth
              sx={{
                marginTop: "16px",
                marginBottom: "8px",
              }}
            >
              <InputLabel id="department-select-label">Department</InputLabel>
              <Select
                labelId="department-select-label"
                id="department-select"
                value={age}
                label="department"
                required
                onChange={handleChange}
              >
                <MenuItem value="marketing">marketing</MenuItem>
                <MenuItem value="IT">IT</MenuItem>
                <MenuItem value="sales">sales</MenuItem>
                <MenuItem value="management">management</MenuItem>
              </Select>
            </FormControl>

            <FormControlLabel
              control={<Checkbox />}
              label="I agree to be added to the table"
            />
          </Box>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            size="medium"
            variant="outlined"
            color="primary"
            startIcon={<RestoreIcon />}
          >
            Reset form
          </Button>
          <Button
            size="medium"
            color="primary"
            variant="contained"
            startIcon={<PersonIcon />}
          >
            Add New Visitor
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
