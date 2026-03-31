"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Custom easing for premium feel
      }}
    >
      {children}
    </motion.div>
  );
}
