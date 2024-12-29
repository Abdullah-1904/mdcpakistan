import React from "react";
import { Link, Outlet } from "react-router-dom";

const TestAndServices = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Test & Services</h1>
      <p>This page holds links to different tests/services we offer.</p>

      {/* Links to sub-routes */}
      <ul className="my-4 space-y-2">
        <li>
          <Link to="blood-test" className="text-blue-500 hover:text-blue-700">
            Blood Test
          </Link>
        </li>
        <li>
          <Link to="urine-test" className="text-blue-500 hover:text-blue-700">
            Urine Test
          </Link>
        </li>
      </ul>

      {/* This is where the sub-page content will render */}
      <Outlet />
    </div>
  );
};

export default TestAndServices;
