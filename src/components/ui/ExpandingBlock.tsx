"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ExpandingBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function ExpandingBlock({ children, className = "" }: ExpandingBlockProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start 0.3"],
  });

  // Animate from 90% width to 100% width
  const width = useTransform(scrollYProgress, [0, 1], ["92%", "100%"]);
  // Animate border radius from rounded to flat
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["32px", "0px"]);

  return (
    <div ref={containerRef} className="relative w-full flex justify-center">
      <motion.div
        className={`w-full ${className}`}
        style={{
          width,
          borderRadius,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
