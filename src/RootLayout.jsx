// src/RootLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// function RootLayout() {
//   return (
//     <>
//       {/* this is root layout which contains Navbar. This will be called in index.js  */}
//       <Navbar />
//       <main className="pt-16">
//         {/*  i put a div so that any text on any page would affect the navbar  */}
//         <Outlet />
//       </main>
//       {/* //everything else will be rendered inside this Outlet */}
//       <div className="mt-5">
//         <Footer />
//       </div>
//     </>
//   );
// }
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
