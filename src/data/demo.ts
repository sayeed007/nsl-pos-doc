export const demoPageData = {
  hero: {
    title: "Live Product Experience",
    description: "Explore the live POS SaaS environment. Interact with full administrative capabilities or step into the shoes of a local store cashier.",
    bullets: ["Live testing environment", "Complete role-based access", "Pre-configured sample data"],
  },
  credentials: [
    {
      role: "Platform Super Admin",
      email: "super.admin@tafuripos.com",
      password: "super.admin.tafuripos",
      styles: { card: "bg-purple-500/5 border-purple-500/15 hover:bg-purple-500/10", dot: "bg-purple-500" }
    },
    {
      role: "Store Owner / Admin",
      email: "admin@tafuri-demo.com",
      password: "SecureP@ss123",
      styles: { card: "bg-emerald-500/5 border-emerald-500/15 hover:bg-emerald-500/10", dot: "bg-emerald-500" }
    },
    {
      role: "Daily Cashier",
      email: "cashier@tafuri-demo.com",
      password: "Cashier@123!",
      styles: { card: "bg-blue-500/5 border-blue-500/15 hover:bg-blue-500/10", dot: "bg-blue-500" }
    },
    {
      role: "Pharma Speciality Admin",
      email: "admin@nsl-pharma.com",
      password: "Secure@123",
      styles: { card: "bg-rose-500/5 border-rose-500/15 hover:bg-rose-500/10", dot: "bg-rose-500" }
    }
  ],
  remoteUrl: "https://nsl-pos.neural-semiconductor.com/"
} as const;
