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
  ShieldCheck,
  HeartPulse,
  Users,
} from "lucide-react";

/**
 * MDC — Contact Page (Distinct Split-Layout Redesign)
 *
 * Visual direction
 *  - Asymmetric split hero with a live map card on the right
 *  - Vertical action stack (Directions / WhatsApp / Call)
 *  - Single sleek Contact & Hours panel (list layout)
 *  - Discreet trust strip; optional team collapsed by default
 *  - Accessible sizes and names; lazy-loaded map
 */

// ---------- Animation helpers ----------
const fadeUp = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut" },
  },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

// ---------- Centralized contact config ----------
const CONTACT = {
  landlineDisplay: "051 2162313",
  landlineHref: "tel:+92512162313",
  mobileDisplay: "0330 6326321",
  waIntl: "923306326321", // wa.me format: no plus or spaces
  email: "official@mdcpakistan.com",
  address: "Sharjah Plaza, Simly Dam Rd, Bhara Kahu, Islamabad",
  mapsUrl:
    "https://maps.app.goo.gl/7wa3zNbi5DKatsHdA?g_st=com.google.maps.preview.copy",
  mapsEmbed:
    "https://maps.google.com/maps?q=Mariam%20Diagnostic%20Center%20Bhara%20Kahu%20Islamabad&t=&z=15&ie=UTF8&iwloc=&output=embed",
  hoursFemale: "9:00 AM – 3:00 PM (Mon–Sat)",
  hoursMale: "3:00 PM – 9:00 PM (Mon–Sat)",
};
const waLink = (text) =>
  `https://wa.me/${CONTACT.waIntl}?text=${encodeURIComponent(
    text || "Assalam o Alaikum, I have an inquiry for MDC."
  )}`;

// ---------- Small UI atoms ----------
const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-3xl border border-slate-200 bg-white/90 shadow-sm ${className}`}
  >
    {children}
  </div>
);
const CardBody = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);
const Action = ({ href, children, tone = "blue", ariaLabel }) => {
  const tones = {
    blue: "bg-blue-700 hover:bg-blue-800 focus:ring-blue-700 text-white border-transparent",
    green:
      "bg-green-600 hover:bg-green-700 focus:ring-green-600 text-white border-transparent",
    white:
      "bg-white hover:bg-slate-50 border-slate-200 text-slate-900 ring-1 ring-slate-200",
  };
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${tones[tone]}`}
    >
      {children}
    </a>
  );
};

// ---------- Team (optional) ----------
const TEAM = [
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
];

