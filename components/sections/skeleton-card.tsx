import { Skeleton } from "../ui/skeleton";

export default function SkeletonCard() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-[125px] lg:w-[640px] sm:w-96 rounded-sm" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
