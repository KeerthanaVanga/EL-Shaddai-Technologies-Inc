import { company } from "../../config/company";

interface SectionHeaderProps {
  tagline?: string;
  headline: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({ tagline, headline, description, centered = true, light = false }: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      {tagline && (
        <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3" style={{ color: company.colors.primary }}>
          {tagline}
        </p>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight ${light ? "text-white" : "text-gray-900"}`}>
        {headline}
      </h2>
      {description && (
        <p className={`max-w-2xl text-base leading-relaxed ${centered ? "mx-auto" : ""} ${light ? "text-gray-300" : "text-gray-500"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
