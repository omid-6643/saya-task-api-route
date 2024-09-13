"use client";
import usePosts from "../hooks/use-posts";
import { Product } from "../types";
import PostCard from "./post-card";
import SkeletonCard from "./skeleton-card";

const Posts = () => {
  const { data, isLoading } = usePosts();

  if (isLoading) {
    return [1, 2, 3, 4].map((item) => <SkeletonCard key={item} />);
  }

  if (!data?.posts && !isLoading) {
    return;
  }

  return (
    <div className="flex flex-row gap-6 flex-wrap">
      {data?.posts?.map((product: Product) => (
        <PostCard key={product._id} {...product} />
      ))}
    </div>
  );
};

export default Posts;
