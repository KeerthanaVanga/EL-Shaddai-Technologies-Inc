import { useState } from "react";
import { useToast } from "../ui/Toast";
import { company } from "../../config/company";
import { getStorage, setStorage, generateId, STORAGE_KEYS } from "../../data/adminData";
import type { Submission } from "../../data/adminData";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const { toast } = useToast();
  const [form, setForm] = useState<FormData>({ fullName: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.message.trim()) e.message = "Message is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      toast("error", "Please fix the errors below.", "All required fields must be filled correctly.");
      return;
    }
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 1500));
      const submission: Submission = {
        id: generateId(),
        fullName: form.fullName,
        email: form.email,
        phone: form.phone || undefined,
        message: form.message,
        submittedAt: new Date().toISOString(),
        read: false,
      };
      const existing = getStorage<Submission[]>(STORAGE_KEYS.SUBMISSIONS, []);
      setStorage(STORAGE_KEYS.SUBMISSIONS, [...existing, submission]);
      toast("success", "Message sent!", "We'll get back to you within 24 hours.");
      setForm({ fullName: "", email: "", phone: "", message: "" });
    } catch {
      toast("error", "Something went wrong.", "Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputBase = "w-full pl-10 pr-4 py-3 text-sm rounded-lg border bg-white transition-all duration-300 outline-none focus:ring-2 focus:border-transparent placeholder-slate-400";
  const inputOk = "border-slate-200 focus:ring-[#8B1A1A]/20 focus:border-[#8B1A1A]";
  const inputErr = "border-red-300 focus:ring-red-200 bg-red-50";

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 md:p-10">
      <h2 className="text-2xl font-black text-slate-900 mb-2">Send Us a Message</h2>
      <p className="text-sm text-slate-500 font-medium mb-8">Fill in the form below and we'll get back to you within 24 hours.</p>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">Full Name <span className="text-red-600">*</span></label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="John Smith"
                className={`${inputBase} ${errors.fullName ? inputErr : inputOk}`} />
            </div>
            {errors.fullName && <p className="mt-1.5 text-xs text-red-500 font-medium flex items-center gap-1"><span>⚠</span>{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">Email Address <span className="text-red-600">*</span></label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@company.com"
                className={`${inputBase} ${errors.email ? inputErr : inputOk}`} />
            </div>
            {errors.email && <p className="mt-1.5 text-xs text-red-500 font-medium flex items-center gap-1"><span>⚠</span>{errors.email}</p>}
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-2">Phone Number <span className="text-slate-400 font-medium">(Optional)</span></label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000"
              className={`${inputBase} ${inputOk}`} />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-2">Message <span className="text-red-600">*</span></label>
          <textarea name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Tell us about your hiring needs, the roles you're looking to fill, or any questions you have..."
            className={`w-full px-4 py-3 text-sm rounded-lg border bg-white transition-all duration-300 outline-none focus:ring-2 placeholder-slate-400 resize-none ${errors.message ? inputErr : inputOk}`} />
          {errors.message && <p className="mt-1.5 text-xs text-red-500 font-medium flex items-center gap-1"><span>⚠</span>{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 text-sm font-bold text-white rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          style={{ backgroundColor: company.colors.primary }}
        >
          {loading ? (
            <><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Sending…</>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
