"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark" | "blue" | "gradient-outline" | "violet" | "violet-outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, style, ...props }, ref) => {
    const baseStyles = cn(
      "inline-flex items-center justify-center gap-2",
      "font-semibold text-center",
      "transition-all duration-200 ease-out",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:pointer-events-none",
      "h-auto min-h-0",
      "whitespace-nowrap"
    );

    // Using inline styles for primary/blue to guarantee colors
    const variantStyles = {
      primary: "",
      secondary: "bg-gray-100 text-gray-900 border border-gray-200 hover:bg-gray-200",
      outline: "bg-transparent text-gray-900 border-2 border-gray-300 hover:bg-gray-100",
      ghost: "bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100",
      dark: "bg-gray-900 text-white border border-white/10 hover:bg-gray-800",
      blue: "",
      "gradient-outline": "",
      violet: "",
    };

    // Inline styles to guarantee proper sizing and colors
    const getSizeStyles = (s: string): React.CSSProperties => {
      switch (s) {
        case "sm":
          return {
            paddingLeft: "18px",
            paddingRight: "18px",
            paddingTop: "8px",
            paddingBottom: "8px",
            fontSize: "14px",
            borderRadius: "9999px",
          };
        case "lg":
          return {
            paddingLeft: "28px",
            paddingRight: "28px",
            paddingTop: "12px",
            paddingBottom: "12px",
            fontSize: "16px",
            borderRadius: "9999px",
          };
        default: // md
          return {
            paddingLeft: "22px",
            paddingRight: "22px",
            paddingTop: "10px",
            paddingBottom: "10px",
            fontSize: "15px",
            borderRadius: "9999px",
          };
      }
    };

    const variantInlineStyles: Record<string, React.CSSProperties> = {
      primary: {
        backgroundColor: "#F97316",
        color: "white",
        boxShadow: "0 4px 6px -1px rgba(249, 115, 22, 0.3), 0 2px 4px -2px rgba(249, 115, 22, 0.2)",
      },
      secondary: {},
      outline: {},
      ghost: {},
      dark: {},
      blue: {
        backgroundColor: "#C7D2FE",
        color: "#1F2937",
        boxShadow: "0 4px 6px -1px rgba(199, 210, 254, 0.3), 0 2px 4px -2px rgba(199, 210, 254, 0.2)",
      },
      "gradient-outline": {},
      violet: {},
    };

    const getHoverColor = (v: string) => {
      switch (v) {
        case "primary": return "#EA580C";
        case "blue": return "#4F46E5";
        case "violet": return undefined;
        default: return undefined;
      }
    };

    // Violet button with solid color (same as quiz block)
    if (variant === "violet") {
      return (
        <motion.button
          ref={ref}
          className={cn(
            baseStyles,
            "relative text-white",
            className
          )}
          style={{
            ...getSizeStyles(size),
            backgroundColor: "#C7D2FE",
            color: "#1F2937",
            boxShadow: "0 4px 6px -1px rgba(199, 210, 254, 0.3), 0 2px 4px -2px rgba(199, 210, 254, 0.2)",
            ...style
          }}
          whileHover={{ scale: 1.02, backgroundColor: "#B4C6FC" }}
          whileTap={{ scale: 0.98 }}
          {...props}
        >
          {children}
        </motion.button>
      );
    }

    // Special gradient-outline button with gradient border
    if (variant === "gradient-outline") {
      return (
        <motion.button
          ref={ref}
          className={cn(
            baseStyles,
            "relative bg-white text-gray-900 hover:bg-gray-50",
            className
          )}
          style={{
            ...getSizeStyles(size),
            background: "linear-gradient(white, white) padding-box, linear-gradient(135deg, #F97316 0%, #C7D2FE 50%, #C7D2FE 100%) border-box",
            border: "2px solid transparent",
            ...style
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          {...props}
        >
          {children}
        </motion.button>
      );
    }

    // Violet outline button
    if (variant === "violet-outline") {
      return (
        <motion.button
          ref={ref}
          className={cn(
            baseStyles,
            "relative bg-white text-gray-900 hover:bg-gray-50",
            className
          )}
          style={{
            ...getSizeStyles(size),
            border: "2px solid #C7D2FE",
            ...style
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          {...props}
        >
          {children}
        </motion.button>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], className)}
        style={{
          ...getSizeStyles(size),
          ...variantInlineStyles[variant],
          ...style
        }}
        whileHover={{
          scale: 1.02,
          backgroundColor: getHoverColor(variant),
        }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
