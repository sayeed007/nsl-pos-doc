import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  chips,
  actions,
  className,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  chips?: readonly string[];
  actions?: readonly { href: string; label: string }[];
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden border-b border-border/60", className)}>
      <div className="absolute inset-0 bg-hero-aurora" />
      <div className="absolute inset-0 bg-grid opacity-[0.06]" />
      <div className="relative">
        <div className="container py-8 sm:py-10 lg:py-12">
          <div className="max-w-4xl space-y-8">
            {eyebrow ? (
              <Reveal>
                <div className="inline-flex rounded-full border border-brand/20 bg-background/80 px-4 py-1.5 text-sm font-medium text-brand backdrop-blur">
                  {eyebrow}
                </div>
              </Reveal>
            ) : null}
            <Reveal delay={0.05}>
              <div className="space-y-5">
                <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {title}
                </h1>
                <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                  {description}
                </p>
              </div>
            </Reveal>
            {chips?.length ? (
              <Reveal delay={0.1}>
                <div className="flex flex-wrap gap-3">
                  {chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-md border border-border/70 bg-card/80 px-4 py-2 text-sm text-muted-foreground shadow-soft"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </Reveal>
            ) : null}
            {actions?.length ? (
              <Reveal delay={0.15}>
                <div className="flex flex-wrap gap-3">
                  {actions.map((action, index) => (
                    <Button
                      key={action.href}
                      asChild
                      variant={index === 0 ? "hero" : "outline"}
                      size="lg"
                    >
                      <Link href={action.href}>
                        {action.label}
                        {index === 0 ? <ArrowRight className="size-4" /> : null}
                      </Link>
                    </Button>
                  ))}
                </div>
              </Reveal>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
