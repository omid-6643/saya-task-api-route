import { Skeleton } from "@/components/ui/skeleton";

const SkeletonPage = () => {
  return (
    <div className="flex flex-col space-y-3 ">
      <div className="flex flex-col gap-6">
        <Skeleton className="h-4 w-36 " />
        <Skeleton className="h-4 w-32 " />
      </div>
      <Skeleton className="h-[50vh] w-full" />

      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
    </div>
  );
};

export default SkeletonPage;
