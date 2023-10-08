// Libs
import { useEffect, useState } from "react";

// Components
import { Post } from "../components/posts/post.component";

// Services
import { getPosts } from "../services/getPosts.services";
import { HeroHome } from "../components/heros/heroHome.component";

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
    <>
      <HeroHome />
      <div>
        {posts.map((post) => (
          <Post postData={post} />
        ))}
      </div>
    </>
  );
};
