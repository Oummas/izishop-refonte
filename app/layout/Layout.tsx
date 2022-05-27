import { Outlet } from "@remix-run/react";
import React from "react";

export const Layout = () => {
  return (
    <>
      <main className="w-screen ">
        <Outlet />
      </main>
    </>
  );
};
