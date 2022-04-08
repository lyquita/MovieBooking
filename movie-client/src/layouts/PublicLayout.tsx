import React, { ReactNode } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

interface Props {
  children: ReactNode;
  withFooter?: boolean;
}

const PublicLayout: React.FC<Props> = (props) => {
  const { children, withFooter = true } = props;

  return (
    <div>
      <Nav />
      {children}
      {withFooter ? <Footer /> : ""}
    </div>
  );
};

export default PublicLayout;