export default function Contact() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      <Helmet>
        <title>Contact Us – Mariam Diagnostic Center (MDC)</title>
        <meta
          name="description"
          content="Reach MDC in Bhara Kahu, Islamabad. Call, WhatsApp, email, check timings, or open directions."
        />
        <style>{`html{scroll-behavior:smooth}`}</style>
        {/* Structured data: DiagnosticLab */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DiagnosticLab",
              name: "Mariam Diagnostic Center (MDC)",
              email: CONTACT.email,
              telephone: CONTACT.landlineDisplay,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sharjah Plaza, Simly Dam Rd",
                addressLocality: "Bhara Kahu",
                addressRegion: "Islamabad Capital Territory",
                addressCountry: "PK",
              },
              openingHours: ["Mo-Sa 09:00-21:00"],
              url: CONTACT.mapsUrl,
            }),
          }}
        />
      </Helmet>

      {/* Subtle brand glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-56 bg-gradient-to-r from-red-600 via-red-500 to-blue-700 opacity-10" />

      {/* SPLIT HERO */}
      <section className="px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 md:grid-cols-[1.2fr,1fr]">
          {/* Left: copy + actions */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col justify-between rounded-3xl bg-white/90 p-6 shadow-sm ring-1 ring-slate-200"
          >
            <div>
              <h1 className="text-4xl font-extrabold text-center tracking-tight text-slate-900 sm:text-5xl">
                <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text  text-transparent">
                  Contact MDC
                </span>
              </h1>
              <p className="mt-3 max-w-xl text-slate-600">
                Questions about <strong>Ultrasound, Lab Tests, or ECG</strong>?
                Choose how you’d like to reach us.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Ultrasound", "Laboratory", "ECG"].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Vertical action stack */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-1">
              <Action
                href={CONTACT.mapsUrl}
                tone="blue"
                ariaLabel="Open directions in Google Maps"
              >
                <Navigation className="h-5 w-5" /> Directions
              </Action>
              <Action
                href={waLink("Assalam o Alaikum, I’d like to inquire at MDC.")}
                tone="green"
                ariaLabel={`Chat on WhatsApp ${CONTACT.mobileDisplay}`}
              >
                <Smartphone className="h-5 w-5" /> WhatsApp
              </Action>
              <Action
                href={CONTACT.landlineHref}
                tone="white"
                ariaLabel={`Call landline ${CONTACT.landlineDisplay}`}
              >
                <Phone className="h-5 w-5" /> {CONTACT.landlineDisplay}
              </Action>
            </div>
          </motion.div>

          {/* Right: live map card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <Card>
              <div className="relative h-[360px] overflow-hidden rounded-3xl">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={CONTACT.mapsEmbed}
                  title="Mariam Diagnostic Center Location"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Address badge */}
                <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
                  <MapPin className="h-4 w-4 text-blue-700" /> {CONTACT.address}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CONTACT & HOURS PANEL (list layout) */}
      <section className="px-4 sm:px-6 lg:px-8 pb-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-6xl"
        >
          <Card>
            <CardBody className="divide-y divide-slate-200 p-0">
              {/* row */}
              <div className="flex items-center justify-between gap-4 p-5">
                <div className="flex items-start gap-3">
                  <span className="rounded-xl bg-blue-50 p-3 ring-1 ring-blue-200">
                    <Phone className="h-6 w-6 text-blue-700" />
                  </span>
                  <div>
                    <p className="text-sm text-slate-500">Landline</p>
                    <p className="text-lg font-semibold text-slate-900">
                      {CONTACT.landlineDisplay}
                    </p>
                  </div>
                </div>
                <a
                  href={CONTACT.landlineHref}
                  className="rounded-full border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Call
                </a>
              </div>

              <div className="flex items-center justify-between gap-4 p-5">
                <div className="flex items-start gap-3">
                  <span className="rounded-xl bg-emerald-50 p-3 ring-1 ring-emerald-200">
                    <Smartphone className="h-6 w-6 text-emerald-700" />
                  </span>
                  <div>
                    <p className="text-sm text-slate-500">Mobile / WhatsApp</p>
                    <p className="text-lg font-semibold text-slate-900">
                      {CONTACT.mobileDisplay}
                    </p>
                    <p className="text-xs text-slate-500">0330 MDCMDC1</p>
                  </div>
                </div>
                <a
                  href={waLink(
                    "Assalam o Alaikum, I’d like to book a test at MDC."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-emerald-200 bg-emerald-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  Chat
                </a>
              </div>

              <div className="flex items-center justify-between gap-4 p-5">
                <div className="flex items-start gap-3">
                  <span className="rounded-xl bg-indigo-50 p-3 ring-1 ring-indigo-200">
                    <Mail className="h-6 w-6 text-indigo-700" />
                  </span>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="text-lg font-semibold text-slate-900">
                      {CONTACT.email}
                    </p>
                  </div>
                </div>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="rounded-full border border-indigo-200 bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                  Email
                </a>
              </div>

              <div className="flex flex-col gap-2 p-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="rounded-xl bg-amber-50 p-3 ring-1 ring-amber-200">
                    <Clock className="h-6 w-6 text-amber-700" />
                  </span>
                  <div>
                    <p className="text-sm text-slate-500">Doctor Timings</p>
                    <p className="text-sm text-slate-900">
                      Female: <strong>{CONTACT.hoursFemale}</strong>
                    </p>
                    <p className="text-sm text-slate-900">
                      Male: <strong>{CONTACT.hoursMale}</strong>
                    </p>
                  </div>
                </div>
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center justify-center rounded-full border border-slate-200 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 sm:mt-0"
                >
                  <Navigation className="mr-2 h-4 w-4" /> Open Maps
                </a>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </section>

      {/* TRUST STRIP */}
      <section className="px-4 sm:px-6 lg:px-8 pt-2 pb-2">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              icon: <ShieldCheck className="h-5 w-5" />,
              title: "Respect & Care",
              body: "Patient‑first culture.",
            },
            {
              icon: <HeartPulse className="h-5 w-5" />,
              title: "Accurate Diagnostics",
              body: "Modern ultrasound, lab & ECG.",
            },
            {
              icon: <Users className="h-5 w-5" />,
              title: "Helpful Team",
              body: "Guidance at every step.",
            },
          ].map((b) => (
            <Card key={b.title}>
              <CardBody className="flex items-start gap-3">
                <div className="rounded-lg bg-slate-100 p-2">{b.icon}</div>
                <div>
                  <h3 className="font-semibold text-slate-900">{b.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{b.body}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* TEAM – collapsed for a cleaner contact page */}
      <section id="team" className="px-4 sm:px-6 lg:px-8 py-8">
        <details className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm open:shadow-md">
          <summary className="cursor-pointer list-none text-center text-lg font-semibold text-slate-800">
            Meet our team
          </summary>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mx-auto mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {TEAM.map((m, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-3xl bg-white ring-1 ring-slate-200 shadow-sm"
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
                  <h3 className="text-lg font-bold text-slate-900">{m.name}</h3>
                  <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-700">
                    {m.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </details>
      </section>

      {/* FLOATING DOCK */}
      <div className="fixed bottom-5 right-5 z-50 grid grid-cols-3 gap-2 rounded-full border border-slate-200 bg-white/95 p-2 shadow-lg backdrop-blur">
        <a
          href={CONTACT.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open directions"
          className="inline-flex items-center justify-center rounded-full px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          <Navigation className="mr-2 h-4 w-4" />
          Directions
        </a>
        <a
          href={CONTACT.landlineHref}
          aria-label={`Call ${CONTACT.landlineDisplay}`}
          className="inline-flex items-center justify-center rounded-full px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          <Phone className="mr-2 h-4 w-4" />
          {CONTACT.landlineDisplay}
        </a>
        <a
          href={waLink("Assalam o Alaikum, I need assistance at MDC.")}
          target="_blank"
          rel="noreferrer"
          aria-label={`Chat on WhatsApp ${CONTACT.mobileDisplay}`}
          className="inline-flex items-center justify-center rounded-full bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-green-700"
        >
          <Smartphone className="mr-2 h-4 w-4" />
          WhatsApp
        </a>
      </div>

      {/* FOOTER spacing */}
      <div className="h-24" />
    </main>
  );
}
