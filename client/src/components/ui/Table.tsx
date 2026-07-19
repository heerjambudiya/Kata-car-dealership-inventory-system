import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface TableProps {
  children: ReactNode;
  className?: string;
}

export default function Table({
  children,
  className,
}: TableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table
        className={cn(
          "min-w-full divide-y divide-slate-200",
          className
        )}
      >
        {children}
      </table>
    </div>
  );
}