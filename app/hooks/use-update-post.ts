import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "../types";
import ENDPOINTS from "../utils/endpoints";
import queryKeys from "../utils/queryKeys";

const updatePost = async ({ data , id}: { data: Omit<Product, "_id">, id: string }) => {
  const response = await axios.put(`${ENDPOINTS.post}/${id}`, data);
  return response;
};

const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.posts] });
    },
  });
};
export default useUpdatePost;
