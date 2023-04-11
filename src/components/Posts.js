import React, { useEffect, useState } from 'react';

const Posts = () => {
  const[posts, setPosts] = useState([])

  useEffect(() => { 
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      setPosts(data)
      // console.log(data)
    })
  }, [])
  return (
    <div>
      <h1>POSTS</h1>
       {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>

        </div>
       ))}
    </div>
  );
};

export default Posts;