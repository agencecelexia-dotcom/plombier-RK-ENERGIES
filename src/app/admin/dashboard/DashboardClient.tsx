"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  BarChart3,
  Users,
  Eye,
  MousePointerClick,
  FileText,
  LogOut,
  TrendingUp,
  TrendingDown,
  Clock,
  Mail,
  Phone,
  Wrench,
  ChevronDown,
  RefreshCw,
  Trash2,
  CheckCircle,
  BookOpen,
  Info,
} from "lucide-react";
import type { AnalyticsEvent, Submission } from "@/lib/storage";

// --- Types ---

type Period = "7d" | "30d" | "all";
type Tab = "overview" | "submissions";

// --- Utility functions ---

function isInPeriod(dateStr: string, period: Period): boolean {
  if (period === "all") return true;
  const date = new Date(dateStr);
  const now = new Date();
  const days = period === "7d" ? 7 : 30;
  const cutoff = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
  return date >= cutoff;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function groupByDay(events: AnalyticsEvent[], days: number): { label: string; count: number }[] {
  const now = new Date();
  const result: { label: string; count: number }[] = [];

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
    const key = date.toISOString().split("T")[0];
    const label = date.toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
    const count = events.filter(
      (e) => e.timestamp.startsWith(key) && e.type === "page_view"
    ).length;
    result.push({ label, count });
  }

  return result;
}

