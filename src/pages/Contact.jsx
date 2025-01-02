import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-10 m-10 rounded-2xl">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-blue-400 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700">
            Meet the team at Mariam Diagnostic Center who ensure exceptional
            service.
          </p>
        </motion.div>

        {/* Owner Card */}
        <motion.div
          className="bg-white shadow-lg rounded-xl p-6 mb-10 w-full md:w-1/2 mx-auto text-center hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://via.placeholder.com/150"
            alt=""
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Dr Hafeez</h2>
          <p className="text-gray-600">Owner</p>
          <p className="mt-3 text-gray-700">
            Dedicated to maintaining a welcoming environment and ensuring
            top-notch diagnostic services for all our patients.
          </p>
          <div className="flex items-center justify-center space-x-2">
            <p className=" text-gray-800">Mobile :</p>
            <a
              href="tel:+923121576125"
              className="text-sm text-blue-500 hover:underline"
            >
              +92 312 1576125
            </a>
          </div>
        </motion.div>

        {/* Staff Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Staff Member 1 */}
          <motion.div
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://via.placeholder.com/150"
              alt=""
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800">Ms Aqsa</h2>
            <p className="text-gray-600">BSMLT - Front Desk</p>
            <p className="mt-3 text-gray-700">
              Ready to assist patients with queries and appointments, ensuring a
              seamless experience.
            </p>
          </motion.div>

          {/* Staff Member 2 */}
          <motion.div
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://via.placeholder.com/150"
              alt=""
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800">Mr Abdullah</h2>
            <p className="text-gray-600">Lab Technician</p>
            <p className="mt-3 text-gray-700">
              Expert in handling laboratory tests with precision and accuracy.
            </p>
          </motion.div>

          {/* Staff Member 3 */}
          {/* <motion.div
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://via.placeholder.com/150"
              alt="Staff 3"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800">Maria Iqbal</h2>
            <p className="text-gray-600">Patient Coordinator</p>
            <p className="mt-3 text-gray-700">
              Ensures patients are guided through every step with care and
              empathy.
            </p>
          </motion.div> */}

          {/* Staff Member 4 */}
          {/* <motion.div
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://via.placeholder.com/150"
              alt="Staff 4"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800">Ahmed Raza</h2>
            <p className="text-gray-600">Medical Assistant</p>
            <p className="mt-3 text-gray-700">
              Dedicated to providing prompt assistance to patients and staff
              alike.
            </p>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
