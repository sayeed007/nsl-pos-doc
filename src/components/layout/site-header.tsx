"use client";

import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,backdrop-filter,border-color] duration-200",
        scrolled
          ? "border-border/70 backdrop-blur-xl"
          : "border-transparent backdrop-blur-0",
      )}
      style={{ backgroundColor: scrolled ? "var(--header-bg-scrolled)" : "var(--header-bg-idle)" }}
    >
      <div className="container flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-1 rounded-full border border-border/70 bg-card/70 p-1 shadow-soft lg:flex">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active ? "bg-background text-foreground shadow-soft" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button asChild variant="hero">
            <Link href={siteConfig.primaryCta.href}>
              {siteConfig.primaryCta.label}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open navigation">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-l border-l-border/70">
              <SheetHeader className="pr-8">
                <SheetTitle>Navigate</SheetTitle>
                <SheetDescription>Jump between product, solution, sales, pricing, and source content.</SheetDescription>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-2">
                {siteConfig.nav.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-2xl border px-4 py-3 text-sm font-medium transition-colors",
                        active
                          ? "border-brand/30 bg-brand/10 text-foreground"
                          : "border-border/70 text-muted-foreground hover:border-brand/20 hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
              <div className="mt-6">
                <Button asChild variant="hero" className="w-full">
                  <Link href={siteConfig.primaryCta.href}>{siteConfig.primaryCta.label}</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
