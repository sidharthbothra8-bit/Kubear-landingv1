import { Skeleton } from './ui/skeleton';
import { LoaderCircle } from 'lucide-react';

export function DashboardLayoutSkeleton() {
  return (
    <div className="studio-route-skeleton">
      <div className="studio-skeleton-card"><div className="studio-skeleton-top"><span>Kubear Editorial</span><LoaderCircle className="size-5 animate-spin" /></div><h1>Opening the release desk.</h1><p>Checking your editor access and loading the next notes that need attention.</p><div className="studio-skeleton-lines"><Skeleton className="h-12 w-full rounded-xl" /><Skeleton className="h-12 w-full rounded-xl" /><Skeleton className="h-12 w-4/5 rounded-xl" /></div></div>
    </div>
  );
}
