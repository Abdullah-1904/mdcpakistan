import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

const TestAndServices = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Test and Services - Mariam Diagnostic Center</title>
        <meta
          name="description"
          content="Learn more about Mariam Diagnostic Center, a trusted name in diagnostics since 2013."
        />
        <meta
          name="keywords"
          content="Diagnostics, Medical Tests, Healthcare, Best Diagnostic Center"
        />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 text-white py-10 px-4 text-center m-10 rounded-3xl">
        <h1 className="text-4xl font-bold mb-2 text-blue-400">
          Test & Services
        </h1>
        <p className="text-lg text-gray-700">
          Discover the comprehensive range of tests and services we offer to
          ensure your health and wellness.
        </p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto p-6 mt-6 bg-white shadow rounded-lg">
        <p className="text-gray-600 mb-4 text-lg text-center">
          Below is a list of the diagnostic tests and services available at
          Mariam Diagnostic Center. Click on any service to learn more.
        </p>

        {/* Links to sub-routes */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li>
            <Link
              to="blood-test"
              className="block p-4 bg-blue-100 hover:bg-blue-200 rounded-lg shadow-md transition duration-300"
            >
              <h2 className="text-xl font-semibold text-blue-800">
                Blood Test
              </h2>
              <p className="text-sm text-gray-600">
                Get accurate blood test results from our advanced diagnostic
                tools.
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="urine-test"
              className="block p-4 bg-blue-100 hover:bg-blue-200 rounded-lg shadow-md transition duration-300"
            >
              <h2 className="text-xl font-semibold text-blue-800">
                Urine Test
              </h2>
              <p className="text-sm text-gray-600">
                Comprehensive urine testing for health and wellness insights.
              </p>
            </Link>
          </li>
        </ul>

        {/* This is where the sub-page content will render */}
        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default TestAndServices;
