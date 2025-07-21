import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPosts } from "./../api/addPosts";

const AddPost = () => {
  const [form, setForm] = useState({
    username: "",
    profile_picture: "",
    caption: "",
    photo: "",
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addPosts,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
      setForm({
        username: "",
        profile_picture: "",
        caption: "",
        photo: "",
      });
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      ...form,
      time_posted: new Date().toISOString(),
      comments: [],
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-6 p-4 border rounded-lg shadow-md space-y-3"
    >
      <h2 className="text-lg font-semibold text-center">Add New Post</h2>

      <input
        name="username"
        placeholder="Your name"
        value={form.username}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        name="profile_picture"
        placeholder="Profile picture URL"
        value={form.profile_picture}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        name="photo"
        placeholder="Post image URL"
        value={form.photo}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <textarea
        name="caption"
        placeholder="What's on your mind?"
        value={form.caption}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        rows={3}
        required
      />

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
      >
        {mutation.isPending ? "Posting..." : "Post"}
      </button>

      {mutation.isError && (
        <p className="text-red-500 text-sm">Failed to add post.</p>
      )}
      {mutation.isSuccess && (
        <p className="text-green-600 text-sm">Post added successfully!</p>
      )}
    </form>
  );
};

export default AddPost;
