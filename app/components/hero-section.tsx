"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import useRandomPost from "../hooks/use-random-post";
import { generateNameInitials } from "../utils/string";

const HeroSection = () => {
  const { data, isLoading } = useRandomPost();

  if (isLoading) {
    return <Skeleton className="h-[50vh] w-full rounded-xl" />;
  }

  if (!data?.post && !isLoading) {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold uppercase">no data</h1>
      </div>
    );
  }

  return (
    <section
      className="bg-cover bg-center h-[50vh] drop-shadow-lg rounded-2xl"
      style={{
        backgroundImage: `url(/images/${data.post?.image || "image-1.jpg"})`,
      }}
    >
      <div className="flex flex-col gap-4 p-10 absolute bottom-0">
        <Badge variant="secondary" className="text-red-700 bg-blue-100 w-fit capitalize">
          {data.post?.category}
        </Badge>
        <h2 className="text-4xl text-white">{data.post?.title}</h2>
        <div className="flex flex-row justify-start gap-6 items-center">
          <Avatar className="size-8">
            <AvatarImage src={`/images/${data.post?.avatar}`} />
            <AvatarFallback>
              {generateNameInitials(data?.post.author)}
            </AvatarFallback>
          </Avatar>
          <p className="text-sm text-white capitalize text-gray-600/70">
            {data.post?.author}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
