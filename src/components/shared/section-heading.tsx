import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Badge variant="outline" className="border-brand/20 bg-brand/5 text-brand">
          {eyebrow}
        </Badge>
      ) : null}
      <div className="space-y-3">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
