import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const fadeInOut = {
  initial: { opacity: 0, filter: "blur(5px)" },
  whileInView: { opacity: 1, filter: "blur(0px)" },
  exit: { opacity: 0, filter: "blur(5px)" },
};

const specialChemistryTests = [
  {
    title: "Anti Cardiolipin",
    description:
      "Used to detect antibodies associated with autoimmune disorders, particularly antiphospholipid syndrome.",
  },
  {
    title: "Anti Cardiolipin Elisa",
    description:
      "A more sensitive method for detecting and quantifying anti-cardiolipin antibodies in the blood.",
  },
  {
    title: "Anti CCP",
    description:
      "Assists in diagnosing rheumatoid arthritis by detecting anti-cyclic citrullinated peptide antibodies.",
  },
  {
    title: "Ferritin",
    description:
      "Measures iron stores in the body; important for diagnosing iron deficiency or overload.",
  },
  {
    title: "FSH, LH, Prolactin",
    description:
      "A hormone panel to evaluate fertility and pituitary gland function in males and females.",
  },
  {
    title: "HbA1C",
    description:
      "Shows average blood sugar over the past 2–3 months; critical for managing and diagnosing diabetes.",
  },
  {
    title: "Hormone Profile (FSH, LH, Prolactin)",
    description:
      "Evaluates hormonal balance related to reproductive and menstrual health.",
  },
  {
    title: "Hormone Profile (FSH, LH, Prolactin, Testosterone)",
    description:
      "An extended profile that includes testosterone, useful in evaluating both male and female hormonal disorders.",
  },
  {
    title: "Thyroid Profile",
    description:
      "Includes T3, T4, and TSH levels to diagnose thyroid disorders like hypothyroidism or hyperthyroidism.",
  },
  {
    title: "Vitamin D3",
    description:
      "Measures vitamin D levels in the body; essential for healthy bones, immune function, and overall well-being.",
  },
  {
    title: "And More...",
    description:
      "This is just a glimpse of our Special Chemistry capabilities. Contact us or visit MDC for a complete list of tests available.",
  },
];

const SpecialChemistry = () => {
  return (
    <div className="min-h-screen px-4 py-10 md:p-10 m-4 md:m-10 rounded-2xl">
      <Helmet>
        <title>Special Chemistry Tests - Mariam Diagnostic Center</title>
        <meta
          name="description"
          content="Explore Special Chemistry lab tests offered at Mariam Diagnostic Center including hormones, autoimmune markers, thyroid profile, and more."
        />
        <meta
          name="keywords"
          content="Special Chemistry, Hormone Tests, Anti CCP, Vitamin D3, Thyroid Profile, MDC Bhara Kahu"
        />
      </Helmet>

      {/* Hero Section */}
      <motion.div
        className="text-center mb-10 bg-gradient-to-r from-yellow-100 to-yellow-200 p-10 rounded-3xl shadow-xl"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-yellow-900 mb-3">
          Special Chemistry Tests
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Our advanced Special Chemistry tests cover hormone levels, autoimmune
          markers, and metabolic conditions with high-accuracy results from
          experienced lab specialists.
        </p>
      </motion.div>

      {/* Tests List */}
      <div className="space-y-12">
        {specialChemistryTests.map((test, index) => (
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
          Special Chemistry tests are available daily from{" "}
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
          <b>Mariam Diagnostic Center</b>
        </a>
      </motion.div>
    </div>
  );
};

export default SpecialChemistry;
