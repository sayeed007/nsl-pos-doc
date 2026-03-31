export const siteConfig = {
  name: "POS SaaS",
  description:
    "A polished marketing and documentation website for a retail-focused SaaS POS platform.",
  nav: [
    { href: "/", label: "Home" },
    { href: "/product", label: "Product" },
    { href: "/solutions", label: "Solutions" },
    { href: "/sales", label: "Sales Hub" },
    { href: "/pricing", label: "Pricing" },
    { href: "/documents", label: "Documents" },
    // { href: "/demo", label: "Live Demo" },
  ],
  primaryCta: {
    href: "/demo",
    label: "Explore Demo",
  },
  footerLinks: [
    { href: "/product", label: "Capabilities" },
    { href: "/solutions", label: "Use Cases" },
    { href: "/sales", label: "Sales Ready Pack" },
    { href: "/pricing", label: "Packaging Strategy" },
    { href: "/documents", label: "Source Documents" },
    // { href: "/demo", label: "Live Demo Environment" },
  ],
} as const;
