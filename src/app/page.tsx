import type { Metadata } from "next";

import { HomePageView } from "@/components/sections/home/home-page-view";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Landing page for the POS SaaS retail operations website, covering problem, solution, value, audience, and next-step calls to action.",
};

export default function HomePage() {
  return <HomePageView />;
}
