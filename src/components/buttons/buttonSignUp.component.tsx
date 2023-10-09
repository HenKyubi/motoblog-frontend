// Libs
import { useState } from "react";
import { Button } from "@material-tailwind/react";

// Components
import { ModalSignUp } from "..";

interface IAppProps {}

export const ButtonRegister: React.FC<IAppProps> = () => {
  const [modalSignUpIsOpen, setModalSignUpIsOpen] = useState<boolean>(false);

  return (
    <>
      <ModalSignUp open={modalSignUpIsOpen} setOpen={setModalSignUpIsOpen} />

      <Button
        size="sm"
        color="blue-gray"
        onClick={() => {
          setModalSignUpIsOpen(!modalSignUpIsOpen);
        }}
      >
        Sign up
      </Button>
    </>
  );
};
