import type { Metadata } from "next";

import { PricingPageView } from "@/components/sections/pricing/pricing-page-view";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Commercial packaging page covering Starter, Growth, and Advanced positioning without inventing unsupported pricing details.",
};

export default function PricingPage() {
  return <PricingPageView />;
}
