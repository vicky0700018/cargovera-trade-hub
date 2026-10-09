import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "@/components/cargovera/admin";
import { pageMeta } from "@/lib/page-meta";
export const Route = createFileRoute("/admin/testimonials")({
  head: () => ({
    ...pageMeta("Admin Testimonials", "CARGOVERA browser-based demo administration."),
    meta: [
      ...pageMeta("Admin Testimonials", "CARGOVERA browser-based demo administration.").meta,
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: () => <AdminPage page="testimonials" />,
});
