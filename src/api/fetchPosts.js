import axios from "axios";

const BASE_URL = "https://mocki.io/v1/fffa08fc-b13b-4b17-b299-73b2851e246e";

export const fetchPosts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
