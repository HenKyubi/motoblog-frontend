import { Navbar } from "..";

export const Layout: React.FC<{ children: JSX.Element | JSX.Element[] }> = (
  children
) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
