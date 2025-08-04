import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.05 },
};
const jobOpenings = [
  {
    title: "Medical Officer (MBBS)",
    description:
      "We are hiring a Medical Officer with experience in ultrasound and gynecology OPD.",
    timing: "Monday to Saturday, 9:00 AM – 2:00 PM",
    location: "Bhara Kahu, Islamabad",
  },
  {
    title: "Receptionist",
    description:
      "Looking for a friendly and organized front desk receptionist to manage patient flow and appointments.",
    timing: "Rotational shifts",
    location: "Bhara Kahu, Islamabad",
  },
];

const Careers = () => {
  return (
    <div>
      <div className="bg-gray-50 min-h-screen px-6 py-12 text-gray-800">
        <div className="max-w-5xl mx-auto">
          <header className="text-center">
            <h1 className="text-4xl font-bold text-red-700 mb-10">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Careers at Mariam Diagnostic Center")
                    .callFunction(() => {
                      document.querySelector(
                        ".Typewriter__cursor"
                      ).style.display = "none";
                    })
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: false,
                  delay: 70,
                  deleteSpeed: 0,
                }}
              />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-lg text-gray-600 mb-10"
            >
              Join our team of dedicated professionals committed to delivering
              quality healthcare in Bhara Kahu, Islamabad.
            </motion.p>
          </header>

          {/* Job Openings */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">
              Current Openings
            </h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md p-6 rounded-lg border border-red-200"
                >
                  <h3 className="text-xl font-bold text-red-700 mb-2">
                    {job.title}
                  </h3>
                  <p className="mb-2">{job.description}</p>
                  <p className="text-sm text-gray-600">Timing: {job.timing}</p>
                  <p className="text-sm text-gray-600">
                    Location: {job.location}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Apply Section */}
          <section className="bg-white border border-blue-200 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">
              Apply by Sending Your CV Through Email or WhatsApp
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              {/* Gmail Card */}
              <a
                href="mailto:official@mdcpakistan.com"
                className="w-full md:w-1/3 bg-gray-50 border border-gray-300 hover:border-blue-500 hover:shadow-md rounded-xl p-6 transition duration-300 ease-in-out text-center"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
                  alt="Gmail"
                  className="w-12 h-12 mx-auto mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  Apply via Gmail
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  official@mdcpakistan.com
                </p>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/923121576125"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-1/3 bg-gray-50 border border-gray-300 hover:border-green-500 hover:shadow-md rounded-xl p-6 transition duration-300 ease-in-out text-center"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-12 h-12 mx-auto mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  Apply via WhatsApp
                </h3>
                <p className="text-sm text-gray-600 mt-1">0312-1576125</p>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Careers;
