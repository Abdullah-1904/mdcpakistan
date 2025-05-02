import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { HashRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./RootLayout";

import App from "./App";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TestAndServices from "./pages/TestAndServices";
import BloodCP from "./tests/BloodCP";
import SpecialChemistry from "./tests/SpecialChemistry";
import ErrorPage from "./pages/ErrorPage";
import Ultrasound from "./tests/Ultrasound";
import ECG from "./tests/ECG";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test-and-services" element={<TestAndServices />} />
          <Route path="/test-and-services/blood-test" element={<BloodCP />} />
          <Route
            path="/test-and-services/special-chemistry"
            element={<SpecialChemistry />}
          />
          <Route
            path="/test-and-services/ultrasound"
            element={<Ultrasound />}
          />
          <Route path="/test-and-services/ecg" element={<ECG />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </RootLayout>
    </HashRouter>
  </React.StrictMode>
);
