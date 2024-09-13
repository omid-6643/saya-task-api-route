import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ENDPOINTS from "../utils/endpoints";
import queryKeys from "../utils/queryKeys";

const fetchRandomPost = async () => {
  const response = await axios.get(ENDPOINTS.randomPost);
  return response.data;
};

const useRandomPost = () => {
  return useQuery({
    queryKey: [queryKeys.randomPost],
    queryFn: fetchRandomPost,
  });
};

export default useRandomPost;
