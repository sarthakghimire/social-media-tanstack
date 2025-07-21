import axios from "axios";

export const addPosts = async (newPost) => {
  try {
    const existing = JSON.parse(localStorage.getItem("posts")) || [];
    const updated = [...existing, newPost];
    localStorage.setItem("posts", JSON.stringify(updated));
    return newPost;
  } catch (error) {
    console.error("Error adding post:", error);
    throw error;
  }
};
