import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function CtaBand({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <Reveal>
      <Card className="overflow-hidden border-brand/15 bg-hero-aurora">
        <div className="grid gap-8 p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
          <div className="space-y-3">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {title}
            </h3>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <Link href={primary.href}>
                {primary.label}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            {secondary ? (
              <Button asChild variant="outline" size="lg">
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </Card>
    </Reveal>
  );
}
