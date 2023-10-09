// Libs
import { Spinner } from "@material-tailwind/react";
import { useState } from "react";
interface ISpinnerProps {}

export const SpinnerScreen: React.FC<ISpinnerProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <div
      className={`bg-[#242424]/50 w-[100vw] h-[100vh] flex justify-center items-center absolute z-[999] top-0 left-0 ${
        !isLoading && "hidden"
      }`}
    >
      <Spinner color="blue" className="h-10 w-10" />
    </div>
  );
};
