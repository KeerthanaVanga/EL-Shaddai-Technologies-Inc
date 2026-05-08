import { useState } from "react";
import { useToast } from "../ui/Toast";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast("error", "Please fix the errors below.", "All required fields must be filled correctly.");
      return;
    }
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 1500)); // Simulated API call
      toast("success", "Message sent!", "We'll get back to you within 24 hours.");
      setForm({ fullName: "", email: "", phone: "", message: "" });
    } catch {
      toast("error", "Something went wrong.", "Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputBase = "w-full px-4 py-3 text-sm rounded-lg border bg-white transition-all duration-200 outline-none focus:ring-2 focus:border-transparent placeholder-gray-300";
  const inputOk = "border-gray-200 focus:ring-[#8B1A1A]/20 focus:border-[#8B1A1A]";
  const inputErr = "border-red-300 focus:ring-red-200 bg-red-50";

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
      <h2 className="text-xl font-black text-gray-900 mb-1">Send Us a Message</h2>
      <p className="text-sm text-gray-500 mb-7">Fill in the form below and we'll get back to you within 24 hours.</p>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
          <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="John Doe"
            className={`${inputBase} ${errors.fullName ? inputErr : inputOk}`} />
          {errors.fullName && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><span>⚠</span>{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com"
            className={`${inputBase} ${errors.email ? inputErr : inputOk}`} />
          {errors.email && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><span>⚠</span>{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number <span className="text-gray-400 font-normal">(Optional)</span></label>
          <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000"
            className={`${inputBase} ${inputOk}`} />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Message <span className="text-red-500">*</span></label>
          <textarea name="message" rows={5} value={form.message} onChange={handleChange} placeholder="How can we help you?"
            className={`${inputBase} resize-none ${errors.message ? inputErr : inputOk}`} />
          {errors.message && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1"><span>⚠</span>{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 text-sm font-bold text-white rounded-lg transition-all duration-200 hover:opacity-90 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          style={{ backgroundColor: company.colors.primary }}
        >
          {loading ? (
            <><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Sending…</>
          ) : "Send Message"}
        </button>
      </form>
    </div>
  );
}
