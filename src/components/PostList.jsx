import React from "react";
import PostCard from "./PostCard";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/fetchPosts";

const PostList = () => {
  const { data, isError, error, isLoading } = useQuery({
    queryFn: fetchPosts,
    queryKey: ["posts"],
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error:{error}</p>;
  }
  return (
    <div>
      {data.slice(0, 5).map((post) => (
        <PostCard
          key={post.id}
          username={post.username}
          profile_picture={post.profile_picture}
          caption={post.caption}
          photo={post.photo}
          time_posted={post.time_posted}
          comments={post.comments}
        />
      ))}
    </div>
  );
};

export default PostList;
