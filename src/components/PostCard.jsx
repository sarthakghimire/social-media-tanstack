import React, { useState } from "react";

const PostCard = ({
  username,
  profile_picture,
  caption,
  photo,
  time_posted,
  comments = [],
}) => {
  const [likes, setLikes] = useState(0);
  const [newComment, setNewComment] = useState("");
  const [allComments, setAllComments] = useState(comments);

  const handleLike = () => setLikes(likes == 1 ? 0 : 1);

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const commentToAdd = {
      username: "you",
      profile_picture,
      text: newComment,
    };

    setAllComments([...allComments, commentToAdd]);
    setNewComment("");
  };

  const formattedTime = new Date(time_posted).toLocaleString();

  return (
    <div className="flex justify-center mt-3 mb-6">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        <div className="flex items-center gap-3 p-4">
          <img
            src={profile_picture}
            alt={username}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{username}</p>
            <p className="text-xs text-gray-500">{formattedTime}</p>
          </div>
        </div>

        <img src={photo} alt="Post" className="w-full h-auto" />

        <div className="px-4 py-2">
          <p className="text-gray-800">{caption}</p>
        </div>

        <div className="flex items-center justify-between px-4 py-2 border-t border-gray-100">
          <button
            onClick={handleLike}
            className="text-red-500 hover:text-red-600"
          >
            ❤️ Like ({likes})
          </button>
          <button
            onClick={handleAddComment}
            className="text-blue-500 hover:text-blue-600"
          >
            💬 Add Comment
          </button>
          <button className="text-gray-500 hover:text-gray-600">
            📤 Share
          </button>
        </div>

        <div className="px-4 py-2">
          <input
            type="text"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none"
          />
        </div>

        {allComments.length > 0 && (
          <div className="px-4 pt-2 pb-4">
            <p className="text-sm font-semibold mb-1">Comments:</p>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {allComments.map((cmt) => (
                <div key={cmt.id} className="flex items-start gap-2 text-sm">
                  <img
                    src={cmt.profile_picture}
                    alt={cmt.username}
                    className="w-6 h-6 rounded-full"
                  />
                  <div>
                    <span className="font-medium">{cmt.username}</span>:{" "}
                    {cmt.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
