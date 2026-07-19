interface LoaderProps {
  size?: number;
}

export default function Loader({ size = 24 }: LoaderProps) {
  return (
    <div className="flex items-center justify-center">
      <div
        className="animate-spin rounded-full border-4 border-slate-200 border-t-blue-600"
        style={{
          width: size,
          height: size,
        }}
      />
    </div>
  );
}