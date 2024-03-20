import useVisitorsStore, { Visitor } from "@/pages/Homepage/store";
import PersonIcon from "@mui/icons-material/Person";
import RestoreIcon from "@mui/icons-material/Restore";
import {
  Box,
  Button,
  CardActions,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent, useRef, useState } from "react";

const departments = ["marketing", "IT", "sales", "management", "accounting"];

export default function AddVisitorForm() {
  const addVisitor = useVisitorsStore((state) => state.addVisitor);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [checkboxValue, setCheckboxValue] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<string>(departments[0]);

  function handleFormReset() {
    setSelectValue(departments[0]);
    setCheckboxValue(false);
    formRef.current?.reset();
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data: Visitor = {
      selected: false,
      visitor: formData.get("visitor") as string,
      email: formData.get("email") as string,
      department: formData.get("department") as string,
    };

    addVisitor(data);
    handleFormReset();
  }

  return (
    <>
      <Box
        component="form"
        autoComplete="off"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          id="outlined-required"
          label="Full name"
          name="visitor"
          margin="normal"
        />
        <TextField
          fullWidth
          required
          id="outlined-required-email"
          label="Email"
          name="email"
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
            name="department"
            defaultValue="marketing"
            label="department"
            required
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
          >
            {departments.map((department) => (
              <MenuItem key={department} value={department}>
                {department}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControlLabel
          control={
            <Checkbox
              checked={checkboxValue}
              onChange={(e) => setCheckboxValue(e.target.checked)}
            />
          }
          label="I agree to be added to the table"
          name="isAgreementChecked"
        />
        {!checkboxValue && (
          <Grid item xs={12} md={12}>
            <Typography variant="caption" display="block" color="primary">
              *Agree to add new visitor
            </Typography>
          </Grid>
        )}

        <CardActions>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Button
                size="medium"
                variant="outlined"
                color="primary"
                type="submit"
                onClick={handleFormReset}
                startIcon={<RestoreIcon />}
                fullWidth
              >
                Reset form
              </Button>
            </Grid>
            <Grid item xs={12} md={7}>
              <Button
                size="medium"
                color="primary"
                variant="contained"
                type="submit"
                startIcon={<PersonIcon />}
                disabled={!checkboxValue}
                fullWidth
              >
                Add New Visitor
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Box>
    </>
  );
}
