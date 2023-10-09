// Libs
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@material-tailwind/react";

// Types
import { HomeRoute } from "../../types/routes";

// Icons
import { FaMotorcycle } from "react-icons/fa6";

// Components
import { ButtonSignIn, ButtonRegister, ButtonProfileNavbar } from "..";

// Context
import { AppContext } from "../../contexts/AppContext";

export const NavbarHome = () => {
  const { isLogged } = useContext(AppContext).appState;
  return (
    <Navbar
      className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6 fixed z-[2]"
      style={{ borderRadius: "0px 0px 4px 4px" }}
    >
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <FaMotorcycle className={"text-[2em]"} />
        <Link
          to={HomeRoute}
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          MotoBlog
        </Link>
        <div className="w-full flex justify-end">
          {isLogged ? (
            <ButtonProfileNavbar />
          ) : (
            <div className="flex space-x-2">
              <ButtonRegister />
              <ButtonSignIn />
            </div>
          )}
        </div>
      </div>
    </Navbar>
  );
};
