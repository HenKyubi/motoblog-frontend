// Libs
import { useContext } from "react";
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
import { toast } from "react-toastify";

// Types
import { IFormLogin } from "../../interfaces/forms.interface";

// Services
import { signIn } from "../../services/signIn.service";

// Context
import { AppContext } from "../../contexts/AppContext";

interface IModalSignIn {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ModalSignIn: React.FC<IModalSignIn> = ({ open, setOpen }) => {
  // Context
  const { setIsLogged, login } = useContext(AppContext);

  // RHF
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>();

  // Handdle submit
  const handleSignIn = (formData: IFormLogin) => {
    const getSessionData = async (formData: IFormLogin) => {
      try {
        await signIn(formData).then((sessionData) => {
          login({ ...sessionData });
          setIsLogged(true);
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        toast.error(`${error?.response?.data?.message || error}`);
      }
    };
    getSessionData(formData);
  };

  return (
    <Dialog
      size="xs"
      open={open}
      handler={setOpen}
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
            label="Username"
            size="lg"
            crossOrigin="undefined"
            type="text"
            {...register("username", {
              required: "Please write your username.",
              pattern: {
                value: /^\S+$/,
                message: "Please write a username valid.",
              },
            })}
          />
          {errors.username?.message}
          <Input
            label="Password"
            size="lg"
            type="password"
            crossOrigin="undefined"
            {...register("password", {
              required: "Please write your password.",
            })}
          />
          {errors.password?.message}

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
        </CardFooter>
      </Card>
    </Dialog>
  );
};
