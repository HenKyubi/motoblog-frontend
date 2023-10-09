// Libs
import { useState } from "react";
import { Button } from "@material-tailwind/react";

// Components
import { ModalSignIn } from "..";

interface IAppProps {}

export const ButtonSignIn: React.FC<IAppProps> = () => {
  const [modalSignInIsOpen, setModalSignInIsOpen] = useState<boolean>(false);
  return (
    <>
      <ModalSignIn open={modalSignInIsOpen} setOpen={setModalSignInIsOpen} />
      <Button
        size="sm"
        color="blue"
        onClick={() => {
          setModalSignInIsOpen(!modalSignInIsOpen);
        }}
      >
        Sign in
      </Button>
    </>
  );
};
