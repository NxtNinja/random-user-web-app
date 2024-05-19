import { ReactNode } from "react";
import Nav from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
