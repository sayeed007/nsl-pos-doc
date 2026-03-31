export const homePageData = {
  hero: {
    eyebrow: "All-in-one retail POS",
    title: "Retail POS That Helps Businesses Sell, Control Stock, and Grow",
    description:
      "An all-in-one retail POS that helps businesses sell faster, control stock across locations, and grow revenue through promotions, customer tracking, and clear reporting.",
    supportingPoints: [
      "All-in-one POS for product-based retail businesses",
      "Built for single-store retailers and growing multi-branch operations",
      "Combines sales, stock control, promotions, customer tracking, and reporting",
    ],
    executiveSummary:
      "This product is a retail-focused SaaS POS platform designed to help businesses run daily selling operations, manage stock, control promotions, track customers, and monitor performance from one system.",
    ctas: [
      { href: "/product", label: "Explore Product" },
      { href: "/pricing", label: "View Pricing" },
    ],
  },
  problems: {
    title: "Retail Businesses Outgrow Basic POS and Manual Tracking Fast",
    items: [
      {
        icon: "workflow",
        title: "Disconnected daily operations",
        description: "Sales happen in one place, stock is tracked somewhere else.",
      },
      {
        icon: "spreadsheet",
        title: "Manual tracking creates errors",
        description: "Excel and manual processes create stock errors and wasted time.",
      },
      {
        icon: "network",
        title: "Multi-store blind spots",
        description: "Multi-store businesses struggle to see where stock actually is.",
      },
      {
        icon: "megaphone",
        title: "Promotions stay inconsistent",
        description: "Promotions are handled manually and inconsistently.",
      },
      {
        icon: "insight",
        title: "Owners lack visibility",
        description: "Owners lack real visibility into sales, stock risk, and performance.",
      },
    ],
  },
  solution: {
    title: "One System to Run Daily Retail Operations",
    items: [
      {
        icon: "package",
        title: "Manage core retail flows together",
        description: "Manage products, stock, sales, returns, and customers in one platform.",
      },
      {
        icon: "warehouse",
        title: "Track inventory by location",
        description: "Track inventory by store or warehouse.",
      },
      {
        icon: "spark",
        title: "Run offers inside checkout",
        description: "Run offers and promotions inside the selling process.",
      },
      {
        icon: "loyalty",
        title: "Connect customers to sales",
        description: "Keep customer history and loyalty activity connected to sales.",
      },
      {
        icon: "chart",
        title: "Give owners clearer decisions",
        description: "Give owners clear reports and dashboards for decision-making.",
      },
    ],
  },
  value: {
    title: "What Businesses Gain",
    items: [
      { icon: "checkout", title: "Faster checkout", description: "Faster checkout and smoother daily selling." },
      {
        icon: "boxes",
        title: "Better stock visibility",
        description: "Better stock visibility across locations.",
      },
      {
        icon: "shield",
        title: "Fewer mistakes",
        description: "Fewer stock mistakes and fewer lost sales.",
      },
      {
        icon: "tag",
        title: "Easier promotion management",
        description: "Easier promotion management.",
      },
      {
        icon: "returns",
        title: "Cleaner return handling",
        description: "Better return handling and cleaner records.",
      },
      {
        icon: "control",
        title: "More control",
        description: "More control for owners and managers.",
      },
    ],
  },
  audience: {
    title: "Best Fit Customers",
    items: [
      {
        icon: "store",
        title: "Single-store retailers moving beyond Excel or a billing-only POS",
      },
      {
        icon: "branches",
        title: "Growing retailers with multiple locations",
      },
      {
        icon: "barcode",
        title: "Stores with many SKUs, variants, sizes, or barcodes",
      },
      {
        icon: "campaign",
        title: "Businesses that run promotions regularly",
      },
      {
        icon: "repeat",
        title: "Retailers that want stronger customer retention and repeat purchase tracking",
      },
    ],
  },
  executiveValueStrip: {
    title: "What this platform helps retailers do",
    items: [
      "Sell faster at the counter",
      "Keep tighter control over stock across stores and warehouses",
      "Run promotions without manual workarounds",
      "Track customers and encourage repeat business",
      "Give business owners clearer visibility into sales, payments, and product performance",
      "Support growth from a single store to a multi-location operation",
    ],
  },
  closing: {
    title: "One retail system to help businesses sell better today and scale better tomorrow.",
    description:
      "Use the full site as both a client-shareable product narrative and a practical internal sales and documentation resource.",
    ctas: [
      { href: "/pricing", label: "View Pricing" },
      { href: "/sales", label: "View Sales Kit" },
    ],
  },
} as const;
