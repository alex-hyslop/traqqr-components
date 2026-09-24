import * as React from "react"
import { TableCell, TableRow } from "@/components/ui/table"

export interface ComparisonTableRowProps {
  label: string
  values: React.ReactNode[]
}

function ComparisonTableRow({ label, values }: ComparisonTableRowProps) {
  return (
    <TableRow>
      <TableCell className="font-medium text-foreground">{label}</TableCell>
      {values.map((value, index) => (
        <TableCell key={index}>{value}</TableCell>
      ))}
    </TableRow>
  )
}

export { ComparisonTableRow }
