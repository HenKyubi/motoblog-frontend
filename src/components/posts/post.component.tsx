// Libs
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

// Types
import { Visibility } from "../../types/enums.type";
import { PostRoute } from "../../types/routes";

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
  const navigate = useNavigate();
  return (
    <div className="max-w-[100vw] md:w-[70%]">
      <Card className="mt-6">
        {postData.photo && (
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </CardHeader>
        )}
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {postData.title}
          </Typography>
          <Typography>{postData.description}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            onClick={() => {
              navigate(`${PostRoute}/${postData.id}`);
            }}
          >
            Read More
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
