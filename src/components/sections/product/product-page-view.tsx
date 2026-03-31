import { CheckCircle2 } from "lucide-react";

import { productPageData } from "@/data/product";
import { CtaBand } from "@/components/shared/cta-band";
import { ComparisonTable } from "@/components/shared/comparison-table";
import { IconChip } from "@/components/shared/icon-chip";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { StickySidebarNav } from "@/components/shared/sticky-sidebar-nav";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function ProductPageView() {
  const sidebarItems = productPageData.capabilities.map((capability) => ({
    id: capability.id,
    label: capability.title,
  }));

  return (
    <>
      <PageHero
        eyebrow="Product"
        title={productPageData.hero.title}
        description={productPageData.hero.description}
        chips={productPageData.hero.capabilitySnapshot}
        actions={[
          { href: "/pricing", label: "See Pricing" },
          { href: "/solutions", label: "Explore Solutions" },
        ]}
      />

      <SectionShell tone="accent">
        <SectionHeading
          eyebrow="Positioning snapshot"
          title="Key selling points from the business overview"
          description="This keeps the product narrative grounded in the original business overview without compressing it into a generic SaaS feature grid."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {productPageData.sellingPoints.map((point, index) => (
            <Reveal key={point} delay={index * 0.03}>
              <Card className="h-full p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 text-brand" />
                  <p className="text-sm leading-6 text-foreground">{point}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="capabilities">
        <div className="grid gap-10 xl:grid-cols-[280px_minmax(0,1fr)]">
          <StickySidebarNav items={sidebarItems} />
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Capabilities"
              title="Detailed operational capabilities"
              description="Each capability block below preserves the business meaning from the overview, including the original why-it-matters framing."
            />
            {productPageData.capabilities.map((capability, index) => (
              <Reveal key={capability.id} delay={index * 0.03}>
                <article id={capability.id} className="scroll-mt-28">
                  <Card className="overflow-hidden p-6 sm:p-8">
                    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                      <div className="space-y-5">
                        <div className="flex items-start gap-4">
                          <IconChip icon={capability.icon} className="size-14 rounded-[20px]" />
                          <div className="space-y-2">
                            <h2 className="font-display text-2xl font-semibold text-foreground">
                              {capability.title}
                            </h2>
                            <Badge variant="outline">Structured from source documentation</Badge>
                          </div>
                        </div>
                        <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                          {capability.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3">
                              <span className="mt-2 size-1.5 rounded-full bg-brand" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-[12px] border border-brand/15 bg-brand/10 p-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                          Why it matters
                        </p>
                        <div className="mt-4 space-y-3">
                          {capability.whyItMatters.map((item) => (
                            <p key={item} className="text-sm leading-7 text-foreground">
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell tone="muted">
        <SectionHeading
          eyebrow="Feature to benefit mapping"
          title="What customers can do and why it matters"
          description="Rendered as a responsive comparison surface so the exact feature-benefit logic remains readable on both desktop and mobile."
        />
        <div className="mt-10">
          <ComparisonTable
            headers={["Feature", "What the customer can do", "Business benefit", "Who cares most"]}
            rows={productPageData.featureBenefitRows.map((row) => [...row])}
          />
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeading
          eyebrow="Real workflows"
          title="How the product fits daily retail operations"
          description="The workflow structure below follows the original seven use flows from the business overview."
        />
        <div className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {productPageData.workflows.map((workflow) => (
              <AccordionItem key={workflow.title} value={workflow.title}>
                <AccordionTrigger>{workflow.title}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-5">
                    <div className="space-y-3">
                      {workflow.steps.map((step, stepIndex) => (
                        <div key={step} className="flex gap-4 rounded-2xl border border-border/70 bg-muted/35 p-4">
                          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
                            {stepIndex + 1}
                          </div>
                          <p className="text-sm leading-7 text-foreground">{step}</p>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-2xl border border-highlight/20 bg-highlight/10 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">
                        Business outcome
                      </p>
                      <p className="mt-2 text-sm leading-7 text-foreground">{workflow.outcome}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionShell>

      <SectionShell tone="accent">
        <SectionHeading
          eyebrow="Positioning and validation"
          title="Best-fit sales angle, talking points, and validation notes"
          description="The website keeps the original guardrails so future messaging stays aligned with the source material."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <Card className="p-6">
            <h3 className="font-display text-xl font-semibold text-foreground">Strongest positioning</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              {productPageData.positioning.strongest.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="font-display text-xl font-semibold text-foreground">Sales conversations</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              {productPageData.positioning.strongestSalesConversations.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-highlight" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="font-display text-xl font-semibold text-foreground">Less supported angles</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              {productPageData.positioning.lessSupported.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-muted-foreground" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <Card className="p-6">
            <h3 className="font-display text-xl font-semibold text-foreground">Sales talking points</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              {productPageData.talkingPoints.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="font-display text-xl font-semibold text-foreground">Validation notes</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
              {productPageData.validationNotes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1.5 rounded-full bg-highlight" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </SectionShell>

      <SectionShell>
        <CtaBand
          title="See how the packaging strategy and solutions story line up with the product depth."
          description="Move from capability detail into plan positioning or persona fit without losing the core retail-control narrative."
          primary={{ href: "/pricing", label: "See Pricing" }}
          secondary={{ href: "/solutions", label: "Explore Solutions" }}
        />
      </SectionShell>
    </>
  );
}
