// Libs
import {
  Dialog,
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";

// Types
import { IFormSignUp } from "../../interfaces/forms.interface";

interface IModalSignUp {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalSignUp: React.FC<IModalSignUp> = ({ open, setOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormSignUp>();

  const handleSignUp = (data: IFormSignUp) => {
    console.log(data);
    setOpen((cur: boolean) => !cur);
  };
  return (
    <Dialog
      size="xs"
      open={open}
      handler={handleSignUp}
      className="bg-transparent shadow-none"
    >
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Name"
              type="text"
              crossOrigin={undefined}
              {...register("firstName", {
                required: true,
              })}
            />
            {errors.firstName?.message && <p>{errors.firstName?.message}</p>}
            <Input
              size="lg"
              label="Last name"
              type="text"
              crossOrigin={undefined}
              {...register("lastName", {
                required: "Please write your  first name.",
              })}
            />
            <Input
              size="lg"
              label="Email"
              crossOrigin={undefined}
              {...register("username", {
                required: "Please write your email.",
              })}
            />
          </div>
          <Checkbox
            crossOrigin={undefined}
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button
            className="mt-6"
            fullWidth
            onClick={handleSubmit(handleSignUp)}
          >
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    </Dialog>
  );
};
