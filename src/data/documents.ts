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
    },
    {
      title: "Pitch Deck (10 Slides)",
      description:
        "Presentation-ready pitch deck covering problem, solution, audience, value, use cases, packaging, and closing message.",
      lineCount: 103,
      highlights: ["Problem", "Solution", "Pricing structure"],
      viewHref: "/docs/POS_SAAS_PITCH_DECK_10_SLIDES.md",
      downloadHref: "/docs/POS_SAAS_PITCH_DECK_10_SLIDES.md",
    },
    {
      title: "Sales Ready Pack",
      description:
        "Sales enablement playbook covering personas, objections, demo flow, conversation hooks, packaging, and closing lines.",
      lineCount: 231,
      highlights: ["Personas", "Objections", "Demo script"],
      viewHref: "/docs/POS_SAAS_SALES_READY_PACK.md",
      downloadHref: "/docs/POS_SAAS_SALES_READY_PACK.md",
    },
  ],
  validationNotes: [
    "Loyalty point redemption during checkout needs validation before being used as a major selling claim.",
    "Loyalty reversal during returns is not fully confirmed and should be validated.",
    "Cash shift and cash drawer style controls are present, but full production readiness across the active POS flow needs validation.",
    "Activity and audit logs are present, but full action coverage should be validated.",
    "Location-specific special pricing appears to exist in the product structure, but should not be positioned as a confirmed finished feature without validation.",
    "Multi-currency beyond business settings needs validation.",
    "Hardware integrations are not clearly supported and should not be a core marketing claim at this stage.",
    "Supplier, vendor, and purchase-order management were not clearly found in the current product and should not be included in sales messaging.",
    "Offline and suspended-sale support appears in the POS experience, but end-to-end production behavior should be validated before using it as a headline promise.",
  ],
} as const;
