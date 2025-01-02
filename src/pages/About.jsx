import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <motion.div
        className="flex items-center justify-center h-screen px-10-10 py-12 m-10 rounded-2xl text-center bg-gradient-to-r from-blue-50 to-blue-100 shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-blue-400 mb-6">
            Why Mariam Diagnostic Center?
          </h1>
          <p className="text-lg mb-6 leading-relaxed text-gray-700">
            Established in 2013, Mariam Diagnostic Center has become a trusted
            name in medical diagnostics. With over a decade of service, we pride
            ourselves on providing accurate results using state-of-the-art
            technology.
          </p>
          <p className="text-lg mb-6 leading-relaxed text-gray-700">
            Our highly qualified and experienced staff ensures every patient
            receives personalized care and attention. From routine tests to
            specialized diagnostics, we are committed to maintaining the highest
            standards of quality and reliability.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            At Mariam Diagnostic Center, we understand the importance of timely
            and precise diagnoses. That’s why we continually invest in modern
            equipment and training to stay ahead in the healthcare industry.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
