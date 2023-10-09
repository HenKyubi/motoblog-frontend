import { NavbarHome } from "..";

interface ILayout {
  children: JSX.Element | JSX.Element[];
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="w-[100vw] max-w-[100vw] overflow-x-hidden max-w-screen-xl mx-auto">
      <NavbarHome />

      {children}
    </div>
  );
};
