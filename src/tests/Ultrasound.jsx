import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const fadeInOut = {
  initial: { opacity: 0, filter: "blur(5px)" },
  whileInView: { opacity: 1, filter: "blur(0px)" },
  exit: { opacity: 0, filter: "blur(5px)" },
};

const ultrasoundServices = [
  {
    title: "Pelvic Ultrasound",
    description:
      "A detailed scan to assess the uterus, ovaries, fallopian tubes, and bladder. Essential for diagnosing gynecological conditions.",
  },
  {
    title: "Abdominal-Pelvic Ultrasound",
    description:
      "Covers both abdominal and pelvic organs. Useful for evaluating kidneys, liver, uterus, and related structures.",
  },
  {
    title: "Anomaly Scan",
    description:
      "A critical second-trimester pregnancy scan to detect fetal abnormalities and ensure healthy development.",
  },
];

const Ultrasound = () => {
  return (
    <div className="min-h-screen px-4 py-10 md:p-10 m-4 md:m-10 rounded-2xl">
      <Helmet>
        <title>Ultrasound Services - Mariam Diagnostic Center</title>
        <meta
          name="description"
          content="Explore professional ultrasound services at Mariam Diagnostic Center, including pelvic, abdominal and anomaly scans performed by experienced gynecologist."
        />
        <meta
          name="keywords"
          content="Ultrasound, Pelvic Scan, Abdominal Scan, Anomaly Scan, Gynecologist Ultrasound, MDC Bhara Kahu"
        />
      </Helmet>

      {/* Hero Section */}
      <motion.div
        className="text-center mb-10 bg-gradient-to-r from-blue-100 to-blue-200 p-10 rounded-3xl shadow-xl"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-blue-900 mb-3">
          Ultrasound Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          We offer high-resolution ultrasound imaging performed by experienced
          specialists using modern equipment to ensure accurate diagnostics and
          patient comfort.
        </p>
      </motion.div>

      {/* Services List */}
      <div className="space-y-12">
        {ultrasoundServices.map((service, index) => (
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
                {service.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Note */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Timings for Ultrasound Services
        </h3>
        <p className="text-md text-gray-600">
          Performed by <strong>Dr. Naheed Saif</strong> <br />
          Monday to Saturday — <strong>9:00 AM to 12:00 Noon</strong>
        </p>
      </motion.div>
    </div>
  );
};

export default Ultrasound;
