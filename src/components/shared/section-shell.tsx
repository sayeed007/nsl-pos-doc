import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

export function SectionShell({
  children,
  id,
  className,
  containerClassName,
  tone = "default",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  tone?: "default" | "muted" | "accent";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-28 py-8 sm:py-10 lg:py-12",
        tone === "muted" && "bg-muted/35",
        tone === "accent" &&
        "bg-section-wash [background-size:auto] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-border/70 before:content-['']",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
