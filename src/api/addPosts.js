import axios from "axios";

export const addPosts = async (newPost) => {
  try {
    const response = await axios.post(
      "/nepali_social_posts_with_comments.json",
      newPost
    );
    return response.data;
  } catch (error) {
    console.error("Error adding post:", error);
    throw error;
  }
};
