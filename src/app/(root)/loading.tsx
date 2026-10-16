import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="page-container space-y-6 py-10">
      <Skeleton className="h-64 rounded-3xl" />
      <div className="grid gap-5 sm:grid-cols-2">
        {[1, 2, 3, 4].map((n) => (
          <Skeleton key={n} className="h-72 rounded-2xl" />
        ))}
      </div>
    </div>
  );
}
