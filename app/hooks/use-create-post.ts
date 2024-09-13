import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "../types";
import ENDPOINTS from "../utils/endpoints";
import queryKeys from "../utils/queryKeys";

const createPost = async (data: Product) => {
  const response = await axios.post(ENDPOINTS.post, data);
  return response;
};

const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.posts] });
    },
  });
};
export default useCreatePost;
