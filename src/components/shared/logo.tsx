import Link from "next/link";
import { ScanBarcode } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <span className="flex size-10 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10 text-brand shadow-soft">
        <ScanBarcode className="size-5" strokeWidth={1.9} />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-display text-base font-semibold tracking-tight text-foreground">NSL POS</span>
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Retail Control</span>
      </span>
    </Link>
  );
}
