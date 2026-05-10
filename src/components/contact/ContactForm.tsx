import { useState } from "react";
import { useToast } from "../ui/Toast";
import { useCreateContactSubmission } from "../../hooks/useContact";
import type { CreateContactPayload } from "../../api/contact.api";
import { company } from "../../config/company";

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
  const createContactMutation = useCreateContactSubmission();
  
  const [form, setForm] = useState<FormData>({ fullName: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.fullName.trim()) e.fullName = "Name is required.";
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

    try {
      await createContactMutation.mutateAsync(form as CreateContactPayload);
      toast("success", "Message sent successfully!", "We'll get back to you within 24 hours.");
      setForm({ fullName: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch (error) {
      toast("error", "Failed to send message", error instanceof Error ? error.message : "Please try again later.");
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
          disabled={createContactMutation.isPending}
          className="w-full py-4 text-sm font-bold text-white rounded-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          style={{ backgroundColor: company.colors.primary }}
        >
          {createContactMutation.isPending && (
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
          {createContactMutation.isPending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
