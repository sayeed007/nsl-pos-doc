export const documentsPageData = {
  hero: {
    title: "Source Documents",
    description:
      "Access the original markdown files behind the site structure, messaging, sales guidance, and positioning.",
  },
  documents: [
    {
      title: "Marketing & Product Business Overview",
      description:
        "Comprehensive product documentation covering executive summary, customer fit, capabilities, workflows, positioning, and validation notes.",
      lineCount: 347,
      highlights: ["Capabilities", "Workflows", "Feature-to-benefit mapping"],
      viewHref: "/docs/MARKETING_PRODUCT_BUSINESS_OVERVIEW.md",
      downloadHref: "/docs/MARKETING_PRODUCT_BUSINESS_OVERVIEW.md",
      styles: {
        card: "bg-blue-500/5 border-blue-500/15 hover:bg-blue-500/10",
        badge: "bg-blue-500/10 text-blue-700 border-blue-500/20",
        button: "bg-blue-600 hover:bg-blue-700",
      }
    },
    {
      title: "Pitch Deck (10 Slides)",
      description:
        "Presentation-ready pitch deck covering problem, solution, audience, value, use cases, packaging, and closing message.",
      lineCount: 103,
      highlights: ["Problem", "Solution", "Pricing structure"],
      viewHref: "/docs/POS_SAAS_PITCH_DECK_10_SLIDES.md",
      downloadHref: "/docs/POS_SAAS_PITCH_DECK_10_SLIDES.md",
      styles: {
        card: "bg-emerald-500/5 border-emerald-500/15 hover:bg-emerald-500/10",
        badge: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
        button: "bg-emerald-600 hover:bg-emerald-700",
      }
    },
    {
      title: "Sales Ready Pack",
      description:
        "Sales enablement playbook covering personas, objections, demo flow, conversation hooks, packaging, and closing lines.",
      lineCount: 231,
      highlights: ["Personas", "Objections", "Demo script"],
      viewHref: "/docs/POS_SAAS_SALES_READY_PACK.md",
      downloadHref: "/docs/POS_SAAS_SALES_READY_PACK.md",
      styles: {
        card: "bg-purple-500/5 border-purple-500/15 hover:bg-purple-500/10",
        badge: "bg-purple-500/10 text-purple-700 border-purple-500/20",
        button: "bg-purple-600 hover:bg-purple-700",
      }
    },
  ],
  validationNotes: [
    {
      text: "Loyalty point redemption during checkout needs validation before being used as a major selling claim.",
      styles: { card: "bg-rose-500/5 border-rose-500/15 hover:bg-rose-500/10", dot: "bg-rose-500" }
    },
    {
      text: "Loyalty reversal during returns is not fully confirmed and should be validated.",
      styles: { card: "bg-amber-500/5 border-amber-500/15 hover:bg-amber-500/10", dot: "bg-amber-500" }
    },
    {
      text: "Cash shift and cash drawer style controls are present, but full production readiness across the active POS flow needs validation.",
      styles: { card: "bg-blue-500/5 border-blue-500/15 hover:bg-blue-500/10", dot: "bg-blue-500" }
    },
    {
      text: "Activity and audit logs are present, but full action coverage should be validated.",
      styles: { card: "bg-emerald-500/5 border-emerald-500/15 hover:bg-emerald-500/10", dot: "bg-emerald-500" }
    },
    {
      text: "Location-specific special pricing appears to exist in the product structure, but should not be positioned as a confirmed finished feature without validation.",
      styles: { card: "bg-purple-500/5 border-purple-500/15 hover:bg-purple-500/10", dot: "bg-purple-500" }
    },
    {
      text: "Multi-currency beyond business settings needs validation.",
      styles: { card: "bg-slate-500/5 border-slate-500/15 hover:bg-slate-500/10", dot: "bg-slate-500" }
    },
    {
      text: "Hardware integrations are not clearly supported and should not be a core marketing claim at this stage.",
      styles: { card: "bg-rose-500/5 border-rose-500/15 hover:bg-rose-500/10", dot: "bg-rose-500" }
    },
    {
      text: "Supplier, vendor, and purchase-order management were not clearly found in the current product and should not be included in sales messaging.",
      styles: { card: "bg-amber-500/5 border-amber-500/15 hover:bg-amber-500/10", dot: "bg-amber-500" }
    },
    {
      text: "Offline and suspended-sale support appears in the POS experience, but end-to-end production behavior should be validated before using it as a headline promise.",
      styles: { card: "bg-blue-500/5 border-blue-500/15 hover:bg-blue-500/10", dot: "bg-blue-500" }
    },
  ],
} as const;
