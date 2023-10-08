// import { Layout } from "../components/layout/layout.component";

import { Post } from "../components/posts/post.component";

export const HomePage: React.FC<{ posts?: Post[] }> = () => {
  return (
    // TODO: Scroll for posts
    <div>
      {/* {posts.map((post) => (
        <Post {...post} />
      ))} */}
      posts
    </div>
  );
};
