import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

import ContentTab from "../components/admin/ContentTab";
import JobsTab from "../components/admin/JobsTab";
import ProductsTab from "../components/admin/ProductsTab";
import SubmissionsTab from "../components/admin/SubmissionsTab";
import { useMe } from "../hooks/useAuth";
import { useLogout } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { queryClient } from "../utils/TanStack";

type Tab = "content" | "jobs" | "products" | "submissions";

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
  {
    id: "content",
    label: "Content",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "jobs",
    label: "Jobs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: "products",
    label: "Products",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m7.5 4.27 9 5.15" />
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ),
  },
  {
    id: "submissions",
    label: "Submissions",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  const { mutateAsync } = useLogout({
    onSuccess: (response) => {
      queryClient.removeQueries({ queryKey: ["me"] });
      queryClient.clear();
      navigate("/admin", { replace: true });
      console.log(response.message);
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
  const [activeTab, setActiveTab] = useState<Tab>("content");
  const { data, isLoading } = useMe();

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  if (data?.isLoggedIn !== true) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="min-h-screen bg-[#EEF2F6] font-sans">
      {/* ── Top Header ── */}
      <header className="bg-[#0B1426] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
          {/* Left: logo + title */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden border border-white/10 shrink-0">
              <img
                src="/elsaddai.jpeg"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold leading-none">Admin Portal</p>
              <p className="text-[11px] text-white/50 mt-0.5 hidden sm:block">
                EL-Shaddai Technologies Inc
              </p>
            </div>
          </div>

          {/* Right: view site + logout */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/"
              className="hidden sm:flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              View Site
            </Link>
            <button
              onClick={async () => {
                await mutateAsync();
              }}
              className="flex items-center gap-1.5 text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* ── Main ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Tab Bar + Content Card (single container matching screenshot) */}
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden mb-2">
          {/* Tabs */}
          <div className="flex overflow-x-auto border-b border-slate-100 scrollbar-hide">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 sm:px-7 py-3.5 text-sm font-bold whitespace-nowrap transition-all duration-150 border-b-2 -mb-px ${
                  activeTab === tab.id
                    ? "bg-[#0B1426] text-white border-[#0B1426]"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-50 border-transparent"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "content" && <ContentTab />}
          {activeTab === "jobs" && <JobsTab />}
          {activeTab === "products" && <ProductsTab />}
          {activeTab === "submissions" && <SubmissionsTab />}
        </div>
      </main>
    </div>
  );
}
