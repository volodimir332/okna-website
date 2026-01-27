"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "featured" | "dark";
  hover?: boolean;
  children: React.ReactNode;
}

export function Card({
  variant = "default",
  hover = true,
  children,
  className,
  ...props
}: CardProps) {
  const variants = {
    default: cn(
      "bg-[var(--bg-card)]",
      "border border-[var(--border)]",
      "text-[var(--text-primary)]"
    ),
    featured: cn(
      "bg-[var(--bg-card)]",
      "border-2 border-[var(--accent-blue)]",
      "shadow-lg",
      "text-[var(--text-primary)]"
    ),
    dark: cn(
      "bg-[var(--bg-dark-secondary)]",
      "border border-white/10",
      "text-white"
    ),
  };

  return (
    <motion.div
      className={cn(
        // Base padding - ALWAYS present
        "p-6 md:p-8",
        // Border radius
        "rounded-2xl",
        // Overflow for badges
        "overflow-hidden relative",
        // Transitions
        "transition-all duration-300",
        // Variant styles
        variants[variant],
        // Hover effect
        hover && "hover:shadow-xl hover:-translate-y-1",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Card subcomponents with NO additional padding (Card already has it)
interface CardSubProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardSubProps) {
  return (
    <div className={cn("mb-4", className)}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }: CardSubProps) {
  return (
    <div className={cn("flex-grow", className)}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className }: CardSubProps) {
  return (
    <div className={cn("mt-6", className)}>
      {children}
    </div>
  );
}
