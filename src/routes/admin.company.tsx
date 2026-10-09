import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/cargovera/admin";
import { pageMeta } from "@/lib/page-meta";
export const Route = createFileRoute("/admin/company")({
  head: () => ({
    ...pageMeta("Admin Company", "CARGOVERA browser-based demo administration."),
    meta: [
      ...pageMeta("Admin Company", "CARGOVERA browser-based demo administration.").meta,
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: () => <AdminPage page="company" />,
});
