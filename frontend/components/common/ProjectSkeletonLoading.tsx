"use client";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

function SkeletonCard() {
  return (
    <div className="w-full border border-gray-300 rounded-md dark:bg-[#333333]">
      <Skeleton className="h-35 w-full bg-gray-300 rounded-b-none"/>

      <CardContent className="flex flex-col gap-2 mt-2 p-2">
        <Skeleton className="h-4 w-1/2 bg-gray-300 mb-1" />

        <Skeleton className="h-2 w-full bg-gray-300" />
        <Skeleton className="h-2 w-3/4 bg-gray-300" />

        <div className="flex gap-2 mt-1">
          <Skeleton className="h-2 w-10 bg-gray-300" />
          <Skeleton className="h-2 w-20 bg-gray-300" />
          <Skeleton className="h-2 w-8 bg-gray-300" />
        </div>

        <Skeleton className="h-4 w-20 bg-gray-300 mt-2" />
      </CardContent>
    </div>
  );
}

function SkeletonLoadingHolder() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 mb-6 gap-5 md:gap-6 items-stretch w-full">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}

export default SkeletonLoadingHolder;
