import { ReactNode } from "react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import "./index.scss";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout-container">
      <Header />
      <main className="layout-content">{children}</main>
      <Footer />
    </div>
  );
};
