import connect from "@/lib/db";
import Posts from "@/lib/modals/posts.modal";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connect();

    const randomPost = await Posts.aggregate([{ $sample: { size: 1 } }]);
    return new NextResponse(JSON.stringify({ post: randomPost[0] }), {
      status: 200,
    });
  } catch {
    return new NextResponse("Error in fetching post", {
      status: 500,
    });
  }
};