function getTopPages(events: AnalyticsEvent[]): { page: string; count: number }[] {
  const map: Record<string, number> = {};
  events
    .filter((e) => e.type === "page_view")
    .forEach((e) => {
      map[e.page] = (map[e.page] || 0) + 1;
    });
  return Object.entries(map)
    .map(([page, count]) => ({ page, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);
}

function getClickEvents(events: AnalyticsEvent[]): { element: string; count: number }[] {
  const map: Record<string, number> = {};
  events
    .filter((e) => e.type === "click" && e.element)
    .forEach((e) => {
      map[e.element!] = (map[e.element!] || 0) + 1;
    });
  return Object.entries(map)
    .map(([element, count]) => ({ element, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);
}

// --- SVG Chart Components ---

function AreaChart({ data }: { data: { label: string; count: number }[] }) {
  if (data.length === 0) return null;

  const maxVal = Math.max(...data.map((d) => d.count), 1);
  const width = 600;
  const height = 200;
  const padding = { top: 20, right: 20, bottom: 40, left: 40 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const points = data.map((d, i) => ({
    x: padding.left + (i / (data.length - 1 || 1)) * chartW,
    y: padding.top + chartH - (d.count / maxVal) * chartH,
  }));

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${padding.top + chartH} L ${points[0].x} ${padding.top + chartH} Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
      <defs>
        <linearGradient id="areaGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      {/* Grid lines */}
      {[0, 0.25, 0.5, 0.75, 1].map((pct) => {
        const y = padding.top + chartH * (1 - pct);
        return (
          <g key={pct}>
            <line x1={padding.left} y1={y} x2={width - padding.right} y2={y} stroke="#334155" strokeWidth="0.5" />
            <text x={padding.left - 8} y={y + 4} textAnchor="end" fill="#64748b" fontSize="10">
              {Math.round(maxVal * pct)}
            </text>
          </g>
        );
      })}
      {/* Area */}
      <path d={areaPath} fill="url(#areaGrad)" />
      {/* Line */}
      <path d={linePath} fill="none" stroke="#3b82f6" strokeWidth="2" />
      {/* Points */}
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="3" fill="#3b82f6" />
      ))}
      {/* X labels */}
      {data.map((d, i) => {
        if (data.length > 14 && i % 3 !== 0) return null;
        return (
          <text
            key={i}
            x={points[i].x}
            y={height - 5}
            textAnchor="middle"
            fill="#64748b"
            fontSize="9"
          >
            {d.label}
          </text>
        );
      })}
    </svg>
  );
}

function DonutChart({ data }: { data: { label: string; count: number; color: string }[] }) {
  const total = data.reduce((s, d) => s + d.count, 0) || 1;
  const size = 160;
  const cx = size / 2;
  const cy = size / 2;
  const r = 60;
  const strokeW = 20;
  let cumAngle = -90;

  return (
    <div className="flex items-center gap-6">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {data.map((d, i) => {
          const angle = (d.count / total) * 360;
          const startAngle = cumAngle;
          cumAngle += angle;
          const endAngle = cumAngle;
          const start = polarToCartesian(cx, cy, r, startAngle);
          const end = polarToCartesian(cx, cy, r, endAngle);
          const largeArc = angle > 180 ? 1 : 0;
          const path = `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`;
          return (
            <path key={i} d={path} fill="none" stroke={d.color} strokeWidth={strokeW} strokeLinecap="round" />
          );
        })}
        <text x={cx} y={cy - 5} textAnchor="middle" fill="white" fontSize="22" fontWeight="bold">
          {total}
        </text>
        <text x={cx} y={cy + 14} textAnchor="middle" fill="#94a3b8" fontSize="10">
          total
        </text>
      </svg>
      <div className="space-y-2">
        {data.map((d, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
            <span className="text-slate-300">{d.label}</span>
            <span className="text-slate-500 ml-auto">{d.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function BarRow({ label, value, max }: { label: string; value: number; max: number }) {
  const pct = max > 0 ? (value / max) * 100 : 0;
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-slate-300 truncate max-w-[200px]">{label}</span>
        <span className="text-slate-400">{value}</span>
      </div>
      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
        <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

// --- Stat Cards ---

function StatCard({
  icon: Icon,
  label,
  value,
  trend,
  color = "blue",
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string | number;
  trend?: number;
  color?: string;
}) {
  const colorMap: Record<string, string> = {
    blue: "from-blue-500/20 to-blue-600/5 text-blue-400",
    green: "from-emerald-500/20 to-emerald-600/5 text-emerald-400",
    amber: "from-amber-500/20 to-amber-600/5 text-amber-400",
    purple: "from-purple-500/20 to-purple-600/5 text-purple-400",
  };

  return (
    <div className="bg-[#1e293b] rounded-xl p-5 border border-slate-700/50">
      <div className="flex items-start justify-between mb-3">
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colorMap[color]} flex items-center justify-center`}>
          <Icon className="w-5 h-5" />
        </div>
        {trend !== undefined && (
          <div className={`flex items-center gap-1 text-xs font-medium ${trend >= 0 ? "text-emerald-400" : "text-red-400"}`}>
            {trend >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {Math.abs(trend)}%
          </div>
        )}
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-sm text-slate-400 mt-1">{label}</p>
    </div>
  );
}

// --- Submissions Table ---

function SubmissionsTable({
  submissions,
  onUpdateStatus,
  onDelete,
}: {
  submissions: Submission[];
  onUpdateStatus: (id: string, status: Submission["status"]) => void;
  onDelete: (id: string) => void;
}) {
  const statusColors: Record<string, string> = {
    new: "bg-blue-500/20 text-blue-300",
    read: "bg-amber-500/20 text-amber-300",
    done: "bg-emerald-500/20 text-emerald-300",
  };

  const statusLabels: Record<string, string> = {
    new: "Nouveau",
    read: "Lu",
    done: "Traite",
  };

  if (submissions.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400">
        <Mail className="w-12 h-12 mx-auto mb-4 opacity-30" />
        <p>Aucune demande de contact pour le moment</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {submissions.map((sub) => (
        <div
          key={sub.id}
          className="bg-[#0f172a] rounded-xl p-4 border border-slate-700/50 hover:border-slate-600/50 transition-colors"
        >
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-white">{sub.nom}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[sub.status]}`}>
                  {statusLabels[sub.status]}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  {sub.telephone}
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3" />
                  {sub.email}
                </span>
              </div>
            </div>
            <div className="text-xs text-slate-500 flex items-center gap-1 shrink-0">
              <Clock className="w-3 h-3" />
              {formatDate(sub.date)}
            </div>
          </div>

          <div className="flex items-center gap-2 mb-3 text-sm">
            <Wrench className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-slate-300">{sub.service}</span>
          </div>

          {sub.message && (
            <p className="text-sm text-slate-400 mb-3 bg-slate-800/50 rounded-lg p-3">
              {sub.message}
            </p>
          )}

          <div className="flex items-center gap-2">
            {sub.status === "new" && (
              <button
                onClick={() => onUpdateStatus(sub.id, "read")}
                className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 transition-colors"
              >
                <BookOpen className="w-3 h-3" />
                Marquer lu
              </button>
            )}
            {sub.status !== "done" && (
              <button
                onClick={() => onUpdateStatus(sub.id, "done")}
                className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 transition-colors"
              >
                <CheckCircle className="w-3 h-3" />
                Traite
              </button>
            )}
            <button
              onClick={() => onDelete(sub.id)}
              className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg bg-red-500/10 text-red-300 hover:bg-red-500/20 transition-colors ml-auto"
            >
              <Trash2 className="w-3 h-3" />
              Supprimer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// --- Main Dashboard ---

interface DashboardClientProps {
  initialEvents: AnalyticsEvent[];
  initialSubmissions: Submission[];
}

export function DashboardClient({ initialEvents, initialSubmissions }: DashboardClientProps) {
  const router = useRouter();
  const [events, setEvents] = useState(initialEvents);
  const [submissions, setSubmissions] = useState(initialSubmissions);
  const [period, setPeriod] = useState<Period>("30d");
  const [tab, setTab] = useState<Tab>("overview");
  const [refreshing, setRefreshing] = useState(false);

  // Filtered events
  const filtered = useMemo(
    () => events.filter((e) => isInPeriod(e.timestamp, period)),
    [events, period]
  );

  // Stats
  const pageViews = filtered.filter((e) => e.type === "page_view").length;
  const clicks = filtered.filter((e) => e.type === "click").length;
  const newSubmissions = submissions.filter((s) => s.status === "new").length;

  // Unique visitors (rough estimate by user agent per day)
  const uniqueVisitors = useMemo(() => {
    const set = new Set<string>();
    filtered
      .filter((e) => e.type === "page_view")
      .forEach((e) => {
        const day = e.timestamp.split("T")[0];
        set.add(`${day}_${e.userAgent?.slice(0, 50)}`);
      });
    return set.size;
  }, [filtered]);

  // Chart data
  const chartDays = period === "7d" ? 7 : 30;
  const chartData = useMemo(() => groupByDay(events, chartDays), [events, chartDays]);
  const topPages = useMemo(() => getTopPages(filtered), [filtered]);
  const clickEvents = useMemo(() => getClickEvents(filtered), [filtered]);

  // Service distribution for donut
  const serviceDistribution = useMemo(() => {
    const map: Record<string, number> = {};
    submissions.forEach((s) => {
      map[s.service] = (map[s.service] || 0) + 1;
    });
    const colors = ["#3b82f6", "#f59e0b", "#10b981", "#8b5cf6", "#ef4444", "#06b6d4"];
    return Object.entries(map)
      .map(([label, count], i) => ({ label, count, color: colors[i % colors.length] }))
      .sort((a, b) => b.count - a.count);
  }, [submissions]);

  // Actions
  async function handleRefresh() {
    setRefreshing(true);
    try {
      const [evRes, subRes] = await Promise.all([
        fetch("/api/admin/analytics"),
        fetch("/api/admin/submissions"),
      ]);
      if (evRes.ok) setEvents(await evRes.json());
      if (subRes.ok) setSubmissions(await subRes.json());
    } finally {
      setRefreshing(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  async function handleUpdateStatus(id: string, status: Submission["status"]) {
    const res = await fetch("/api/admin/submissions", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    if (res.ok) {
      setSubmissions((prev) =>
        prev.map((s) => (s.id === id ? { ...s, status } : s))
      );
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Supprimer cette demande ?")) return;
    const res = await fetch("/api/admin/submissions", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setSubmissions((prev) => prev.filter((s) => s.id !== id));
    }
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-[#0f172a]/80 backdrop-blur-xl border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg hidden sm:block">Dashboard</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline">Actualiser</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 hover:bg-red-900/50 text-sm transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Deconnexion</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* Welcome banner */}
        <div className="mb-6 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-white font-medium">Bonjour Thomas !</p>
            <p className="text-sm text-slate-400 mt-0.5">
              Les donnees affichees sont factices et servent uniquement a des fins de demonstration.
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          {/* Tabs */}
          <div className="flex bg-slate-800 rounded-xl p-1">
            <button
              onClick={() => setTab("overview")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                tab === "overview"
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <BarChart3 className="w-4 h-4 inline mr-1.5" />
              Vue d&apos;ensemble
            </button>
            <button
              onClick={() => setTab("submissions")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                tab === "submissions"
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <FileText className="w-4 h-4" />
              Demandes
              {newSubmissions > 0 && (
                <span className="bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {newSubmissions}
                </span>
              )}
            </button>
          </div>

          {/* Period selector */}
          {tab === "overview" && (
            <div className="relative">
              <select
                value={period}
                onChange={(e) => setPeriod(e.target.value as Period)}
                className="appearance-none bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 pr-8 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="7d">7 derniers jours</option>
                <option value="30d">30 derniers jours</option>
                <option value="all">Tout</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          )}
        </div>

        {tab === "overview" ? (
          <>
            {/* Stat cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <StatCard icon={Eye} label="Pages vues" value={pageViews} color="blue" />
              <StatCard icon={Users} label="Visiteurs uniques" value={uniqueVisitors} color="green" />
              <StatCard icon={MousePointerClick} label="Clics CTA" value={clicks} color="amber" />
              <StatCard icon={FileText} label="Demandes" value={submissions.length} color="purple" />
            </div>

            {/* Charts row */}
            <div className="grid lg:grid-cols-3 gap-4 mb-6">
              {/* Area chart */}
              <div className="lg:col-span-2 bg-[#1e293b] rounded-xl p-5 border border-slate-700/50">
                <h3 className="text-sm font-medium text-slate-300 mb-4">
                  Trafic ({period === "7d" ? "7 jours" : "30 jours"})
                </h3>
                {pageViews > 0 ? (
                  <AreaChart data={chartData} />
                ) : (
                  <div className="h-[200px] flex items-center justify-center text-slate-500 text-sm">
                    Pas encore de donnees
                  </div>
                )}
              </div>

              {/* Donut */}
              <div className="bg-[#1e293b] rounded-xl p-5 border border-slate-700/50">
                <h3 className="text-sm font-medium text-slate-300 mb-4">
                  Demandes par service
                </h3>
                {serviceDistribution.length > 0 ? (
                  <DonutChart data={serviceDistribution} />
                ) : (
                  <div className="h-[160px] flex items-center justify-center text-slate-500 text-sm">
                    Pas encore de donnees
                  </div>
                )}
              </div>
            </div>

            {/* Bottom row */}
            <div className="grid lg:grid-cols-2 gap-4">
              {/* Top pages */}
              <div className="bg-[#1e293b] rounded-xl p-5 border border-slate-700/50">
                <h3 className="text-sm font-medium text-slate-300 mb-4">Pages les plus visitees</h3>
                {topPages.length > 0 ? (
                  <div className="space-y-3">
                    {topPages.map((p) => (
                      <BarRow
                        key={p.page}
                        label={p.page}
                        value={p.count}
                        max={topPages[0].count}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-500 text-sm">Pas encore de donnees</p>
                )}
              </div>

              {/* Top clicks */}
              <div className="bg-[#1e293b] rounded-xl p-5 border border-slate-700/50">
                <h3 className="text-sm font-medium text-slate-300 mb-4">Clics CTA</h3>
                {clickEvents.length > 0 ? (
                  <div className="space-y-3">
                    {clickEvents.map((c) => (
                      <BarRow
                        key={c.element}
                        label={c.element}
                        value={c.count}
                        max={clickEvents[0].count}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-500 text-sm">Pas encore de donnees</p>
                )}
              </div>
            </div>
          </>
        ) : (
          /* Submissions tab */
          <SubmissionsTable
            submissions={submissions}
            onUpdateStatus={handleUpdateStatus}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}
