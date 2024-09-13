import connect from "@/lib/db";
import Posts from "@/lib/modals/posts.modal";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connect();

    const posts = await Posts.find({}).sort({ createdAt: "asc" });
    return new NextResponse(JSON.stringify({ posts }), {
      status: 200,
    });
  } catch {
    return new NextResponse("Error in fetching posts", {
      status: 500,
    });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    await connect();

    const IMAGES = ["image-2.jpg", "image-3.jpg", "image-4.jpg"];

    const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];

    const avatar =
      PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];
    const image = IMAGES[Math.floor(Math.random() * IMAGES.length)];

    const newPost = new Posts({ ...body, image, avatar });

    await newPost.save();
    return new NextResponse(
      JSON.stringify({ message: "Post is created", post: newPost }),
      { status: 200 }
    );
  } catch {
    return new NextResponse("Error in create", {
      status: 500,
    });
  }
};
