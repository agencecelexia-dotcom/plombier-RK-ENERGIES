import { getAnalyticsEvents } from "@/lib/storage";
import { getSubmissions } from "@/lib/storage";
import { DashboardClient } from "./DashboardClient";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const [events, submissions] = await Promise.all([
    getAnalyticsEvents(),
    getSubmissions(),
  ]);

  return <DashboardClient initialEvents={events} initialSubmissions={submissions} />;
}
