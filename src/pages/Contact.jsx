import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Phone,
  Smartphone,
  MapPin,
  Clock,
  Mail,
  Navigation,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const hoverCard = "transition-transform duration-300 hover:scale-[1.015]";

const Contact = () => {
  const team = [
    {
      name: "Dr Fakhira Noureen",
      role: `MBBS • Ph.D (Scholar)
M.Phil (Chemical Pathology)`,
      image: "https://via.placeholder.com/600x400.png?text=Dr+Fakhira",
    },
    {
      name: "Dr Naheed Saif",
      role: `MBBS • MCPS (Community Medicine) • RMP
Ex. MO Al Mustafa Trust (Shah Pur, Bhara Kahu)
Ex. MO Family Planning Dept Peshawar
Specialist in Infertility & Community Health
Timing: 9:00 AM – 12:00 PM (Mon–Sat)`,
      image: "https://via.placeholder.com/600x400.png?text=Dr+Naheed",
    },
    {
      name: "Dr Ejaz Khan Yousafzai",
      role: `MBBS (SZABMU) Islamabad • RMP
General Physician
Ex-House Officer – CDA Hospital`,
      image: "https://via.placeholder.com/600x400.png?text=Dr+Ejaz",
    },
    {
      name: "Mr Hafeez Abbasi",
      role: `Lab Technologist (Ex A.M.C)
AFIP • CMH • FFH`,
      image: "https://via.placeholder.com/600x400.png?text=Hafeez+Abbasi",
    },
    {
      name: "Ms Aqsa Shafique",
      role: `BS-MLT
Shifa International Hospitals Limited`,
      image: "https://via.placeholder.com/600x400.png?text=Aqsa+Shafique",
    },
    {
      name: "Mr Hamza",
      role: "Receptionist",
      image: "https://via.placeholder.com/600x400.png?text=Hamza",
    },
  ];

  return (
    <main className="relative min-h-screen bg-white">
      <Helmet>
        <title>Contact Us – Mariam Diagnostic Center (MDC)</title>
        <meta
          name="description"
          content="Reach Mariam Diagnostic Center in Bhara Kahu, Islamabad. Call, WhatsApp, get directions, or visit our clinic."
        />
        <meta
          name="keywords"
          content="Mariam Diagnostic Center, MDC, Contact, Bhara Kahu, Islamabad, Ultrasound, Lab, ECG"
        />
        {/* Remove double scrollbars + hide scrollbar (still scrollable) */}
        <style>{`
          html, body { height: 100%; overflow-x: hidden; }
          /* smooth anchor scroll */
          html { scroll-behavior: smooth; }
          /* hide scrollbars cross-browser */
          body { -ms-overflow-style: none; scrollbar-width: none; }
          body::-webkit-scrollbar { width: 0; height: 0; }
          /* ensure sections don't create nested scroll areas */
          main, section { overflow: visible; }
        `}</style>
      </Helmet>

      {/* Soft background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-12%] top-[-12%] h-72 w-72 rounded-full bg-sky-200 blur-3xl opacity-50" />
        <div className="absolute right-[-12%] bottom-[-12%] h-80 w-80 rounded-full bg-cyan-200 blur-3xl opacity-50" />
      </div>

      {/* HERO */}
      <section id="top" className="px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-5xl text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Contact <span className="text-sky-700">MDC</span>
          </h1>
          <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We’re here to help with{" "}
            <strong>Ultrasound, Laboratory Tests, and ECG</strong>. Call,
            WhatsApp, or visit our clinic—our staff will guide you.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://maps.app.goo.gl/7wa3zNbi5DKatsHdA?g_st=com.google.maps.preview.copy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-white font-medium shadow-md hover:bg-sky-700"
              aria-label="Scroll to location & map"
            >
              <Navigation className="mr-2 h-5 w-5" />
              Get Directions
            </a>
            <a
              href="tel:+92512162313"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-gray-900 font-medium shadow-md ring-1 ring-gray-200 hover:bg-gray-50"
              aria-label="Call landline 051 2162313"
            >
              <Phone className="mr-2 h-5 w-5" />
              051 2162313
            </a>
            <a
              href="https://wa.me/923306326321"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-white font-medium shadow-md hover:bg-emerald-700"
              aria-label="Chat on WhatsApp 0330 6326321"
            >
              <Smartphone className="mr-2 h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* QUICK CONTACT CARDS */}
      <section className="px-4 sm:px-6 lg:px-8 pb-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2  lg:grid-cols-[1fr_1fr_1fr_1.3fr]  gap-4"
        >
          <motion.a
            variants={fadeUp}
            href="tel:+92512162313"
            className={`rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 ${hoverCard}`}
          >
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-sky-100 p-3">
                <Phone className="h-6 w-6 text-sky-700" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Landline</p>
                <p className="text-lg font-semibold text-gray-900">
                  051 2162313
                </p>
              </div>
            </div>
          </motion.a>

          <motion.a
            variants={fadeUp}
            href="https://wa.me/923306326321"
            target="_blank"
            rel="noreferrer"
            className={`rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 ${hoverCard}`}
          >
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-emerald-100 p-3">
                <Smartphone className="h-6 w-6 text-emerald-700" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Mobile / WhatsApp</p>
                <p className="text-lg font-semibold text-gray-900">
                  0330 6326321
                </p>
                <p className="text-xs text-gray-500"> 0330 MDCMDC1</p>
              </div>
            </div>
          </motion.a>

          <motion.div
            variants={fadeUp}
            className={`rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 ${hoverCard}`}
          >
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-amber-100 p-3">
                <Clock className="h-6 w-6 text-amber-700" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Doctor Timings</p>
                <p className="text-sm text-gray-900">
                  Female: <strong>9:00 AM – 3:00 PM</strong> (Mon–Sat)
                </p>
                <p className="text-sm text-gray-900">
                  Male: <strong>3:00 PM – 9:00 PM</strong> (Mon–Sat)
                </p>
              </div>
            </div>
          </motion.div>

          <motion.a
            variants={fadeUp}
            href="mailto:official@mdcpakistan.com"
            className={`rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 ${hoverCard}`}
          >
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-blue-100 p-3">
                <Mail className="h-6 w-6 text-blue-700" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-lg font-semibold text-gray-900">
                  official@mdcpakistan.com
                </p>
              </div>
            </div>
          </motion.a>
        </motion.div>
      </section>

      {/* TEAM */}
      <section id="team" className="px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-6xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Our Team
          </h2>
          <p className="mt-3 text-gray-600">
            Experienced clinicians and technologists focused on accurate
            diagnostics and patient care.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto mt-8 grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {team.map((m, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`rounded-3xl bg-white ring-1 ring-gray-200 shadow-sm ${hoverCard}`}
            >
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{m.name}</h3>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-gray-700">
                  {m.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* LOCATION & MAP */}
      <section id="visit" className="px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-6xl"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                Visit Us
              </h2>
              <div className="mt-4 inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sky-800">
                <MapPin className="mr-2 h-5 w-5" />
                Sharjah Plaza, Simly Dam Rd, Bhara Kahu, Islamabad
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center rounded-full bg-white px-4 py-2 font-medium text-gray-900 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50"
                  href="https://maps.google.com/?q=Mariam%20Diagnostic%20Center%20Bhara%20Kahu%20Islamabad"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Navigation className="mr-2 h-5 w-5" />
                  Open in Google Maps
                </a>
                <a
                  className="inline-flex items-center rounded-full bg-white px-4 py-2 font-medium text-gray-900 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50"
                  href="tel:+92512162313"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </div>

              <p className="mt-6 text-gray-600">
                Parking available nearby. Call us if you need help with
                directions.
              </p>
            </div>

            <div className="flex-1 w-full">
              <div className="relative h-72 sm:h-96 overflow-hidden rounded-3xl ring-1 ring-gray-200 shadow-md">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://maps.google.com/maps?q=Mariam%20Diagnostic%20Center%20Bhara%20Kahu%20Islamabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  title="Mariam Diagnostic Center Location"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-6xl"
        >
          <div className="rounded-3xl bg-gradient-to-r from-sky-600 to-cyan-600 p-6 sm:p-8 text-white shadow-md">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-extrabold">
                  Need help right now?
                </h3>
                <p className="text-sky-100 mt-1">
                  Call or WhatsApp—we’ll guide you to the right service.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+92512162313"
                  className="inline-flex items-center rounded-full bg-white px-5 py-3 font-medium text-gray-900 shadow-sm hover:bg-gray-50"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  051 2162313
                </a>
                <a
                  href="https://wa.me/923306326321"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full ring-1 ring-white/40 px-5 py-3 font-medium text-white bg-emerald-600 hover:bg-emerald-700"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Contact;
