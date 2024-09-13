import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import ENDPOINTS from "../utils/endpoints";
import queryKeys from "../utils/queryKeys";

const deletePost = async (id: string) => {
  const response = await axios.delete(`${ENDPOINTS.post}/${id}`);
  return response;
};

const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.posts] });
    },
  });
};
export default useDeletePost;
