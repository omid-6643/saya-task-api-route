import { Skeleton } from "@/components/ui/skeleton";

const SkeletonForm = () => {
  return (
    <div className="flex flex-col space-y-3 ">
      <div className="grid grid-cols-2 gap-6">
        <Skeleton className="h-10 " />
        <Skeleton className="h-10 " />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Skeleton className="h-10" />
        <Skeleton className="h-10" />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Skeleton className="h-10" />
      </div>
      <Skeleton className="h-20 w-full" />
    </div>
  );
};

export default SkeletonForm;
