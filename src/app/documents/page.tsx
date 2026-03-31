import type { Metadata } from "next";

import { DocumentsPageView } from "@/components/sections/documents/documents-page-view";

export const metadata: Metadata = {
  title: "Documents",
  description:
    "Source document access page linking to the original markdown files and preserving validation notes from the planning materials.",
};

export default function DocumentsPage() {
  return <DocumentsPageView />;
}
