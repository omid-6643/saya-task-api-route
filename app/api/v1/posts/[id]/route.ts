import connect from "@/lib/db";
import Posts from "@/lib/modals/posts.modal";
import { NextResponse } from "next/server";

export const GET = async (
  _req: Request,
  context: { params: { id: string } }
) => {
  const postId = context.params.id;
  try {
    await connect();

    const post = await Posts.findOne({
      _id: postId,
    });

    if (!post) {
      return new NextResponse(JSON.stringify({ message: "Post not found" }), {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify({ post }), {
      status: 200,
    });
  } catch {
    return new NextResponse("Error in fetching a post", {
      status: 500,
    });
  }
};

export const PUT = async (
  req: Request,
  context: { params: { id: string } }
) => {
  const postId = context.params.id;
  try {
    const body = await req.json();

    await connect();

    const post = await Posts.findOne({
      _id: postId,
    });

    if (!post) {
      return new NextResponse(JSON.stringify({ message: "Post not found" }), {
        status: 404,
      });
    }

    const updatePost = await Posts.findByIdAndUpdate(
      postId,
      { ...body },
      { new: true }
    );

    return new NextResponse(JSON.stringify({ post: updatePost }), {
      status: 200,
    });
  } catch {
    return new NextResponse("Error in fetching a post", {
      status: 500,
    });
  }
};

export const DELETE = async (
  _req: Request,
  context: { params: { id: string } }
) => {
  const postId = context.params.id;
  try {
    await connect();

    const post = await Posts.findOne({ _id: postId });
    if (!post) {
      return new NextResponse(JSON.stringify({ message: "Post not found" }), {
        status: 404,
      });
    }

    await Posts.findByIdAndDelete(postId);

    return new NextResponse(JSON.stringify({ message: "Post is deleted" }), {
      status: 200,
    });
  } catch {
    return new NextResponse("Error in deleting Post", {
      status: 500,
    });
  }
};
