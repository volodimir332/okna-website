"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ReactNode, useRef, useEffect, useState } from "react";

interface SectionProps {
  id?: string;
  theme?: "light" | "dark" | "secondary";
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
  expanding?: boolean;
}

// Separate component for expanding section to handle hydration properly
function ExpandingSection({
  id,
  className,
  children,
  fullWidth = false,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // useScroll for smooth scroll-based animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.2"]
  });

  // Transform values based on scroll progress
  // Keep rounded corners and thin white margins visible even at max expansion
  const width = useTransform(scrollYProgress, [0, 1], ["92%", "98%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [40, 28]);

  // Spring for smoother animation
  const smoothWidth = useSpring(width, { stiffness: 80, damping: 25 });
  const smoothRadius = useSpring(borderRadius, { stiffness: 80, damping: 25 });

  return (
    <div
      id={id}
      ref={ref}
      className="relative w-full flex justify-center py-4 sm:py-6 md:py-8 bg-transparent"
    >
      <motion.section
        className={cn(
          "section-padding relative overflow-hidden text-white",
          className
        )}
        style={{
          width: isMounted ? smoothWidth : "92%",
          borderRadius: isMounted ? smoothRadius : 40,
          background: "#C7D2FE",
        }}
      >
        <div className={cn(!fullWidth && "container-custom", "relative z-10")}>
          {children}
        </div>
      </motion.section>
    </div>
  );
}

export function Section({
  id,
  theme = "light",
  className,
  children,
  fullWidth = false,
  expanding = false,
}: SectionProps) {
  // Transparent backgrounds to show global pattern
  const themes = {
    light: "bg-transparent",
    secondary: "bg-transparent",
    dark: "bg-[var(--bg-dark)] text-white",
  };

  // For expanding dark sections (Google Antigravity style)
  if (expanding && theme === "dark") {
    return (
      <ExpandingSection id={id} className={className} fullWidth={fullWidth}>
        {children}
      </ExpandingSection>
    );
  }

  // Regular section without expanding animation
  return (
    <section
      id={id}
      className={cn("section-padding relative overflow-hidden", themes[theme], className)}
    >
      <div className={cn(!fullWidth && "container-custom", "relative z-10")}>{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={cn(
        "mb-8 sm:mb-12 md:mb-16 px-1",
        centered && "text-center max-w-3xl mx-auto",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {badge && (
        <span
          className={cn(
            "inline-block px-4 py-1.5 text-xs font-medium rounded-full mb-4",
            light
              ? "bg-white/20 text-white border border-white/30"
              : "bg-[var(--accent-blue-light)] text-[var(--accent-blue)] border border-[var(--accent-blue)]/20"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "mb-4",
          light ? "text-white" : "text-gray-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg",
            light ? "text-white/80" : "text-[var(--text-secondary)]"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
