import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ENDPOINTS from "../utils/endpoints";
import queryKeys from "../utils/queryKeys";

const fetchPosts = async () => {
  const response = await axios.get(ENDPOINTS.post);
  return response.data;
};

const usePosts = () => {
  return useQuery({
    queryKey: [queryKeys.posts],
    queryFn: fetchPosts,
  });
};

export default usePosts;
