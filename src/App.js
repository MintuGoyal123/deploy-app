import React, { useEffect, useState } from "react";
import axios from "axios";
import "./app.css"; // Import CSS for styling

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container">
      <h2>Posts</h2>
      <div className="grid">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
    </div>
  );
};

export default App;
