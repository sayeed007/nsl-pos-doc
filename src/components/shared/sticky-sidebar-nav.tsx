"use client";

import type { MouseEvent } from "react";
import { useCallback } from "react";
import { motion } from "motion/react";

import { useScrollSpy } from "@/hooks/use-scrollspy";
import { cn } from "@/lib/utils";

export function StickySidebarNav({
  items,
  variant = "desktop",
}: {
  items: { id: string; label: string }[];
  variant?: "desktop" | "mobile";
}) {
  const activeId = useScrollSpy(items.map((item) => item.id));

  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (!el) return;

      window.history.replaceState(null, "", `#${id}`);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [],
  );

  if (variant === "mobile") {
    return (
      <nav
        aria-label="On this page"
        className="sticky top-20 z-30 rounded-[12px] border border-border/70 bg-background/90 p-3 shadow-soft backdrop-blur-xl"
      >
        <p className="px-1 pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          On this page
        </p>
        <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => {
            const active = activeId === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                aria-current={active ? "location" : undefined}
                className={cn(
                  "relative shrink-0 overflow-hidden rounded-full border px-3 py-2 text-sm transition-all duration-200",
                  active
                    ? "border-brand/25 font-medium text-foreground"
                    : "border-border/70 text-muted-foreground hover:text-foreground",
                )}
              >
                {active ? (
                  <motion.span
                    layoutId="sidebar-active"
                    className="absolute inset-0 rounded-full bg-brand/10"
                    transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  />
                ) : null}
                <span className="relative whitespace-nowrap">{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>
    );
  }

  return (
    <nav aria-label="On this page">
      <div className="max-h-[calc(100vh-8rem)] space-y-1 overflow-y-auto rounded-[12px] border border-border/70 bg-card/70 p-3 shadow-soft">
        <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          On this page
        </p>
        {items.map((item) => {
          const active = activeId === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              aria-current={active ? "location" : undefined}
              className={cn(
                "relative block overflow-hidden rounded-xl px-3 py-2 text-sm transition-all duration-200",
                active ? "font-medium text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {active ? (
                <motion.span
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-xl border border-brand/20 bg-brand/10"
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
