import { ReactNode } from "react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import styles from "./index.module.scss";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main className={styles.layoutContent}>{children}</main>
      <Footer />
    </div>
  );
};
