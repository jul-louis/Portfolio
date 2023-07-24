import React from "react";

function Blogs() {
  const posts = [
    {
      id: 1,
      title: 'Tokyo, Tokyo',
      content: 'I travelled and lived in Tokyo for a month.',
    },
    {
      id: 2,
      title: 'Graduation',
      content: 'I just graduated from the UofA. Stay tuned for more updates!',
    },
  ];

  return (
    <div className="p-5">
      <h1 className="text-light text-2xl p-2">News</h1>
      <div className="text-xl">
      {posts.map((post) => (
        <div className="p-2" key={post.id}>
          <h2>{post.title}</h2>
          <p className="text-light">{post.content}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Blogs;
