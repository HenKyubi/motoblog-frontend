// Libs
import { useEffect, useState } from "react";

// Components
import { Post } from "../components/posts/post.component";

// Services
import { getPosts } from "../services/getPosts.services";

export const HomePage: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();
      setPosts(data);
    };

    fetchData();
  }, []);
  return (
    // TODO: Scroll for posts
    <div>
      {posts.map((post) => (
        <Post postData={post} />
      ))}
    </div>
  );
};
