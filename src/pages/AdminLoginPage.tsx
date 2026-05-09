import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { adminLogin, isAdminAuthenticated } from "../data/adminData";
import { useToast } from "../components/ui/Toast";
import { useEffect } from "react";

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Already logged in → go straight to dashboard
  useEffect(() => {
    if (isAdminAuthenticated()) {
      navigate("/admin/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }
    setLoading(true);
    setError("");
    await new Promise((r) => setTimeout(r, 700));
    const ok = adminLogin(email, password);
    setLoading(false);
    if (ok) {
      navigate("/admin/dashboard", { replace: true });
    } else {
      setError("Invalid email or password. Please try again.");
      toast("error", "Login failed", "Invalid credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-[#EEF2F6] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-[420px] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 md:p-10">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full border border-slate-200 p-1 flex items-center justify-center">
            <div className="w-full h-full bg-[#0B1426] rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-[26px] font-bold text-[#0B1426] mb-3">
            Welcome Back
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed px-2">
            Please enter your authorized credentials to securely access the administrator dashboard.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div>
            <label className="block text-[13px] font-bold text-[#0B1426] mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); }}
              placeholder="admin@elshaddai.com"
              autoComplete="email"
              className="w-full px-4 py-3 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B1426]/20 focus:border-[#0B1426] transition-colors placeholder:text-slate-400"
            />
          </div>

          <div>
            <label className="block text-[13px] font-bold text-[#0B1426] mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              placeholder="••••••••"
              autoComplete="current-password"
              className="w-full px-4 py-3 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B1426]/20 focus:border-[#0B1426] transition-colors placeholder:text-slate-400 tracking-widest"
            />
          </div>

          {error && (
            <p className="text-xs text-red-500 font-medium flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0B1426] hover:bg-[#15233e] disabled:opacity-60 text-white text-[15px] font-bold py-3.5 px-4 rounded-lg transition-colors mt-2 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Signing in…
              </>
            ) : (
              "Sign In to Dashboard"
            )}
          </button>
        </form>

        {/* Back link */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#0B1426] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
            Back to Website
          </Link>
        </div>

      </div>
    </div>
  );
}
