// src/RootLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function RootLayout() {
  return (
    <>
      {/* this is root layout which contains Navbar. This will be called in index.js  */}
      <Navbar />
      <div className="pt-16">
        {/*  i put a div so that any text on any page would affect the navbar  */}
        <Outlet />
      </div>
      {/* //everything else will be rendered inside this Outlet */}
    </>
  );
}

export default RootLayout;
