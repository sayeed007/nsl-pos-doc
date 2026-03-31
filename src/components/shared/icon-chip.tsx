import type { HTMLAttributes } from "react";

import { iconMap, type IconName } from "@/lib/icons";
import { cn } from "@/lib/utils";

export function IconChip({
  icon,
  className,
}: {
  icon: IconName;
  className?: string;
}) {
  const Icon = iconMap[icon];

  return (
    <div
      className={cn(
        "flex size-12 items-center justify-center rounded-2xl border border-brand/15 bg-brand/10 text-brand shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-brand/15",
        className,
      )}
    >
      <Icon className="size-5 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.8} />
    </div>
  );
}

export function IconLabel({
  icon,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  icon: IconName;
}) {
  const Icon = iconMap[icon];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/75 px-3 py-1.5 text-sm text-muted-foreground",
        className,
      )}
      {...props}
    >
      <Icon className="size-4 text-brand" />
      {props.children}
    </div>
  );
}
