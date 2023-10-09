// Libs
import { useEffect, useState, useContext } from "react";

// Components
import { HeroHome, Layout, Post } from "../components";

// Services
import { getPosts } from "../services/getPosts.services";

// Context
import { AppContext } from "../contexts/AppContext";

interface IPostList {
  posts: Post[];
}
const PostList: React.FC<IPostList> = ({ posts }) => {
  return (
    <div className="flex flex-col items-center px-8 py-5 space-y-10">
      {posts.map((post: Post, idx) => (
        <Post postData={post} key={idx} />
      ))}
    </div>
  );
};

export const HomePage: React.FC = () => {
  const {appState} = useContext(AppContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();
      setPosts(data);
    };

    fetchData();
  }, [appState.isLogged]);
  return (
    <Layout>
      <HeroHome />
      <PostList posts={posts} />
    </Layout>
  );
};
