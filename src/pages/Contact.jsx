import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us - Mariam Diagnostic Center</title>
        <meta
          name="description"
          content="Learn more about Mariam Diagnostic Center, a trusted name in diagnostics since 2013."
        />
        <meta
          name="keywords"
          content="Diagnostics, Medical Tests, Healthcare, Best Diagnostic Center"
        />
      </Helmet>

      {/* Background with a red-to-blue gradient */}
      <div className="min-h-screen p-10 m-10 rounded-2xl bg-gradient-to-r from-red-500 to-blue-500">
        {/* Page Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-white mb-2">Contact Us</h1>
          {/* <p className="text-lg text-white">
            Meet the team at Mariam Diagnostic Center who ensure exceptional
            service.
          </p> */}
          {/* New Two-Line Professional Detail */}
          <p className="text-lg text-white mt-5">
            Mariam Diagnostic Center is committed to delivering precise
            diagnostic solutions, utilizing cutting-edge equipment and highly
            trained professionals. We prioritize patient comfort and
            satisfaction, ensuring every individual receives the best care
            possible.
          </p>
        </motion.div>

        {/* Contact Information at the Top */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-white">
            Contact Information
          </h2>
          <p className="text-lg text-white mt-2">
            Landline:{" "}
            <a href="tel:0512162313" className="underline hover:text-blue-200">
              051 2162313
            </a>
          </p>
          <p className="text-lg text-white">
            Mobile:{" "}
            <a href="tel:03306326321" className="underline hover:text-blue-200">
              0330 6326321 (MDCMDC1)
            </a>
          </p>
        </motion.div>

        {/* First Row: 3 Cards in a Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* New Card: Dr Fakhira MBBS */}
          <motion.div
            className="bg-white shadow-2xl rounded-xl p-4 text-center hover:shadow-3xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://via.placeholder.com/150"
              // alt="Dr Fakhira"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800">
              Dr Fakhira Noureen
            </h2>
            <p className="text-gray-600">
              MBBS, Ph.D (Sch) <br /> M.Phil (Chemical Pathologist)
            </p>
          </motion.div>

          {/* Lab Technician Card */}
          <motion.div
            className="bg-white shadow-2xl rounded-xl p-4 text-center hover:shadow-3xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://via.placeholder.com/150"
              // alt="Lab Technician"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800">
              Mr Hafeez Abbasi
            </h2>
            <p className="text-gray-600">
              Lab Technologist (Ex A.M.C)
              <br />
              A.F.I.P CMH & FFH
            </p>
          </motion.div>

          {/* Staff Member Card */}
          <motion.div
            className="bg-white shadow-2xl rounded-xl p-4 text-center hover:shadow-3xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://via.placeholder.com/150"
              // alt="Staff Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800">Ms Aqsa</h2>
            <p className="text-gray-600">BS-MLT</p>
          </motion.div>
        </div>

        {/* Second Row: Mr Hamza Card Centered */}
        <div className="mt-8 flex justify-center">
          <motion.div
            className="bg-white shadow-2xl rounded-xl p-4 text-center hover:shadow-3xl transition-shadow duration-300 w-full md:w-1/3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://via.placeholder.com/150"
              // alt="Mr Hamza"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800">Mr Hamza</h2>
            <p className="text-gray-600">Receptionist</p>
          </motion.div>
        </div>

        {/* Google Maps Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Our Location
          </h2>
          <div className="w-full mx-auto rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://maps.google.com/maps?q=Mariam%20Diagnostic%20Center%20Bhara%20Kahu%20Islamabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Mariam Diagnostic Center Location"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
