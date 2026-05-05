export default function MetricCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="group relative border border-gray-200 dark:border-white/5 rounded-2xl p-8 hover:border-gray-300 dark:hover:border-white/15 transition-all duration-300 hover:scale-[1.02]">
      <p className="text-5xl tablet:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
        {value}
      </p>
      <p className="text-sm text-gray-500 dark:text-white/40 mt-3 leading-relaxed max-w-xs">
        {label}
      </p>
    </div>
  );
}
