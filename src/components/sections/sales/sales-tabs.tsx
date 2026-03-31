"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CheckCircle2, MessageSquareQuote } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type SalesTabsProps = {
  sellingPoints: readonly string[];
  conversations: readonly { trigger: string; response: string }[];
  demo: readonly { step: string; show: string; say: string }[];
  objections: readonly { objection: string; response: string }[];
};

export function SalesTabs({
  sellingPoints,
  conversations,
  demo,
  objections,
}: SalesTabsProps) {
  const [active, setActive] = useState("selling-points");
  const prefersReducedMotion = useReducedMotion();

  const tabs = [
    { value: "selling-points", label: "Selling Points" },
    { value: "conversations", label: "Conversations" },
    { value: "demo", label: "Demo Guide" },
    { value: "faq", label: "Objections" },
  ] as const;

  return (
    <Tabs value={active} onValueChange={setActive} className="w-full">
      <TabsList className="bg-muted/30 border-border/70 gap-2 p-2">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="rounded-[12px] px-6 py-2.5 transition-all duration-300 data-[state=active]:bg-brand/10 data-[state=active]:text-brand data-[state=active]:font-semibold data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-brand/20"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="selling-points" forceMount className={active === "selling-points" ? "block" : "hidden"}>
        <AnimatePresence mode="wait">
          {active === "selling-points" ? (
            <motion.div
              key="selling-points"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
            >
              {sellingPoints.map((point, index) => (
                <Reveal key={point} delay={index * 0.03}>
                  <Card className="h-full p-5 flex items-center">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />
                      <p className="text-sm leading-6 text-foreground">{point}</p>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </TabsContent>

      <TabsContent value="conversations" forceMount className={active === "conversations" ? "block" : "hidden"}>
        <AnimatePresence mode="wait">
          {active === "conversations" ? (
            <motion.div
              key="conversations"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mx-auto space-y-4">
                <div className="flex items-center gap-2 px-2 text-sm font-medium text-brand">
                  <MessageSquareQuote className="size-5" />
                  <span>Handle real-world retail conversations</span>
                </div>

                <Accordion type="single" collapsible className="space-y-3">
                  {conversations.map((item, index) => (
                    <AccordionItem value={`conv-${index}`} key={item.trigger}>
                      <AccordionTrigger className="text-left font-display text-lg">
                        {item.trigger}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="p-2 rounded-sm text-base leading-7 text-foreground border border-brand/15 bg-brand/5">
                          {item.response}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </TabsContent>

      <TabsContent value="demo" forceMount className={active === "demo" ? "block" : "hidden"}>
        <AnimatePresence mode="wait">
          {active === "demo" ? (
            <motion.div
              key="demo"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto mt-4"
            >
              <div className="absolute left-6 top-0 h-full w-px bg-border/80 lg:left-7" />

              <div className="space-y-12">
                {demo.map((item, index) => (
                  <Reveal key={item.step} delay={index * 0.05}>
                    <div className="relative pl-14 lg:pl-16">
                      <div className="absolute left-0 top-1 flex size-12 items-center justify-center rounded-full border-4 border-background bg-brand/15 font-display text-lg font-bold text-brand shadow-sm lg:size-14 lg:text-xl">
                        {index + 1}
                      </div>

                      <div className="space-y-5">
                        <h3 className="font-display text-xl font-bold tracking-tight text-foreground lg:text-2xl">
                          {item.step}
                        </h3>

                        <div className="grid gap-4 lg:grid-cols-2">
                          <div className="group rounded-[16px] border border-border/70 bg-muted/40 p-5 transition-colors hover:bg-muted/60">
                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-foreground">
                              Visual Track
                            </div>
                            <p className="mt-3 text-sm leading-7 text-foreground">
                              {item.show}
                            </p>
                          </div>

                          <div className="group rounded-[16px] border border-highlight/20 bg-highlight/5 p-5 transition-colors hover:bg-highlight/10">
                            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-highlight/80 transition-colors group-hover:text-highlight">
                              Talk Track
                            </div>
                            <p className="mt-3 text-sm leading-7 text-foreground">
                              {item.say}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </TabsContent>

      <TabsContent value="faq" forceMount className={active === "faq" ? "block" : "hidden"}>
        <AnimatePresence mode="wait">
          {active === "faq" ? (
            <motion.div
              key="faq"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <Accordion type="single" collapsible className="space-y-3">
                {objections.map((item) => (
                  <AccordionItem value={item.objection} key={item.objection}>
                    <AccordionTrigger>{item.objection}</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <Badge variant="highlight">Response</Badge>
                        <p className="text-sm leading-7 text-muted-foreground">{item.response}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </TabsContent>
    </Tabs>
  );
}
