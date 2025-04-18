// import React from "react";
// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet";

// const backgroundVariants = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1 },
//   exit: { opacity: 0 },
// };

// const fadeInOut = {
//   initial: { opacity: 0, filter: "blur(5px)" },
//   whileInView: { opacity: 1, filter: "blur(0px)" },
//   exit: { opacity: 0, filter: "blur(5px)" },
// };

// const Contact = () => {
//   const teamMembers = [
//     {
//       name: "Dr Fakhira Noureen",
//       role: `MBBS, Ph.D (Sch)
// M.Phil (Chemical Pathologist)`,
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       name: "Dr Naheed Saif",
//       role: `MBBS, MCPS (Community Medicine), RMP
// Ex. Medical Officer Al Mustafa Trust, Shah Pur, Bhara Kahu
// Ex. Medical Officer Family Planning Department Peshawar
// Specialist In Infertility & Community Health
// Timing: 9:00 Morning to 12:00 Noon (Monday to Saturday)`,
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       name: "Mr Hafeez Abbasi",
//       role: `Lab Technologist (Ex A.M.C) A.F.I.P CMH & FFH`,
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       name: "Ms Aqsa",
//       role: "BS-MLT",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       name: "Mr Hamza",
//       role: "Receptionist",
//       image: "https://via.placeholder.com/150",
//     },
//   ];

//   return (
//     <div>
//       <Helmet>
//         <title>Contact Us - Mariam Diagnostic Center</title>
//         <meta
//           name="description"
//           content="Learn more about Mariam Diagnostic Center, a trusted name in diagnostics since 2013."
//         />
//         <meta
//           name="keywords"
//           content="Diagnostics, Medical Tests, Healthcare, Best Diagnostic Center"
//         />
//       </Helmet>

//       <motion.div
//         className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-r from-red-500 to-blue-500"
//         variants={backgroundVariants}
//         initial="initial"
//         animate="animate"
//         exit="exit"
//       />

//       <div className="min-h-screen px-4 py-10 md:p-10 m-4 md:m-10 rounded-2xl">
//         <motion.div
//           className="text-center mb-6"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl font-bold text-white mb-2">Contact Us</h1>
//           <p className="text-lg text-white mt-5">
//             Mariam Diagnostic Center is committed to delivering precise
//             diagnostic solutions, utilizing cutting-edge equipment and highly
//             trained professionals. We prioritize patient comfort and
//             satisfaction, ensuring every individual receives the best care
//             possible.
//           </p>
//         </motion.div>

//         <motion.div
//           className="text-center mb-10"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <h2 className="text-2xl font-semibold text-white">
//             Contact Information
//           </h2>
//           <p className="text-lg text-white mt-2">
//             Landline:{" "}
//             <a href="tel:0512162313" className="underline hover:text-blue-200">
//               051 2162313
//             </a>
//           </p>
//           <p className="text-lg text-white">
//             Mobile:{" "}
//             <a href="tel:03306326321" className="underline hover:text-blue-200">
//               0330 6326321 (MDCMDC1)
//             </a>
//           </p>
//         </motion.div>

//         {/* C-shaped translucent card layout aligned left/right */}
//         <div className="space-y-1">
//           {teamMembers.map((member, index) => (
//             <section
//               key={index}
//               className={`min-h-screen flex ${
//                 index % 2 === 0 ? "justify-end" : "justify-start"
//               } items-center`}
//             >
//               <motion.div
//                 className="relative flex items-center gap-10 p-10 backdrop-blur-md bg-white/30 w-[90%] md:w-[70%] rounded-[80px] shadow-[0_10px_60px_rgba(0,0,0,0.2)] transition-all duration-700 ease-in-out"
//                 variants={fadeInOut}
//                 initial="initial"
//                 whileInView="whileInView"
//                 viewport={{ once: true, amount: 0.6 }}
//                 transition={{ duration: 1 }}
//               >
//                 {/* <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-40 h-40 rounded-lg shadow-lg\"
//                 /> */}
//                 <div className="text-left">
//                   <h2 className="text-3xl font-bold text-gray-900 mb-2">
//                     {member.name}
//                   </h2>
//                   <p className="text-lg text-gray-800 whitespace-pre-line">
//                     {member.role}
//                   </p>
//                 </div>
//               </motion.div>
//             </section>
//           ))}
//         </div>

//         {/* Google Maps Section */}
//         <motion.div
//           className="mt-12"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl font-bold text-white text-center mb-6">
//             Our Location
//           </h2>
//           <div className="w-full mx-auto rounded-xl overflow-hidden shadow-2xl">
//             <iframe
//               src="https://maps.google.com/maps?q=Mariam%20Diagnostic%20Center%20Bhara%20Kahu%20Islamabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
//               width="100%"
//               height="400"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               title="Mariam Diagnostic Center Location"
//             ></iframe>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

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
      name: "Ms Aqsa",
      role: "BS-MLT",
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
        <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-lg text-white max-w-2xl mb-8 leading-relaxed">
          Mariam Diagnostic Center is committed to delivering precise diagnostic
          solutions, utilizing cutting-edge equipment and highly trained
          professionals. We prioritize patient comfort and satisfaction,
          ensuring every individual receives the best care possible.
        </p>

        <h2 className="text-2xl font-semibold text-white mb-4">
          Contact Information
        </h2>
        <p className="text-lg text-white mb-2">
          Landline:{" "}
          <a href="tel:0512162313" className="underline hover:text-blue-600 ">
            051 2162313
          </a>
        </p>
        <p className="text-lg  text-white ">
          Mobile:{" "}
          <a href="tel:03306326321" className=" underline hover:text-blue-600">
            0330 6326321 (MDCMDC1)
          </a>
        </p>

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
                  className="flex items-center gap-8 p-10 bg-white/10 backdrop-blur-md rounded-[80px] shadow-lg w-full md:w-3/4 transition-transform transform hover:scale-[1.02]"
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
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
              Our Location
            </h2>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://maps.google.com/maps?q=Mariam%20Diagnostic%20Center%20Bhara%20Kahu%20Islamabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mariam Diagnostic Center Location"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
