import React from "react";

interface LayoutProps {
  children: React.ReactElement[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-slate-900">
      {children}
    </div>
  );
};

export default Layout;
