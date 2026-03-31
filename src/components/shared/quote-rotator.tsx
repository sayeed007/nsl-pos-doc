"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { Card } from "@/components/ui/card";

export function QuoteRotator({ quotes }: { quotes: string[] }) {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % quotes.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, [quotes.length]);

  return (
    <Card className="overflow-hidden border-brand/15 bg-hero-aurora p-8">
      <div className="space-y-4 flex flex-col justify-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          Closing lines
        </p>
        <div className="">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={quotes[index]}
              className="font-display text-2xl leading-tight text-foreground sm:text-3xl"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              “{quotes[index]}”
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>
    </Card>
  );
}
