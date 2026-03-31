import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { solutionsPageData } from "@/data/solutions";
import { CtaBand } from "@/components/shared/cta-band";
import { IconChip } from "@/components/shared/icon-chip";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function SolutionsPageView() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={solutionsPageData.hero.title}
        description={solutionsPageData.hero.description}
        chips={solutionsPageData.hero.audienceSignals}
        actions={[
          { href: "/product", label: "View Product" },
          { href: "/sales", label: "Talk to Sales" },
        ]}
      />

      <SectionShell>
        <SectionHeading
          eyebrow="Personas"
          title="Target customer personas"
          description="These persona blocks follow the original sales pack framing: current problem first, then why the product is a fit."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {solutionsPageData.personas.map((persona, index) => (
            <Reveal key={persona.title} delay={index * 0.03}>
              <Card className={cn("h-full p-6", persona.styles?.card)}>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <IconChip icon={persona.icon} className={persona.styles?.icon} />
                    <div className="space-y-2">
                      <h3 className="font-display text-xl font-semibold text-foreground">{persona.title}</h3>
                      <Badge variant="outline">Persona fit</Badge>
                    </div>
                  </div>
                  <div className="rounded-[12px] border border-border/70 bg-muted/35 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Current problem
                    </p>
                    <p className="mt-2 text-sm leading-7 text-foreground">{persona.problem}</p>
                  </div>
                  <div className="rounded-[12px] border border-brand/15 bg-brand/10 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                      Why they need this
                    </p>
                    <p className="mt-2 text-sm leading-7 text-foreground">{persona.need}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell tone="muted">
        <SectionHeading
          eyebrow="Problems solved"
          title="Operational issues the product is meant to resolve"
          description="The product is positioned as a practical answer to stock confusion, manual work, checkout friction, and limited business visibility."
        />
        <div className="mt-10 space-y-4">
          {solutionsPageData.problemsSolved.map((item, index) => (
            <Reveal key={item.problem} delay={index * 0.03}>
              <Card className="px-6 py-3">
                <div className="grid gap-6 lg:grid-cols-[auto_1fr_1fr] lg:items-center">
                  <IconChip icon={item.icon} className={index % 2 === 0 ? "" : "bg-highlight/10 text-highlight border-highlight/20"} />
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Problem
                    </p>
                    <h3 className="font-display text-xl font-semibold text-foreground">{item.problem}</h3>
                  </div>
                  <div className="rounded-[12px] border border-brand/15 bg-brand/10 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                      How this product solves it
                    </p>
                    <p className="mt-2 text-sm leading-7 text-foreground">{item.solution}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell tone="accent">
        <SectionHeading
          eyebrow="Ideal customer fit"
          title="Business types and retail categories that align best"
          description="The business overview is explicit about fit: product-based retail, especially where multi-location stock control and promotions matter."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Business types — Blue */}
          <Card className="p-6 bg-blue-500/5 border-blue-500/15 hover:bg-blue-500/10">
            <h3 className="font-display text-xl font-semibold text-foreground">Business types</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              {solutionsPageData.idealCustomerTypes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Retail categories — Emerald */}
          <Card className="p-6 bg-emerald-500/5 border-emerald-500/15 hover:bg-emerald-500/10">
            <h3 className="font-display text-xl font-semibold text-foreground">Retail categories</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {solutionsPageData.retailCategories.map((category) => (
                <Badge 
                  key={category} 
                  variant="outline" 
                  className="rounded-full px-4 py-2 text-sm border-emerald-500/20 bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500/15"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeading
          eyebrow="Real business use cases"
          title="Where the product fits in practice"
          description="These use cases stay close to the pitch deck examples so the story remains specific without adding unsupported claims."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {solutionsPageData.useCases.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
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
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/product">
              See the matching capability detail
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </SectionShell>

      <SectionShell>
        <CtaBand
          title="Move from persona fit into the full capability and sales narrative."
          description="Use the product page for operational depth or the sales hub for conversation hooks, demo flow, and objection handling."
          primary={{ href: "/product", label: "View Product" }}
          secondary={{ href: "/sales", label: "Talk to Sales" }}
        />
      </SectionShell>
    </>
  );
}
