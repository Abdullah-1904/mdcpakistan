import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Droplet, FlaskConical, HeartPulse, Radio } from "lucide-react";

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
              className="block p-4 bg-gradient-to-r from-red-100 to-red-200 hover:from-red-200 hover:to-red-300 rounded-lg shadow-md transition duration-300"
            >
              <div className="flex items-center gap-4">
                <Droplet className="h-8 w-8 text-gray-800" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Blood Test
                  </h2>
                  <p className="text-sm text-gray-700">
                    Get accurate blood test results from our latest diagnostic
                    tools.
                  </p>
                </div>
              </div>
            </Link>
          </li>

          <li>
            <Link
              to="special-chemistry"
              className="block p-4 bg-yellow-100 hover:bg-yellow-200 rounded-lg shadow-md transition duration-300"
            >
              <div className="flex items-center gap-4">
                <FlaskConical className="h-8 w-8 text-gray-800" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Chemistry / Special Chemistry
                  </h2>
                  <p className="text-sm text-gray-700">
                    A wide range of chemical and hormonal tests including
                    glucose, liver, thyroid, CRP, and more.
                  </p>
                </div>
              </div>
            </Link>
          </li>

          <li>
            <Link
              to="ultrasound"
              className="block p-4 bg-blue-100 hover:bg-blue-200 rounded-lg shadow-md transition duration-300"
            >
              <div className="flex items-center gap-4">
                <Radio className="h-8 w-8 text-gray-800" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Ultrasound
                  </h2>
                  <p className="text-sm text-gray-700">
                    High-resolution ultrasound for accurate diagnosis.
                  </p>
                </div>
              </div>
            </Link>
          </li>

          <li>
            <Link
              to="ecg"
              className="block p-4 bg-green-100 hover:bg-green-200 rounded-lg shadow-md transition duration-300"
            >
              <div className="flex items-center gap-4">
                <HeartPulse className="h-8 w-8 text-gray-800" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">ECG</h2>
                  <p className="text-sm text-gray-700">
                    Electrocardiogram testing for heart monitoring.
                  </p>
                </div>
              </div>
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
