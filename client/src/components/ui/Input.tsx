import type { InputHTMLAttributes } from "react";
import { cn } from "../../lib/utils";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <input
        className={cn(
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100",
  className
)}
        {...props}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}