import { useState } from "react";
import {
  DEFAULT_CONTENT_BLOCKS,
  STORAGE_KEYS,
  getStorage,
  setStorage,
  type ContentBlock,
} from "../../data/adminData";
import { useToast } from "../ui/Toast";
import { TabHeader, EmptyState } from "./AdminShared";

export default function ContentTab() {
  const { toast } = useToast();
  const [blocks, setBlocks] = useState<ContentBlock[]>(() =>
    getStorage<ContentBlock[]>(STORAGE_KEYS.CONTENT_BLOCKS, [])
  );
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");

  const seedDefaults = () => {
    setStorage(STORAGE_KEYS.CONTENT_BLOCKS, DEFAULT_CONTENT_BLOCKS);
    setBlocks(DEFAULT_CONTENT_BLOCKS);
    toast("success", "Content seeded!", "Default content blocks have been loaded.");
  };

  const startEdit = (block: ContentBlock) => {
    setEditingId(block.id);
    setEditValue(block.value);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditValue("");
  };

  const saveEdit = (id: string) => {
    const updated = blocks.map((b) =>
      b.id === id ? { ...b, value: editValue } : b
    );
    setBlocks(updated);
    setStorage(STORAGE_KEYS.CONTENT_BLOCKS, updated);
    toast("success", "Content updated!");
    cancelEdit();
  };

  const grouped = blocks.reduce<Record<string, ContentBlock[]>>((acc, b) => {
    if (!acc[b.page]) acc[b.page] = [];
    acc[b.page].push(b);
    return acc;
  }, {});

  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm">
      <TabHeader
        title="Content Blocks"
        subtitle="Manage page content across the site"
        action={
          <button
            onClick={seedDefaults}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Seed Default Content
          </button>
        }
      />

      {blocks.length === 0 ? (
        <EmptyState
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
          }
          message="No content blocks found."
          action={
            <button
              onClick={seedDefaults}
              className="px-5 py-2.5 bg-[#0B1426] text-white text-sm font-bold rounded-lg hover:bg-[#15233e] transition-colors"
            >
              Seed Default Content
            </button>
          }
        />
      ) : (
        <div className="divide-y divide-slate-100">
          {Object.entries(grouped).map(([page, pageBlocks]) => (
            <div key={page}>
              <div className="px-6 py-2.5 bg-slate-50 border-b border-slate-100">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  {page}
                </span>
              </div>
              {pageBlocks.map((block) => (
                <div
                  key={block.id}
                  className="px-6 py-4 hover:bg-slate-50/60 transition-colors"
                >
                  {editingId === block.id ? (
                    <div className="space-y-3">
                      <p className="text-xs font-semibold text-slate-400">
                        {block.section} / {block.label}
                      </p>
                      {block.type === "textarea" ? (
                        <textarea
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          rows={3}
                          autoFocus
                          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1426]/15 focus:border-[#0B1426] resize-none transition-colors"
                        />
                      ) : (
                        <input
                          type="text"
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          autoFocus
                          className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B1426]/15 focus:border-[#0B1426] transition-colors"
                        />
                      )}
                      <div className="flex gap-2">
                        <button
                          onClick={() => saveEdit(block.id)}
                          className="px-4 py-1.5 bg-[#0B1426] text-white text-xs font-bold rounded-md hover:bg-[#15233e] transition-colors"
                        >
                          Save
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="px-4 py-1.5 border border-slate-200 text-slate-600 text-xs font-bold rounded-md hover:bg-slate-50 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold text-slate-400 mb-1">
                          {block.section} / {block.label}
                        </p>
                        <p className="text-sm text-slate-800 font-medium line-clamp-2">
                          {block.value}
                        </p>
                      </div>
                      <button
                        onClick={() => startEdit(block)}
                        className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 border border-slate-200 rounded-md hover:bg-slate-100 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                        </svg>
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
