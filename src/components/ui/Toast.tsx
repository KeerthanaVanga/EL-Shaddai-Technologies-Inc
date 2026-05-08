import React, { useEffect, useState, createContext, useContext, useCallback } from "react";

type ToastType = "success" | "error" | "info" | "warning";

interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
}

interface ToastContextValue {
  toasts: Toast[];
  toast: (type: ToastType, title: string, message?: string) => void;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    (type: ToastType, title: string, message?: string) => {
      const id = Math.random().toString(36).slice(2);
      setToasts((prev) => [...prev, { id, type, title, message }]);
      setTimeout(() => dismiss(id), 4500);
    },
    [dismiss]
  );

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss }}>
      {children}
      <ToastContainer toasts={toasts} dismiss={dismiss} />
    </ToastContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside ToastProvider");
  return ctx;
}

// ── Toast item styles ──────────────────────────────────────────────────────────
const icons: Record<ToastType, string> = {
  success: "✓",
  error: "✕",
  info: "ℹ",
  warning: "⚠",
};

const styles: Record<ToastType, { bar: string; icon: string }> = {
  success: { bar: "bg-emerald-500", icon: "bg-emerald-100 text-emerald-600" },
  error:   { bar: "bg-red-500",     icon: "bg-red-100 text-red-600" },
  info:    { bar: "bg-blue-500",    icon: "bg-blue-100 text-blue-600" },
  warning: { bar: "bg-amber-500",   icon: "bg-amber-100 text-amber-600" },
};

// ── Progress bar that shrinks over 4.5s ────────────────────────────────────────
function ProgressBar({ type }: { type: ToastType }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-100 overflow-hidden">
      <div
        className={`h-full ${styles[type].bar} origin-left`}
        style={{ animation: "toast-progress 4.5s linear forwards" }}
      />
    </div>
  );
}

function ToastItem({ toast, dismiss }: { toast: Toast; dismiss: (id: string) => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  const s = styles[toast.type];

  return (
    <div
      className={`relative flex items-start gap-3 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 ${
        visible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95"
      }`}
    >
      {/* Left accent */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${s.bar}`} />

      <div className="flex items-start gap-3 p-4 pl-5 w-full pb-5">
        {/* Icon */}
        <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${s.icon}`}>
          {icons[toast.type]}
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 leading-snug">{toast.title}</p>
          {toast.message && (
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">{toast.message}</p>
          )}
        </div>

        {/* Close */}
        <button
          onClick={() => dismiss(toast.id)}
          className="shrink-0 text-gray-300 hover:text-gray-600 transition-colors text-xl leading-none mt-0.5"
          aria-label="Dismiss"
        >
          ×
        </button>
      </div>

      <ProgressBar type={toast.type} />
    </div>
  );
}

function ToastContainer({
  toasts,
  dismiss,
}: {
  toasts: Toast[];
  dismiss: (id: string) => void;
}) {
  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-[9999] flex flex-col gap-3 pointer-events-none max-w-[calc(100vw-2rem)]">
      {toasts.map((t) => (
        <div key={t.id} className="pointer-events-auto">
          <ToastItem toast={t} dismiss={dismiss} />
        </div>
      ))}
    </div>
  );
}
