import { Link } from "react-router-dom";
import { company } from "../../config/company";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
}

export default function Button({ children, href, onClick, variant = "primary", size = "md", className = "", type = "button", disabled, loading }: ButtonProps) {
  const sizes = { sm: "px-5 py-2 text-xs", md: "px-7 py-3.5 text-sm", lg: "px-8 py-4 text-base" };
  const base = `inline-flex items-center justify-center gap-2 font-bold rounded-md transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 ${sizes[size]} ${className}`;

  const variants = {
    primary: `text-white hover:shadow-xl`,
    outline: `border-2 hover:shadow-md`,
    ghost: `hover:bg-white/10`,
  };

  const variantStyle = variant === "primary"
    ? { backgroundColor: company.colors.primary }
    : variant === "outline"
    ? { borderColor: company.colors.dark, color: company.colors.dark }
    : { color: "white" };

  const cls = `${base} ${variants[variant]}`;

  const content = loading ? (
    <><span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />{children}</>
  ) : children;

  if (href) return <Link to={href} className={cls} style={variantStyle}>{content}</Link>;
  return <button type={type} onClick={onClick} disabled={disabled || loading} className={cls} style={variantStyle}>{content}</button>;
}
