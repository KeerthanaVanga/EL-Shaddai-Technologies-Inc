import { Link } from "react-router-dom";
import { company } from "../config/company";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 pt-16">
      <div className="text-center px-4">
        <div className="text-8xl font-black mb-4" style={{ color: `${company.colors.primary}20` }}>404</div>
        <h1 className="text-3xl font-black text-gray-900 mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-md" style={{ backgroundColor: company.colors.primary }}>
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
