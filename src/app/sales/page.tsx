import type { Metadata } from "next";

import { SalesPageView } from "@/components/sections/sales/sales-page-view";

export const metadata: Metadata = {
  title: "Sales Hub",
  description:
    "Sales enablement page covering selling points, conversation hooks, demo flow, objections, feature-benefit-sales mapping, positioning, and closing lines.",
};

export default function SalesPage() {
  return <SalesPageView />;
}
