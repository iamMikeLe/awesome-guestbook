import TableRowComponent from "@/pages/Homepage/layout/TableRow";
import useVisitorsStore, { Visitor } from "@/pages/Homepage/store";
import {
  Box,
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";

export type OnCheckboxChangeType = (
  event: React.ChangeEvent<HTMLInputElement>,
  email: Visitor["email"]
) => void;

export default function VisitorTable() {
  const visitors: Visitor[] = useVisitorsStore((state) => state.visitors);
  const updateVisitors = useVisitorsStore((state) => state.updateVisitors);
  const [sellectAllData, setSellectAllData] = useState(false);

  // Update visitors when visitor's checkbox is selected
  const onCheckboxChange: OnCheckboxChangeType = (event, email) => {
    if (sellectAllData && !event.target.checked) setSellectAllData(false);

    const visitorsCopy = [...visitors];
    const visitorToUpdate = visitorsCopy.find((row) => row.email === email);
    if (!visitorToUpdate) return;
    visitorToUpdate.selected = event.target.checked;
    updateVisitors(visitorsCopy);
  };

  // Update visitors when select all checkboxes are selected
  const onSelectAllDataChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const visitorsCopy = [...visitors];
    visitorsCopy.forEach(
      (visitor) => (visitor.selected = event.target.checked)
    );
    updateVisitors(visitorsCopy);
    setSellectAllData(event.target.checked);
  };

  // On remove visitors button click
  const onRemove = () => {
    const remainingVisitors = visitors.filter((visitor) => !visitor.selected);
    updateVisitors(remainingVisitors);
    setSellectAllData(false);
  };
  return (
    <>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="Visitor management"
        data-testid="visitors-table"
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox
                inputProps={
                  {
                    "aria-label": "checkbox",
                    "data-testid": "select-all-checkbox",
                  } as React.InputHTMLAttributes<HTMLInputElement>
                }
                checked={sellectAllData}
                onChange={onSelectAllDataChange}
                disabled={visitors.length === 0}
              />
              Visitor
            </TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="right">Department</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visitors.map((visitor) => (
            <TableRowComponent
              key={visitor.email}
              visitorData={visitor}
              onCheckboxChange={onCheckboxChange}
            />
          ))}
        </TableBody>
      </Table>
      <Box component="section" sx={{ p: 3 }} data-testid="table-footer">
        {visitors.length === 0 ? (
          <Typography
            variant="subtitle1"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            No visitor checked in so far
          </Typography>
        ) : (
          <Button
            color="primary"
            variant="contained"
            onClick={onRemove}
            data-testid="remove-selected-button"
          >
            Remove selected
          </Button>
        )}
      </Box>
    </>
  );
}
