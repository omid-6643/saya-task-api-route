
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const ENDPOINTS = {
  post: `${baseURL}/api/v1/posts`,
  randomPost: `${baseURL}/api/v1/posts/random`,
};

export default ENDPOINTS;
