import React from "react";
import Sidebar from "./sidebar";

interface LayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-slate-900">
      <Sidebar />
      <main className="flex flex-col h-screen justify-center items-center flex-grow">
        {children}
      </main>
    </div>
  );
};

export default Layout;
