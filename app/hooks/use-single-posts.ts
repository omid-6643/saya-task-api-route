import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ENDPOINTS from "../utils/endpoints";
import queryKeys from "../utils/queryKeys";

const fetchPosts = async (id: string) => {
  console.log(id);
  const response = await axios.get(`${ENDPOINTS.post}/${id}`);
  return response?.data;
};

const useSinglePost = (id: string) => {
  return useQuery({
    queryKey: [queryKeys.singlePost, id],
    queryFn: () => fetchPosts(id),
    enabled: !!id,
  });
};

export default useSinglePost;
