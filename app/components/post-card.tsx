import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../types";
import { generateNameInitials } from "../utils/string";

const PostCard = ({ author, category, title, _id, image, avatar }: Product) => {
  return (
    <Link href={`/post/${_id}`}>
      <div className="flex flex-col justify-center items-start w-72 h-96 rounded-2xl gap-6 border border-solid border-gray-200 p-4">
        <div className="relative size-[250px]">
          <Image
            src={`/images/${image || "image-2.jpg"}`}
            alt="image"
            fill
            className="rounded-lg bg-cover"
          />
        </div>

        <Badge
          variant="secondary"
          className="text-red-700 bg-blue-100 capitalize"
        >
          {category}
        </Badge>
        <p className="font-bold text-xl text-wrap">
          {title.length > 20 ? `${title.slice(0, 15)}...` : title}
        </p>
        <div className="flex flex-row gap-4 justify-between items-center">
          <Avatar className="size-8">
            <AvatarImage src={`/images/${avatar}`} />
            <AvatarFallback>{generateNameInitials(author)}</AvatarFallback>
          </Avatar>
          <p className="text-sm capitalize text-gray-600/70">{author}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
