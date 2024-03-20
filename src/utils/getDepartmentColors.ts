export function getDepartmentColor(
  department: string
):
  | "primary"
  | "warning"
  | "default"
  | "secondary"
  | "success"
  | "error"
  | "info" {
  switch (department) {
    case "marketing":
      return "primary";
    case "IT":
      return "secondary";
    case "sales":
      return "info";
    case "management":
      return "warning";
    case "accounting":
      return "success";
    default:
      return "default";
  }
}
