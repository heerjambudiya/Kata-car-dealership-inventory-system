import type { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: ReactNode;
}

export default function EmptyState({
  title,
  description,
  icon,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 p-10 text-center">
      {icon && <div className="mb-4 text-slate-400">{icon}</div>}

      <h3 className="text-lg font-semibold text-slate-900">
        {title}
      </h3>

      {description && (
        <p className="mt-2 max-w-sm text-sm text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}