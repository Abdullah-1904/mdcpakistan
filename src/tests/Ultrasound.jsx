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
    title: "Abdomen Ultrasound",
    description:
      "A scan to evaluate abdominal organs like the liver, gallbladder, pancreas, kidneys, and spleen. Useful in detecting stones, cysts, and inflammation.",
  },
  {
    title: "Anomaly Scan",
    description:
      "A detailed second-trimester pregnancy scan that helps detect structural abnormalities in the fetus. Essential for prenatal diagnosis.",
  },
  {
    title: "Female Abdominal Ultrasound",
    description:
      "Used to evaluate the lower abdominal area in females, especially for gynecological and bladder-related conditions.",
  },
  {
    title: "Fetal Wellbeing (FWB)",
    description:
      "Checks the baby's heartbeat, movements, amniotic fluid, and overall health in the later stages of pregnancy.",
  },
  {
    title: "KUB + Prostate + Abdomen",
    description:
      "A comprehensive scan for kidneys, urinary bladder, prostate, and abdominal organs. Helps diagnose urinary and abdominal disorders in males.",
  },
  {
    title: "KUB Female",
    description:
      "Ultrasound of kidneys, ureters, and bladder in females. Useful for evaluating infections, stones, and bladder function.",
  },
  {
    title: "Pelvic Ultrasound",
    description:
      "Focuses on female reproductive organs including uterus, ovaries, and fallopian tubes. Commonly used for fertility and menstrual issues.",
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

export default Ultrasound;
