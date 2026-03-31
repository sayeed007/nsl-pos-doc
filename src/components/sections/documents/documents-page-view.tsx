import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";

import { documentsPageData } from "@/data/documents";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function DocumentsPageView() {
  return (
    <>
      <PageHero
        eyebrow="Documents"
        title={documentsPageData.hero.title}
        description={documentsPageData.hero.description}
        actions={[
          { href: "/sales", label: "Open Sales Hub" },
          { href: "/product", label: "Review Product" },
        ]}
      />

      <SectionShell>
        <SectionHeading
          eyebrow="Source documents"
          title="Original markdown files"
          description="These are the raw planning and source-of-truth files that feed the website structure and messaging."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {documentsPageData.documents.map((document, index) => (
            <Reveal key={document.title} delay={index * 0.04}>
              <Card className={cn("flex h-full flex-col p-6 shadow-sm", document.styles?.card)}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className={cn("border-border/50", document.styles?.badge)}>
                      {document.lineCount} lines
                    </Badge>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/70">
                      Markdown
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                      {document.title}
                    </h2>
                    <p className="text-sm leading-7 text-muted-foreground">{document.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {document.highlights.map((item) => (
                      <Badge key={item} variant="secondary" className="bg-background/50 backdrop-blur-sm">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mt-auto pt-8 flex flex-wrap gap-3">
                  <Button asChild variant="outline" className="flex-1 bg-background/50 hover:bg-background">
                    <Link href={document.viewHref} target="_blank">
                      View
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild className={cn("flex-1 text-white shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]", document.styles?.button)}>
                    <a href={document.downloadHref} download>
                      Download
                      <Download className="size-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell tone="accent">
        <SectionHeading
          eyebrow="Validation notes"
          title="Guardrails carried forward from the source material"
          description="These notes remain visible so unsupported claims do not accidentally get promoted through the website."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {documentsPageData.validationNotes.map((item, index) => (
            <Reveal key={item.text} delay={index * 0.03}>
              <Card className={cn("h-full p-5 shadow-sm", item.styles?.card)}>
                <div className="flex gap-4">
                  <span className={cn("mt-2.5 size-1.5 shrink-0 rounded-full", item.styles?.dot)} />
                  <p className="text-sm leading-7 text-foreground/90">{item.text}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <CtaBand
          title="Move from source documents back into the polished site experience."
          description="Use the sales hub for objection handling and demo structure, or the product page for the full capability map."
          primary={{ href: "/sales", label: "Open Sales Hub" }}
          secondary={{ href: "/product", label: "Review Product" }}
        />
      </SectionShell>
    </>
  );
}
