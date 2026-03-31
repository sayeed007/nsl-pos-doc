"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

import { homePageData } from "@/data/home";
import { CtaBand } from "@/components/shared/cta-band";
import { IconChip } from "@/components/shared/icon-chip";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function HeroVisual() {
  return (
    <motion.div
      className="relative mx-auto max-w-xl"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
    >
      {/* Daily retail control */}
      <Reveal className="relative">
        <Card className="overflow-hidden border-brand/20 bg-card/90 p-6 shadow-panel">
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  Daily retail control
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
                  Stock, checkout, promotions, reporting
                </h3>
              </div>
              <div className="rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-sm font-medium text-brand">
                Live
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[22px] border border-border/70 bg-muted/35 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  POS sale flow
                </p>
                <ul className="mt-4 space-y-3 text-sm text-foreground">
                  <li className="flex items-center justify-between">
                    <span>Barcode lookup</span>
                    <span className="rounded-full bg-brand/10 px-2 py-1 text-xs text-brand">
                      Ready
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Split payments</span>
                    <span className="rounded-full bg-brand/10 px-2 py-1 text-xs text-brand">
                      Flexible
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Returns</span>
                    <span className="rounded-full bg-highlight/10 px-2 py-1 text-xs text-highlight">
                      Traceable
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-[22px] border border-border/70 bg-muted/35 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Owner view
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-border/70 bg-background/70 p-3">
                    <p className="text-xs text-muted-foreground">Revenue</p>
                    <p className="mt-1 font-display text-xl text-foreground">Live</p>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-background/70 p-3">
                    <p className="text-xs text-muted-foreground">Low stock</p>
                    <p className="mt-1 font-display text-xl text-foreground">Visible</p>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-background/70 p-3">
                    <p className="text-xs text-muted-foreground">Payments</p>
                    <p className="mt-1 font-display text-xl text-foreground">Tracked</p>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-background/70 p-3">
                    <p className="text-xs text-muted-foreground">Offers</p>
                    <p className="mt-1 font-display text-xl text-foreground">Planned</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Reveal>

      {/* Why it matters */}
      <Reveal delay={0.15} className="absolute -bottom-0 -left-6 hidden min-w-xs lg:block">
        <Card className="border-highlight/20 bg-highlight/10 p-4 shadow-soft rounded-[12px]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">
            Why it matters
          </p>
          <p className="mt-2 text-sm leading-6 text-foreground">
            One system gives frontline staff a faster flow while owners keep location-level stock and performance visibility.
          </p>
        </Card>
      </Reveal>
    </motion.div>
  );
}

export function HomePageView() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-hero-aurora" />
        <div className="absolute inset-0 bg-grid opacity-[0.05]" />
        <div className="container relative grid gap-12 py-8 sm:py-10 lg:py-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <Reveal>
              <Badge variant="outline" className="border-brand/20 bg-background/80 text-brand backdrop-blur">
                {homePageData.hero.eyebrow}
              </Badge>
            </Reveal>
            <Reveal delay={0.04}>
              <div className="space-y-5">
                <h1 className="font-display text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
                  {homePageData.hero.title.split("Control Stock")[0]}
                  <span className="bg-gradient-to-r from-brand via-brand to-highlight bg-clip-text text-transparent">
                    Control Stock
                  </span>
                  {homePageData.hero.title.split("Control Stock")[1]}
                </h1>
                <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  {homePageData.hero.description}
                </p>
                <p className="max-w-2xl text-sm leading-7 text-foreground/80">
                  {homePageData.hero.executiveSummary}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="flex flex-wrap gap-3">
                {homePageData.hero.ctas.map((action, index) => (
                  <Button key={action.href} asChild variant={index === 0 ? "hero" : "outline"} size="lg">
                    <Link href={action.href}>
                      {action.label}
                      {index === 0 ? <ArrowRight className="size-4" /> : null}
                    </Link>
                  </Button>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="grid gap-3 sm:grid-cols-3">
                {homePageData.hero.supportingPoints.map((point) => (
                  <Card
                    key={point}
                    className="rounded-[12px] border border-border/70 bg-card/80 px-4 py-3 text-sm leading-6 text-foreground shadow-soft flex items-center"
                  >
                    {point}
                  </Card>
                ))}
              </div>
            </Reveal>
          </div>
          <HeroVisual />
        </div>
      </section>

      <SectionShell tone="accent">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {homePageData.executiveValueStrip.items.map((item, index) => (
            <Reveal key={item} delay={index * 0.03}>
              <Card className="h-full p-5 flex items-center">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 text-brand" />
                  <p className="text-sm leading-6 text-foreground">{item}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="problem">
        <SectionHeading
          eyebrow="Problem"
          title={homePageData.problems.title}
          description="The source pitch deck frames these as the pressure points that appear once retailers move beyond basic billing or disconnected manual tracking."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {homePageData.problems.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <Card className={cn("h-full p-6", item.styles?.card)}>
                <div className="space-y-4 flex flex-col items-center text-center">
                  <IconChip icon={item.icon} className={item.styles?.icon} />
                  <div className="space-y-2">
                    <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="solution" tone="muted">
        <SectionHeading
          eyebrow="Solution"
          title={homePageData.solution.title}
          description="The product story remains centered on one operational system, not a set of disconnected modules."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {homePageData.solution.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <Card className={cn("h-full p-6", item.styles?.card)}>
                <div className="space-y-4 flex flex-col items-center text-center">
                  <IconChip icon={item.icon} className={item.styles?.icon} />
                  <div className="space-y-2">
                    <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="value">
        <SectionHeading
          eyebrow="Core value"
          title={homePageData.value.title}
          description="These outcome statements come directly from the pitch deck and stay phrased as business gains rather than invented metrics."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {homePageData.value.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <Card className={cn("h-full p-6", item.styles?.card)}>
                <div className="space-y-4 flex flex-col items-start">
                  <IconChip icon={item.icon} className={item.styles?.icon} />
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="audience" tone="accent">
        <SectionHeading
          eyebrow="Who it is for"
          title={homePageData.audience.title}
          description="The site keeps the audience framing from the pitch deck and the business overview intact."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {homePageData.audience.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <Card className={cn("h-full p-6", item.styles?.card)}>
                <div className="space-y-4 flex flex-col items-center text-center">
                  <IconChip icon={item.icon} className={item.styles?.icon} />
                  <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <CtaBand
          title={homePageData.closing.title}
          description={homePageData.closing.description}
          primary={homePageData.closing.ctas[0]}
          secondary={homePageData.closing.ctas[1]}
        />
      </SectionShell>
    </>
  );
}
