"use client";

import Link from "next/link";
import { Copy, ExternalLink, ShieldCheck } from "lucide-react";
import { useState } from "react";

import { demoPageData } from "@/data/demo";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionShell } from "@/components/shared/section-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function DemoPageView() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <>
      <PageHero
        eyebrow="Interactive Demo"
        title={demoPageData.hero.title}
        description={demoPageData.hero.description}
        chips={demoPageData.hero.bullets}
      />

      <SectionShell>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <SectionHeading
            eyebrow="Interactive Access"
            title="Embedded Demo Environment"
            description="Use the side-panel credentials to log in. If the live app fails to connect due to your browser's cross-origin restrictions, open it directly."
          />
          <Button asChild variant="hero" className="shrink-0 shadow-md hover:scale-[1.02] transition-transform">
            <Link href={demoPageData.remoteUrl} target="_blank">
              Open in new tab
              <ExternalLink className="size-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[320px_1fr] xl:grid-cols-[360px_1fr] items-start">
          {/* Left Column: Credentials */}
          <div className="flex flex-col gap-4 sticky top-28">
            <h3 className="font-display font-semibold text-lg text-foreground px-1 pb-2 border-b border-border/60">
              Testing Accounts
            </h3>
            <div className="flex flex-col gap-4 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
              {demoPageData.credentials.map((cred, index) => (
                <Reveal key={cred.role} delay={index * 0.05}>
                  <Card className={cn("flex flex-col p-5 shadow-sm", cred.styles.card)}>
                    <div className="flex items-center gap-2 mb-4">
                      <span className={cn("size-2 shrink-0 rounded-full", cred.styles.dot)} />
                      <h4 className="font-display font-bold tracking-tight text-foreground">{cred.role}</h4>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Email</p>
                        <button 
                          onClick={() => copyToClipboard(cred.email)}
                          className="flex items-center justify-between w-full text-left rounded-md bg-background px-3 py-2 text-sm font-medium text-foreground border border-border/50 hover:bg-muted/50 transition-colors"
                        >
                          <span className="truncate">{cred.email}</span>
                          <Copy className={cn("size-3.5 shrink-0 transition-colors", copiedText === cred.email ? "text-emerald-500" : "text-muted-foreground")} />
                        </button>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Password</p>
                        <button 
                          onClick={() => copyToClipboard(cred.password)}
                          className="flex items-center justify-between w-full text-left rounded-md bg-background px-3 py-2 text-sm font-medium text-foreground border border-border/50 hover:bg-muted/50 transition-colors"
                        >
                          <span className="truncate">{cred.password}</span>
                          <Copy className={cn("size-3.5 shrink-0 transition-colors", copiedText === cred.password ? "text-emerald-500" : "text-muted-foreground")} />
                        </button>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column: Embedded Iframe */}
          <Reveal delay={0.2} className="w-full h-full">
            <div className="relative w-full h-full rounded-[16px] overflow-hidden border border-border/70 shadow-xl bg-muted/20 flex flex-col">
              <div className="flex items-center px-4 py-3 bg-card border-b border-border/50 gap-2 shrink-0">
                <div className="flex gap-1.5 shrink-0">
                  <div className="size-3 rounded-full bg-rose-500/80" />
                  <div className="size-3 rounded-full bg-amber-500/80" />
                  <div className="size-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="mx-auto flex w-full max-w-[60%] items-center justify-center rounded-md bg-muted/40 px-3 py-1 text-[11px] font-medium text-muted-foreground truncate">
                  <ShieldCheck className="size-3.5 shrink-0 mr-1.5 opacity-70" />
                  <span className="truncate">{demoPageData.remoteUrl}</span>
                </div>
              </div>
              <iframe 
                src={demoPageData.remoteUrl}
                className="w-full flex-1 min-h-[700px] border-0 bg-background"
                title="Live POS Demo"
                allow="clipboard-write; storage-access"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-downloads"
              />
            </div>
          </Reveal>
        </div>
      </SectionShell>
    </>
  );
}
