import { Outlet } from "@remix-run/react";
import React from "react";

export const Layout = () => {
  return (
    <>
      <div className="flex w-full justify-center sticky top-0 h-10 bg-red-100">
        Header
      </div>
      <main className="w-screen ">
        <Outlet />
      </main>
      <footer>Footer Copyright © {new Date().getFullYear()}</footer>
    </>
  );
};
