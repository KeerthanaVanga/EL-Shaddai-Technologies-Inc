import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number; // ms, default 600
}

/**
 * Wraps children in a div that fades + slides in when it enters the viewport.
 * Uses IntersectionObserver via useScrollReveal — no deps needed.
 */
export default function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 600,
}: FadeInProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const transforms: Record<string, string> = {
    up:    "translateY(28px)",
    down:  "translateY(-28px)",
    left:  "translateX(28px)",
    right: "translateX(-28px)",
    none:  "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : transforms[direction],
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
