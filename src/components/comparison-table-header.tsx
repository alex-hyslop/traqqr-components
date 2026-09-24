import { TableHead, TableHeader, TableRow } from "@/components/ui/table"

export interface ComparisonTableHeaderProps {
  columns: string[]
}

function ComparisonTableHeader({ columns }: ComparisonTableHeaderProps) {
  return (
    <TableHeader>
      <TableRow>
        {columns.map((column) => (
          <TableHead key={column}>{column}</TableHead>
        ))}
      </TableRow>
    </TableHeader>
  )
}

export { ComparisonTableHeader }
