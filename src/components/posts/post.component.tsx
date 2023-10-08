import { Visibility } from "../../types/enums.type";
import { ButtonComment } from "../buttons";

export interface Post {
  id: number;
  title: string;
  description: string;
  visibility: Visibility;
  photo?: string;
  createAt: Date;
  updateAt: Date;
  user: {
    username: string;
  };
}

export const Post: React.FC<{ postData: Post }> = ({ postData }) => {
  return (
    <>
      <h3>{postData.user.username}</h3>
      <h3>{postData.title}</h3>
      <p>{postData.description}</p>
      {postData.photo && <img src={postData.photo} />}
      <div>
        <ButtonComment />
      </div>
    </>
  );
};
