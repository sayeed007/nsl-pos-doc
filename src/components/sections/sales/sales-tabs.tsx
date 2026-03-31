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
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
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
                    <div className="flex items-start gap-3">
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
              className="grid gap-4 lg:grid-cols-2"
            >
              {conversations.map((item, index) => (
                <Reveal key={item.trigger} delay={index * 0.03}>
                  <Card className="h-full p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-brand">
                        <MessageSquareQuote className="size-4" />
                        Conversation hook
                      </div>
                      <div className="space-y-3">
                        <div className="rounded-[12px] border border-border/70 bg-muted/40 p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                            If they say
                          </p>
                          <p className="mt-2 text-sm leading-6 text-foreground">{item.trigger}</p>
                        </div>
                        <div className="rounded-[12px] border border-brand/15 bg-brand/10 p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                            You say
                          </p>
                          <p className="mt-2 text-sm leading-6 text-foreground">{item.response}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              ))}
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
              className="space-y-4"
            >
              {demo.map((item, index) => (
                <Reveal key={item.step} delay={index * 0.03}>
                  <Card className="p-6">
                    <div className="grid gap-5 lg:grid-cols-[auto_1fr]">
                      <div className="flex size-12 items-center justify-center rounded-[12px] border border-brand/20 bg-brand/10 text-base font-semibold text-brand">
                        {index + 1}
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {item.step}
                        </h3>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="rounded-[12px] border border-border/70 bg-muted/35 p-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                              What to show
                            </p>
                            <p className="mt-2 text-sm leading-6 text-foreground">{item.show}</p>
                          </div>
                          <div className="rounded-[12px] border border-highlight/20 bg-highlight/10 p-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">
                              What to say
                            </p>
                            <p className="mt-2 text-sm leading-6 text-foreground">{item.say}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              ))}
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
