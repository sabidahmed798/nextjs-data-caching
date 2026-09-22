import React from "react";

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const PostPage = async () => {
  const posts = await getPosts();
  console.log(posts);

  return (
    <div>
      <h2>hellow Post: {posts.length}</h2>
    </div>
  );
};

export default PostPage;
