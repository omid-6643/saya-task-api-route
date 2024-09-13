"use client";

import ConfirmModal from "@/app/components/confirm-modal";
import SkeletonPage from "@/app/components/skeleton-page";
import useSinglePost from "@/app/hooks/use-single-posts";
import { generateNameInitials } from "@/app/utils/string";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const SinglePost = ({ params: { id } }: { params: { id: string } }) => {
  const { data, isLoading } = useSinglePost(id);
console.log({data})
  if (isLoading) {
    return <SkeletonPage />;
  }
  return (
    <article className="flex flex-col items-start justify-between gap-4 pb-10">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col items-start justify-between gap-4 w-full">
          <Badge
            variant="secondary"
            className="text-red-700 bg-blue-100 capitalize"
          >
            {data?.post.category}
          </Badge>
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold capitalize">
            {data?.post.title}
          </h2>
          <div className="flex flex-row gap-4 justify-between items-center">
            <Avatar className="size-8">
              <AvatarImage src={`/images/${data.post?.avatar}`} />
              <AvatarFallback>
                {generateNameInitials(data?.post.author)}
              </AvatarFallback>
            </Avatar>
            <p className="text-sm capitalize text-gray-600/70">
              {data?.post.author}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-3 items-center justify-end w-full">
          <ConfirmModal id={id} />
          <Link href={`/post/edit/${id}`}>
            <Button variant={"outline"}>Edit</Button>
          </Link>
        </div>
      </div>
      <div className="w-full h-[60vh] relative">
        <Image
          src={`/images/${data.post?.image || "image-2.jpg"}`}
          alt="image"
          fill
          className="rounded-lg bg-cover"
        />
      </div>
      <p className="text-xl text-gray-600">{data.post.content}</p>
    </article>
  );
};

export default SinglePost;
