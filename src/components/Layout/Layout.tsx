import { Fragment } from "react";
import MainHeader from "./MainHeader";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
