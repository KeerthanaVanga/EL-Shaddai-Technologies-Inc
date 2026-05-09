import { useState } from "react";
import {
  STORAGE_KEYS,
  getStorage,
  setStorage,
  type Submission,
} from "../../data/adminData";
import { useToast } from "../ui/Toast";
import { Modal, TabHeader, EmptyState } from "./AdminShared";

export default function SubmissionsTab() {
  const { toast } = useToast();
  const [submissions, setSubmissions] = useState<Submission[]>(() =>
    getStorage<Submission[]>(STORAGE_KEYS.SUBMISSIONS, [])
  );
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const unreadCount = submissions.filter((s) => !s.read).length;

  const persist = (updated: Submission[]) => {
    setSubmissions(updated);
    setStorage(STORAGE_KEYS.SUBMISSIONS, updated);
  };

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
      return;
    }
    setExpandedId(id);
    const updated = submissions.map((s) =>
      s.id === id ? { ...s, read: true } : s
    );
    persist(updated);
  };

  const markAllRead = () => {
    persist(submissions.map((s) => ({ ...s, read: true })));
    toast("success", "All submissions marked as read.");
  };

  const handleDelete = (id: string) => {
    persist(submissions.filter((s) => s.id !== id));
    if (expandedId === id) setExpandedId(null);
    toast("success", "Submission deleted.");
    setDeleteId(null);
  };

  const formatDate = (iso: string) => {
    try {
      return new Date(iso).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
      });
    } catch {
      return iso;
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm">
        <TabHeader
          title="Contact Submissions"
          subtitle={
            unreadCount > 0
              ? `${submissions.length} total · ${unreadCount} unread`
              : `${submissions.length} submission${submissions.length !== 1 ? "s" : ""}`
          }
          action={
            unreadCount > 0 ? (
              <button
                onClick={markAllRead}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Mark All Read
              </button>
            ) : undefined
          }
        />

        {submissions.length === 0 ? (
          <EmptyState
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            }
            message="No contact form submissions yet."
          />
        ) : (
          <div className="divide-y divide-slate-100">
            {submissions
              .slice()
              .sort(
                (a, b) =>
                  new Date(b.submittedAt).getTime() -
                  new Date(a.submittedAt).getTime()
              )
              .map((sub) => (
                <div key={sub.id} className="transition-colors">
                  {/* Row */}
                  <div
                    className={`flex items-start gap-3 p-5 sm:p-6 cursor-pointer hover:bg-slate-50/60 transition-colors ${!sub.read ? "bg-blue-50/30" : ""}`}
                    onClick={() => toggleExpand(sub.id)}
                  >
                    {/* Unread dot */}
                    <div className="flex-shrink-0 mt-1.5 w-2">
                      {!sub.read && (
                        <span className="block w-2 h-2 rounded-full bg-blue-500" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                        <span className="text-sm font-bold text-slate-900">
                          {sub.fullName}
                        </span>
                        <span className="text-xs text-slate-400">
                          {sub.email}
                        </span>
                        {sub.phone && (
                          <span className="text-xs text-slate-400">
                            {sub.phone}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {sub.message}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        {formatDate(sub.submittedAt)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setDeleteId(sub.id);
                        }}
                        className="p-1.5 text-slate-300 hover:text-red-500 transition-colors"
                        title="Delete"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
                      </button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`text-slate-400 transition-transform duration-200 ${expandedId === sub.id ? "rotate-180" : ""}`}
                      >
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </div>
                  </div>

                  {/* Expanded message */}
                  {expandedId === sub.id && (
                    <div className="px-6 pb-6 pt-0 bg-slate-50/40 border-t border-slate-100">
                      <div className="bg-white rounded-xl border border-slate-100 p-5 mt-3">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-xs">
                          <div>
                            <span className="font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Name</span>
                            <span className="text-slate-800 font-medium">{sub.fullName}</span>
                          </div>
                          <div>
                            <span className="font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Email</span>
                            <a href={`mailto:${sub.email}`} className="text-blue-600 hover:underline font-medium">{sub.email}</a>
                          </div>
                          {sub.phone && (
                            <div>
                              <span className="font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Phone</span>
                              <span className="text-slate-800 font-medium">{sub.phone}</span>
                            </div>
                          )}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Message</span>
                          <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{sub.message}</p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-[11px] text-slate-400">{formatDate(sub.submittedAt)}</span>
                          <a
                            href={`mailto:${sub.email}?subject=Re: Your inquiry`}
                            className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-[#0B1426] text-white rounded-md hover:bg-[#15233e] transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                            Reply
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Delete Confirm */}
      {deleteId && (
        <Modal title="Delete Submission" onClose={() => setDeleteId(null)}>
          <p className="text-sm text-slate-600 mb-6">
            Are you sure you want to delete this submission? This action cannot be undone.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => handleDelete(deleteId)}
              className="flex-1 py-2.5 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-700 transition-colors"
            >
              Delete
            </button>
            <button
              onClick={() => setDeleteId(null)}
              className="flex-1 py-2.5 border border-slate-200 text-slate-600 text-sm font-bold rounded-lg hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
