"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Briefcase, Users, Shield } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Calendar, target: 15, suffix: "+", label: "let na trhu" },
  { icon: Briefcase, target: 500, suffix: "+", label: "dokončených projektů" },
  { icon: Users, target: 127, suffix: "", label: "spokojených zákazníků" },
  { icon: Shield, target: 5, suffix: " let", label: "záruka na práci" },
];

function CountUp({ target, suffix, start }: { target: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    setCount(0);
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [start, target]);

  return <>{count}{suffix}</>;
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section style={{ paddingTop: 80, paddingBottom: 80 }}>
      <div className="container-custom" ref={ref}>
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
          {/* Logo — first column */}
          <motion.div
            className="flex items-center justify-center lg:mr-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Image
              src="/images/logos/logo.png"
              alt="OBK logo"
              width={500}
              height={250}
              className="w-40 sm:w-52 lg:w-64 h-auto"
              style={{ filter: "drop-shadow(0 20px 25px rgba(0,0,0,0.25))" }}
            />
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 flex-1">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, type: "spring", stiffness: 200 }}
                >
                  <stat.icon className="w-7 h-7 sm:w-9 sm:h-9 text-gray-400 mb-2 sm:mb-3" strokeWidth={1.5} />
                </motion.div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-500 leading-none mb-1 sm:mb-2">
                  <CountUp target={stat.target} suffix={stat.suffix} start={isInView} />
                </p>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
