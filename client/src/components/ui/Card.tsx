import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface CardProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function Card({
  children,
  title,
  subtitle,
  className,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg",
        className
      )}
    >
      {(title || subtitle) && (
        <div className="mb-5">
          {title && (
            <h3 className="text-lg font-semibold text-slate-900">
              {title}
            </h3>
          )}

          {subtitle && (
            <p className="mt-1 text-sm text-slate-500">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {children}
    </motion.div>
  );
}