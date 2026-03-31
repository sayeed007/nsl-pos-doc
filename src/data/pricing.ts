export const pricingPageData = {
  hero: {
    title: "Simple Plans That Grow With Your Business",
    description:
      "Use the commercial packaging strategy as a tiered way to position capability depth without inventing price points or unsupported features.",
  },
  tiers: [
    {
      name: "Starter",
      badge: "Foundation",
      bestFor: "Single-store retailers moving away from Excel or a basic POS",
      featured: false,
      includes: [
        "POS selling",
        "Products",
        "Categories",
        "Barcode support",
        "Customer profiles",
        "Basic stock tracking",
        "Standard reports",
      ],
      salesAngle: "Everything a growing retail shop needs to get organized from day one",
    },
    {
      name: "Growth",
      badge: "Most popular structure",
      bestFor: "Retailers with multiple stores or heavier stock movement",
      includes: [
        "Everything in Starter",
        "Multi-location stock",
        "Stock transfers",
        "Promotions",
        "Loyalty",
        "Staff management",
        "Richer reporting",
      ],
      salesAngle:
        "The right tier for businesses that need control across branches and want to drive repeat sales",
      featured: true,
    },
    {
      name: "Advanced",
      badge: "Operational depth",
      bestFor: "More mature retail operations that want tighter control and broader visibility",
      featured: false,
      includes: [
        "Everything in Growth",
        "Stronger reporting depth",
        "Warehouse-oriented workflows",
        "Premium onboarding",
        "Higher-touch account support",
      ],
      salesAngle:
        "For retailers that want one operational system to support scale, control, and better decision-making",
    },
  ],
  whyCustomersBuy: [
    "Save time every day",
    "Reduce stock confusion",
    "Sell faster",
    "Run promotions more effectively",
    "Understand business performance more clearly",
    "Scale from one store to many with better control",
  ],
  closingLine: "One retail system to help businesses sell better today and scale better tomorrow.",
} as const;
