"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "default" | "primary" | "success" | "warning";
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = "default", children, className }: BadgeProps) {
  const variants = {
    default:
      "bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)]",
    primary:
      "bg-[var(--accent-blue-light)] text-[var(--accent-blue)] border border-[var(--accent-blue)]/20",
    success:
      "bg-green-50 text-green-600 border border-green-200",
    warning:
      "bg-orange-50 text-orange-600 border border-orange-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
