import axios from "axios";

export const fetchPosts = async () => {
  const response = await axios.get("/nepali_social_posts_with_comments.json");
  return response.data;
};
