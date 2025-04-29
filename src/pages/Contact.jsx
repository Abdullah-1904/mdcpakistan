import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
// import { Phone, Smartphone } from "lucide-react";
import { Phone, Smartphone, MapPin } from "lucide-react";
const fadeInOut = {
  initial: { opacity: 0, filter: "blur(5px)" },
  whileInView: { opacity: 1, filter: "blur(0px)" },
  exit: { opacity: 0, filter: "blur(5px)" },
};

const Contact = () => {
  const teamMembers = [
    {
      name: "Dr Fakhira Noureen",
      role: `MBBS, Ph.D (Sch)
M.Phil (Chemical Pathologist)`,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Dr Naheed Saif",
      role: `MBBS, MCPS (Community Medicine), RMP
Ex. Medical Officer Al Mustafa Trust, Shah Pur, Bhara Kahu
Ex. Medical Officer Family Planning Department Peshawar
Specialist In Infertility & Community Health
Timing: 9:00 Morning to 12:00 Noon (Mon–Sat)`,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Mr Hafeez Abbasi",
      role: `Lab Technologist (Ex A.M.C) A.F.I.P CMH & FFH`,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Ms Aqsa Shafique",
      role: `BS-MLT 
      Shifa International Hospitals Limited`,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Mr Hamza",
      role: "Receptionist",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Contact Us – Mariam Diagnostic Center</title>
        <meta
          name="description"
          content="Learn more about Mariam Diagnostic Center, a trusted name in diagnostics since 2013."
        />
        <meta
          name="keywords"
          content="Diagnostics, Medical Tests, Healthcare, Best Diagnostic Center"
        />
      </Helmet>

      {/* Hero section with padding and side spaces */}
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen px-10 py-12 m-10 rounded-2xl text-center bg-gradient-to-r from-red-400 to-blue-400 shadow-xl "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-extrabold text-black mb-4">Contact Us</h1>
        <p className="text-lg text-black max-w-3xl mb-8 leading-relaxed">
          Mariam Diagnostic Center is committed to delivering precise diagnostic
          solutions, utilizing cutting-edge equipment and highly trained
          professionals. We prioritize patient comfort and satisfaction,
          ensuring every individual receives the best care possible.
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-center gap-6 mb-10">
          <a
            href="tel:0512162313"
            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-black font-medium py-3 px-6 rounded-full transition"
          >
            <Phone className="w-5 h-5" />
            051 2162313
          </a>
          <a
            href="tel:03306326321"
            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-black font-medium py-3 px-6 rounded-full transition"
          >
            <Smartphone className="w-5 h-5" />
            0330 6326321 (MDCMDC1)
          </a>
        </div>
        <h1 className="text-5xl font-extrabold text-black mb-4">Our Team</h1>

        {/* Team Members Section */}
        <div className="container mx-auto max-w-7xl px-6 py-12">
          <div className="space-y-12">
            {teamMembers.map((member, idx) => (
              <section
                key={idx}
                className={`flex items-center ${
                  idx % 2 === 0 ? "justify-end" : "justify-start"
                }`}
              >
                <motion.div
                  className="flex items-center gap-8 p-10 bg-white/10 backdrop-blur-md rounded-[80px] shadow-xl w-full md:w-3/4 transition-transform transform hover:scale-[1.02]"
                  variants={fadeInOut}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1 }}
                >
                  <div className="text-gray-900">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="whitespace-pre-line leading-relaxed">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              </section>
            ))}
          </div>

          {/* Google Maps Section */}
          <motion.section
            className="flex flex-col items-center justify-center px-4 py-8 sm:px-8 sm:py-12 mx-auto max-w-7xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-6">
              Visit Us
            </h2>

            <div className="flex items-center bg-blue-100 rounded-full px-5 py-2 mb-8 text-blue-700 text-sm sm:text-base">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              Sharjah Plaza, Simly Dam Rd, Bhara Kahu, Islamabad
            </div>

            <div className="w-full px-4 sm:px-0">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-300 w-full h-64 sm:h-96">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://maps.google.com/maps?q=Mariam%20Diagnostic%20Center%20Bhara%20Kahu%20Islamabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Mariam Diagnostic Center Location"
                />
              </div>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
