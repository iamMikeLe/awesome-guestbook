import { Visitor } from "@/pages/Homepage/store";
import { getDepartmentColor } from "@/utils/getDepartmentColors";
import { Checkbox, Chip, TableCell, TableRow } from "@mui/material";
import { OnCheckboxChangeType } from "./VisitorTable";

type TableRowComponentProps = {
  visitorData: Visitor;
  onCheckboxChange: OnCheckboxChangeType;
};

export default function TableRowComponent({
  visitorData,
  onCheckboxChange,
}: TableRowComponentProps) {
  const { selected, visitor, email, department } = visitorData;
  return (
    <TableRow>
      <TableCell sx={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          data-testid={`visitor-row-${email}]`}
          inputProps={
            {
              "aria-label": "checkbox",
              "data-testid": `visitor-checkbox-${email}`,
            } as React.InputHTMLAttributes<HTMLInputElement>
          }
          checked={selected}
          onChange={(e) => onCheckboxChange(e, email)}
        />
        {visitor}
      </TableCell>
      <TableCell align="left">{email}</TableCell>
      <TableCell align="right">
        <Chip
          label={department}
          size="medium"
          variant="filled"
          color={getDepartmentColor(department)}
        />
      </TableCell>
    </TableRow>
  );
}
