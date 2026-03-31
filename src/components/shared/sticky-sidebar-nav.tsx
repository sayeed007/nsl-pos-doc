"use client";

import { motion } from "motion/react";

import { useScrollSpy } from "@/hooks/use-scrollspy";
import { cn } from "@/lib/utils";

export function StickySidebarNav({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  const activeId = useScrollSpy(items.map((item) => item.id));

  return (
    <nav className="sticky top-28 hidden xl:block">
      <div className="space-y-2 rounded-[24px] border border-border/70 bg-card/70 p-4 shadow-soft">
        <p className="px-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          On this page
        </p>
        {items.map((item) => {
          const active = activeId === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "relative block overflow-hidden rounded-2xl px-3 py-2 text-sm transition-colors",
                active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {active ? (
                <motion.span
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-2xl border border-brand/20 bg-brand/10"
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                />
              ) : null}
              <span className="relative">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
