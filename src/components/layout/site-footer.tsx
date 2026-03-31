import Link from "next/link";

import { siteConfig } from "@/data/site";
import { Logo } from "@/components/shared/logo";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-muted/25">
      <div className="container space-y-8 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              Retail-focused product storytelling, structured sales enablement, and source-document access in a single client-shareable site.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {siteConfig.footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Built with Next.js App Router, shadcn/ui patterns, Motion, and next-themes.</p>
          <p>POS SaaS content architecture preserved from the source markdown files.</p>
        </div>
      </div>
    </footer>
  );
}
