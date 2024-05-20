import { Skeleton } from "@/components/ui/skeleton";

export function DropSkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[20px] w-[550px] rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[250px]" />
      </div>
    </div>
  );
}
