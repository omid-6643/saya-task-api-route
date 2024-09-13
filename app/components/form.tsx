"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import useCreatePost from "../hooks/use-create-post";
import useSinglePost from "../hooks/use-single-posts";
import useUpdatePost from "../hooks/use-update-post";
import { Product } from "../types";
import SkeletonForm from "./skeleton-form";

const formSchema = z.object({
  author: z.string().min(2, { message: "Author is a required field" }),
  title: z.string().min(2, { message: "Title is a required field" }),
  content: z.string().min(2, { message: "Content is a required field" }),
  category: z.string().min(2, { message: "Category is a required field" }),
});

const selectOption = [
  { id: 1, value: "sport", name: "Sport" },
  { id: 1, value: "it", name: "IT" },
  { id: 1, value: "music", name: "Music" },
  { id: 1, value: "game", name: "Game" },
];

const FormSection = ({ id }: { id?: string }) => {
  const router = useRouter();
  const { data, isLoading } = useSinglePost(id as string);

  const { mutateAsync: createPost } = useCreatePost();
  const { mutateAsync: updatePost } = useUpdatePost();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      author: data?.post.author || "",
      title: data?.post.title || "",
      content: data?.post.content || "",
      category: data?.post.category || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (id) {
      return await updatePost(
        { data: { ...values }, id },
        {
          onSuccess: () => {
            form.reset();
            toast.success("post edited");
            router.push("/");
          },
        }
      );
    }

    await createPost(values as Product, {
      onSuccess: () => {
        form.reset();
        toast.success("create post");
        router.push("/");
      },
    });
  };

  if (isLoading) {
    return <SkeletonForm />;
  }

  return (
    <Form {...form}>
      <div className="flex flex-row justify-center items-center mb-14">
        <h1 className="font-bold text-5xl underline ">
          {id ? "Edit Post" : "Create Post"}
        </h1>
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-between gap-6 m-auto w-2/3"
      >
        <div className="grid grid-cols-2 gap-x-6 items-center justify-between">
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input placeholder="Author" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => {
              return (
                <FormItem key={field.value}>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={(value) => field.onChange(value)}
                    value={String(field.value)}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {selectOption.map((option) => (
                        <SelectItem key={option.id} value={option.value}>
                          {option.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your content here."
                  className="resize-none"
                  rows={10}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row justify-end w-full">
          <Button type="submit" className="w-32">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FormSection;
