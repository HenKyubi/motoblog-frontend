// Libs
import { useForm } from "react-hook-form";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

// Types
import { IFormLogin } from "../../interfaces/forms.interface";

interface IModalSignIn {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ModalSignIn: React.FC<IModalSignIn> = ({ open, setOpen }) => {
  const handleSignIn = (data: IFormLogin) => {
    console.log(data);
    setOpen((cur: boolean) => !cur);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>();

  return (
    <>
      <Dialog
        size="xs"
        open={open}
        handler={handleSignIn}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              label="Email"
              size="lg"
              crossOrigin="undefined"
              {...register("email")}
            />
            {errors.email?.message}
            <Input
              label="Password"
              size="lg"
              crossOrigin="undefined"
              {...register("password")}
            />
            <div className="-ml-2.5">
              <Checkbox
                label="Remember Me"
                crossOrigin="undefined"
                {...register("rememberMe")}
              />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              onClick={handleSubmit(handleSignIn)}
              fullWidth
            >
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue"
                className="ml-1 font-bold"
                onClick={() => {}}
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};
