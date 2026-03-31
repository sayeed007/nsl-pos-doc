import type { Metadata } from "next";

import { ProductPageView } from "@/components/sections/product/product-page-view";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Detailed product capability page covering NSL POS operations, workflows, feature-benefit mapping, positioning, and validation notes.",
};

export default function ProductPage() {
  return <ProductPageView />;
}
