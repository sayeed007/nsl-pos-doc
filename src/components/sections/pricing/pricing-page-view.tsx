import { CheckCircle2 } from "lucide-react";

import { pricingPageData } from "@/data/pricing";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function PricingPageView() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={pricingPageData.hero.title}
        description={pricingPageData.hero.description}
        actions={[
          { href: "/sales", label: "Open Sales Hub" },
          { href: "/product", label: "Review Product" },
        ]}
      />

      <SectionShell>
        <SectionHeading
          eyebrow="Packaging strategy"
          title="Three plan structures without invented price points"
          description="Each tier reflects the original packaging logic from the sales-ready content and pitch deck."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricingPageData.tiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 0.04}>
              <Card
                className={`relative h-full p-6 ${tier.featured ? "border-brand/30 bg-hero-aurora shadow-panel" : ""}`}
              >
                <div className="space-y-5">
                  <div className="space-y-3">
                    <Badge variant={tier.featured ? "default" : "outline"}>{tier.badge}</Badge>
                    <div>
                      <h2 className="font-display text-3xl font-semibold text-foreground">{tier.name}</h2>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{tier.bestFor}</p>
                    </div>
                  </div>
                  <div className="rounded-[22px] border border-border/70 bg-background/70 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Include conceptually
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground">
                      {tier.includes.map((item) => (
                        <li key={item} className="flex gap-3">
                          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-[22px] border border-highlight/20 bg-highlight/10 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">
                      Sales angle
                    </p>
                    <p className="mt-2 text-sm leading-7 text-foreground">{tier.salesAngle}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell tone="accent">
        <SectionHeading
          eyebrow="Why customers buy"
          title="Closing reasons carried from the pitch deck"
          description="This section stays benefit-focused and avoids translating the tiering into unsupported feature promises."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {pricingPageData.whyCustomersBuy.map((item, index) => (
            <Reveal key={item} delay={index * 0.03}>
              <Card className="h-full p-5 flex items-center">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />
                  <p className="text-sm leading-6 text-foreground">{item}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
        <Card className="mt-8 border-brand/15 bg-hero-aurora p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Closing line</p>
          <p className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground">
            {pricingPageData.closingLine}
          </p>
        </Card>
      </SectionShell>

      <SectionShell>
        <CtaBand
          title="Use pricing as a positioning tool, then drop into the sales hub or product detail as needed."
          description="The tiers are structured to support qualification and narrative fit, not to overstate implementation details."
          primary={{ href: "/sales", label: "Open Sales Hub" }}
          secondary={{ href: "/product", label: "Review Product" }}
        />
      </SectionShell>
    </>
  );
}
