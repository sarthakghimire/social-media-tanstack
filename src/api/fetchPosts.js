import axios from "axios";

export const fetchPosts = async () => {
  try {
    const response = await axios.get("/nepali_social_posts_with_comments.json");
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
