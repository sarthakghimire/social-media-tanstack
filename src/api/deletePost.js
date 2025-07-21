import axios from "axios";

export const addPosts = async (id) => {
  try {
    const response = await axios.delete(BASE_URL, id);
    return response.data;
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
};
