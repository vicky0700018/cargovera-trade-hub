import { createFileRoute } from "@tanstack/react-router";
import { GlobalPage } from "@/components/cargovera/public";
import { pageMeta } from "@/lib/page-meta";
export const Route = createFileRoute("/global-reach")({
  head: () =>
    pageMeta(
      "Global Reach",
      "Explore illustrative market connections and international trading opportunities.",
    ),
  component: GlobalPage,
});
