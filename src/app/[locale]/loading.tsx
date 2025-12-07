import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Skeleton */}
      <div className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <Skeleton className="h-8 w-16" />
          <div className="hidden md:flex gap-6">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-10 w-10" />
            <Skeleton className="h-10 w-10" />
          </div>
        </div>
      </div>

      {/* Hero Skeleton */}
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="container">
          <div className="flex flex-col items-center text-center gap-6">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-16 w-96" />
            <Skeleton className="h-12 w-64" />
            <Skeleton className="h-20 w-full max-w-2xl" />
            <div className="flex gap-4">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-12 w-32" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
