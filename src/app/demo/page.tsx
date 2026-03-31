import type { Metadata } from "next";

import { DemoPageView } from "@/components/sections/demo/demo-page-view";

export const metadata: Metadata = {
  title: "Live Demo | POS SaaS Documentation",
  description:
    "Explore the live POS application with full administrative capabilities or standard retail checkout access.",
};

export default function DemoPage() {
  return <DemoPageView />;
}
