import axios from "axios";

export const addPosts = async (newPost) => {
  try {
    const response = await axios.post(BASE_URL, newPost);
    return response.data;
  } catch (error) {
    console.error("Error adding post:", error);
    throw error;
  }
};
