import type { Metadata } from "next";

import { SolutionsPageView } from "@/components/sections/solutions/solutions-page-view";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Persona-driven solutions page covering ideal customers, business problems solved, retail categories, and real use cases for the POS SaaS product.",
};

export default function SolutionsPage() {
  return <SolutionsPageView />;
}
