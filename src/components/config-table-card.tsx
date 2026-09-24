import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

export interface ConfigTableCardProps {
  title: string
  rows: { label: string; value: React.ReactNode }[]
}

function ConfigTableCard({ title, rows }: ConfigTableCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.label}>
                <TableCell className="w-1/3 font-medium text-foreground">{row.label}</TableCell>
                <TableCell className="text-muted-foreground">{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export { ConfigTableCard }
