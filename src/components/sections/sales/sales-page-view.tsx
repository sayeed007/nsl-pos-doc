import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { salesPageData } from "@/data/sales";
import { CtaBand } from "@/components/shared/cta-band";
import { ComparisonTable } from "@/components/shared/comparison-table";
import { PageHero } from "@/components/shared/page-hero";
import { QuoteRotator } from "@/components/shared/quote-rotator";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SalesTabs } from "@/components/sections/sales/sales-tabs";
import { cn } from "@/lib/utils";

export function SalesPageView() {
  return (
    <>
      <PageHero
        eyebrow={salesPageData.hero.eyebrow}
        title={salesPageData.hero.title}
        description={salesPageData.hero.summary}
        chips={salesPageData.hero.bullets}
        actions={[
          { href: "/pricing", label: "View Packaging" },
          { href: "/documents", label: "Source Documents" },
        ]}
      />

      <SectionShell tone="accent">
        <SectionHeading
          eyebrow="Why it sells"
          title="High-level sales messages"
          description="These lines preserve the concise pitch-deck messaging and sit above the deeper tabbed sales toolkit."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {salesPageData.whyItSells.map((item, index) => (
            <Reveal key={item.text} delay={index * 0.03}>
              <Card className={cn("h-full p-5 flex items-center", item.styles?.card)}>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className={cn("mt-0.5 size-5 shrink-0 text-brand", item.styles?.icon)} />
                  <p className="text-sm leading-6 text-foreground">{item.text}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeading
          eyebrow="Sales toolkit"
          title="Selling points, conversations, demo flow, and objections"
          description="The tabbed module below is implemented with shadcn Tabs and motion transitions while keeping the original sales-pack meaning intact."
        />
        <div className="mt-10">
          <SalesTabs
            sellingPoints={salesPageData.tabs.sellingPoints}
            conversations={salesPageData.tabs.conversations}
            demo={salesPageData.tabs.demo}
            objections={salesPageData.tabs.objections}
          />
        </div>
      </SectionShell>

      <SectionShell tone="muted">
        <SectionHeading
          eyebrow="Feature to benefit to sales angle"
          title="Talk-track table"
          description="This table keeps the feature-benefit-sales-angle structure from the sales ready pack and adapts it to a responsive layout."
        />
        <div className="mt-10">
          <ComparisonTable
            headers={["Feature", "Business benefit", "How to sell it"]}
            rows={salesPageData.featureBenefitAngleRows.map((row) => [...row])}
          />
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Marketing talking points"
              title="Reusable product sales lines"
              description="These are the short-form talking points carried over from the business overview."
            />
            <div className="mt-8 grid gap-4">
              {salesPageData.marketingTalkingPoints.map((item, index) => (
                <Reveal key={item} delay={index * 0.03}>
                  <Card className="p-5 flex items-center">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />
                      <p className="text-sm leading-6 text-foreground">{item}</p>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Packaging preview"
              title="Commercial structure at a glance"
              description="A quick tier preview stays on the sales hub so conversations can bridge directly into the pricing page."
            />
            <div className="mt-8 grid gap-4">
              {salesPageData.packagingPreview.map((item, index) => (
                <Reveal key={item.name} delay={index * 0.03}>
                  <Card className={cn("p-6", item.styles?.card)}>
                    <p className={cn("text-sm font-semibold", item.styles?.bullet?.replace('bg-', 'text-'))}>{item.name}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                      {item.audience}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.summary}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
            <div className="mt-6">
              <Button asChild variant="outline">
                <Link href="/pricing">
                  Open pricing page
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="accent">
        <SectionHeading
          eyebrow="Competitive positioning"
          title="Who this is best for, what it replaces, and what not to target"
          description="The positioning grid mirrors the original sales-ready guardrails so the site stays commercially useful without over-claiming."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Card className="p-6 bg-emerald-500/5 border-emerald-500/15 hover:bg-emerald-500/10">
            <h3 className="font-display text-xl font-semibold text-foreground">Best for</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              {salesPageData.positioning.bestFor.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-6 bg-blue-500/5 border-blue-500/15 hover:bg-blue-500/10">
            <h3 className="font-display text-xl font-semibold text-foreground">Best stage</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              {salesPageData.positioning.bestStage.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-6 bg-amber-500/5 border-amber-500/15 hover:bg-amber-500/10">
            <h3 className="font-display text-xl font-semibold text-foreground">Replaces</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              {salesPageData.positioning.replaces.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-6 bg-slate-500/5 border-slate-500/15 hover:bg-slate-500/10">
            <h3 className="font-display text-xl font-semibold text-foreground">Do not target</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              {salesPageData.positioning.doNotTarget.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-slate-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </SectionShell>

      <SectionShell>
        <QuoteRotator quotes={[...salesPageData.closingLines]} />
      </SectionShell>

      <SectionShell>
        <CtaBand
          title="Take the conversation from sales positioning into plan structure or source evidence."
          description="Use pricing when the discussion turns to tier fit, or open the source documents to show the original planning materials behind the site."
          primary={{ href: "/pricing", label: "View Pricing" }}
          secondary={{ href: "/documents", label: "Open Documents" }}
        />
      </SectionShell>
    </>
  );
}
