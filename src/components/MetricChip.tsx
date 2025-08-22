import { cn } from '@/lib/utils';

interface MetricChipProps {
  metric: string;
  className?: string;
}

export const MetricChip = ({ metric, className }: MetricChipProps) => {
  return (
    <div className={cn(
      "inline-flex items-center px-3 py-1 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 text-sm font-semibold text-brand-black",
      className
    )}>
      <span className="text-brand-yellow mr-1">↗</span>
      {metric}
    </div>
  );
};