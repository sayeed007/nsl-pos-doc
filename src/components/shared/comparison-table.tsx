import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function ComparisonTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <>
      <div className="hidden overflow-hidden rounded-[24px] border border-border/70 bg-card/80 shadow-soft lg:block">
        <Table>
          <TableHeader>
            <TableRow>
              {headers.map((header) => (
                <TableHead key={header}>{header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.join("-")}>
                {row.map((cell) => (
                  <TableCell key={cell}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="grid gap-4 lg:hidden">
        {rows.map((row) => (
          <Card key={row.join("-")} className="p-5">
            <dl className="space-y-4">
              {headers.map((header, index) => (
                <div key={`${header}-${row[index]}`} className="space-y-1">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {header}
                  </dt>
                  <dd className="text-sm leading-6 text-foreground">{row[index]}</dd>
                </div>
              ))}
            </dl>
          </Card>
        ))}
      </div>
    </>
  );
}
