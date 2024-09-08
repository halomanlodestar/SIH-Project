import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <main className={"container-x container-y"}>{children}</main>;
};

export default Layout;
