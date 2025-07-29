import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const fadeInOut = {
  initial: { opacity: 0, filter: "blur(5px)" },
  whileInView: { opacity: 1, filter: "blur(0px)" },
  exit: { opacity: 0, filter: "blur(5px)" },
};

const bloodTests = [
  {
    title: "Complete Blood Count (CBC)",
    description:
      "Analyze red and white blood cells, platelets, hemoglobin, and hematocrit — essential for detecting infections, anemia, and other conditions.",
  },
  {
    title: "Hemoglobin & Hematocrit",
    description:
      "Monitor oxygen-carrying capacity of blood and detect anemia or dehydration.",
  },
  {
    title: "Platelet Count",
    description:
      "Assess blood clotting ability, crucial for surgery prep and bleeding disorders.",
  },
  {
    title: "White Blood Cell Differential",
    description:
      "Identify infections, allergic responses, or immune system irregularities by analyzing WBC types.",
  },
  {
    title: "And More...",
    description:
      "This is only a part of the extensive range of blood tests we offer. Visit Mariam Diagnostic Center or contact us to explore the full list tailored to your healthcare needs.",
  },
];

const BloodCP = () => {
  return (
    <div className="min-h-screen px-4 py-10 md:p-10 m-4 md:m-10 rounded-2xl">
      <Helmet>
        <title>Blood Tests - Mariam Diagnostic Center</title>
        <meta
          name="description"
          content="We provide a wide range of blood tests using the latest hematology analyzers at Mariam Diagnostic Center, Bhara Kahu."
        />
        <meta
          name="keywords"
          content="Blood Test, CBC, Platelet Count, Hemoglobin, Diagnostic Lab, Bhara Kahu"
        />
      </Helmet>

      {/* Hero Section */}
      <motion.div
        className="text-center mb-10 bg-gradient-to-r from-red-100 to-red-200 p-10 rounded-3xl shadow-xl"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-red-900 mb-3">Blood Tests</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          We offer a full range of blood tests using the latest hematology
          analyzer to ensure fast, accurate, and reliable results for patients
          of all ages.
        </p>
      </motion.div>

      {/* Tests List */}
      <div className="space-y-12">
        {bloodTests.map((test, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 p-8 rounded-[60px] bg-white/40 backdrop-blur-sm shadow-md transition duration-500 ${
              index % 2 === 0 ? "md:justify-end" : "md:justify-start"
            }`}
            variants={fadeInOut}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1 }}
          >
            <div className="text-left max-w-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {test.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {test.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Note */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Timings & Location
        </h3>
        <p className="text-md text-gray-600">
          Blood tests are available daily from{" "}
          <strong>9:00 AM to 9:00 PM</strong>
          <br />
          Location: <strong>Bhara Kahu, Islamabad</strong>
        </p>
        <a
          href="https://maps.app.goo.gl/7wa3zNbi5DKatsHdA?g_st=com.google.maps.preview.copy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 underline hover:text-blue-600"
        >
          <b> Mariam Diagnostic Center </b>
        </a>
      </motion.div>
    </div>
  );
};

export default BloodCP;
