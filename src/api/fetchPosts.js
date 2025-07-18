import axios from "axios";
import BASE from "./../../public/nepali_social_posts_with_comments.json";

const BASE_URL = BASE;

export const fetchPosts = async () => {
  const response = await axios.get("/nepali_social_posts_with_comments.json");
  return response.data;
};
