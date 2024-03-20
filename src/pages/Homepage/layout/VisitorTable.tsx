import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

type VisitorRow = {
  selected: boolean;
  visitor: string;
  email: string;
  department: string;
};

type VisitorManagementProps = {
  rows: VisitorRow[];
};

const flexCenter = { display: "flex", alignItems: "center" };
export default function VisitorTable({ rows }: VisitorManagementProps) {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="Visitor management">
      <TableHead>
        <TableRow>
          <TableCell>
            <Checkbox inputProps={{ "aria-label": "checkbox" }} />
            Visitor
          </TableCell>
          <TableCell align="left">Email</TableCell>
          <TableCell align="right">Department</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.email}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell sx={flexCenter}>
              <Checkbox inputProps={{ "aria-label": "checkbox" }} />
              {row.visitor}
            </TableCell>
            <TableCell align="left">{row.email}</TableCell>
            <TableCell align="right">{row.department}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <Box component="section" sx={{ padding: "0 1rem 1rem 1.6rem" }}>
        <Button color="primary" variant="contained">
          Remove selected
        </Button>
      </Box>
    </Table>
  );
}
