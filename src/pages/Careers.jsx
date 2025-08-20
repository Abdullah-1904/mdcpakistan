import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  HeartPulse,
  Users,
  Sparkles,
  Send,
} from "lucide-react";

// ---------- Helpers ----------
const waLink = () =>
  `https://wa.me/923306326321?text=${encodeURIComponent(
    `Hello MDC, I’d like to apply for a job. Here is my CV:`
  )}`;

const emailLink = () =>
  `mailto:official@mdcpakistan.com?subject=${encodeURIComponent(
    `Job Application: @ MDC`
  )}&body=${encodeURIComponent(
    `Assalam o Alaikum,\n\nI’d like to apply for the “Name of the role” at Mariam Diagnostic Center (MDC). Please find my CV attached.\n\nName:\nPhone:\nExperience:\n\nRegards,\n`
  )}`;

const jobs = [
  {
    id: "receptionist",
    title: "Receptionist",
    description:
      "Friendly, organized front-desk professional to manage patient flow and appointments.",
    timing: "Morning",
    location: "Bhara Kahu, Islamabad",
    perks: [
      "Patient-first culture",
      "Growth mindset",
      "Respectful environment",
    ],
  },
  // Example: add more roles easily
  // {
  //   id: "medical-officer",
  //   title: "Medical Officer (MBBS)",
  //   description:
  //     "MBBS with ultrasound & gyne OPD experience.",
  //   timing: "Mon–Sat, 9:00 AM – 2:00 PM",
  //   location: "Bhara Kahu, Islamabad",
  //   perks: ["Hands-on ultrasound", "Mentorship", "Modern equipment"],
  // },
];

// ---------- Decorative Background SVG ----------
const BgBlob = () => (
  <svg
    aria-hidden="true"
    className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-[420px] w-full opacity-30"
    viewBox="0 0 1108 632"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>
    <path
      fill="url(#g)"
      d="M0 120C140 -40 370 -40 570 120s420 160 538 60v452H0V120z"
    />
  </svg>
);

// ---------- Small UI atoms (no external UI kit) ----------
const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}
  >
    {children}
  </div>
);

const CardBody = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const Button = ({
  as: As = "a",
  href,
  onClick,
  children,
  className = "",
  ...props
}) => (
  <As
    href={href}
    onClick={onClick}
    {...props}
    className={`inline-flex items-center justify-center gap-2 rounded-xl border border-transparent px-4 py-2 text-sm font-semibold shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
  >
    {children}
  </As>
);

// ---------- Page ----------
function Careers() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-slate-50 via-white to-white text-slate-800">
      <BgBlob />

      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-24 pb-10">
        <h1 className="mx-auto max-w-6xl text-center text-4xl font-extrabold leading-tight md:text-5xl">
          <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-red-600 ">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Careers at Mariam Diagnostic Center — MDC")
                  .callFunction(() => {
                    const cur = document.querySelector(".Typewriter__cursor");
                    if (cur) cur.style.display = "none"; // hide cursor after typing
                  })
                  .start();
              }}
              options={{
                autoStart: true,
                loop: false,
                delay: 60,
                deleteSpeed: 0,
              }}
            />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600 md:text-lg"
        >
          Join compassionate professionals delivering quality healthcare at MDC
          Bhara Kahu, Islamabad.
        </motion.p>

        {/* Quick stats / value props */}
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { Icon: ShieldCheck, label: "Respectful culture" },
            { Icon: HeartPulse, label: "Patient-first" },
            { Icon: Users, label: "Supportive team" },
            { Icon: Sparkles, label: "Growth focused" },
          ].map(({ Icon, label }, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-sm backdrop-blur"
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Openings */}
      <section
        aria-labelledby="openings"
        className="mx-auto w-full max-w-6xl px-6 pb-16"
      >
        <h2 id="openings" className="mb-4 text-2xl font-bold text-blue-700">
          Current Openings
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {jobs.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
            >
              <Card className="relative overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-600 to-blue-700"
                  aria-hidden="true"
                />
                <CardBody>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-xl font-bold text-red-700">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {job.perks?.slice(0, 3).map((p) => (
                        <Badge key={p}>{p}</Badge>
                      ))}
                    </div>
                  </div>

                  <p className="mt-2 text-slate-700">{job.description}</p>

                  <div className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="h-4 w-4" />
                      <span>
                        <span className="font-medium">Timing:</span>{" "}
                        {job.timing}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="h-4 w-4" />
                      <span>
                        <span className="font-medium">Location:</span>{" "}
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <Button
                      as="a"
                      href={waLink()}
                      className="bg-green-600 text-white hover:bg-green-700 focus:ring-green-600"
                      aria-label={`Apply for  via WhatsApp`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="h-4 w-4" />
                      Apply via WhatsApp
                    </Button>
                    <Button
                      as="a"
                      href={emailLink()}
                      className="bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600"
                      aria-label={`Apply for ${job.title} via Email`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Mail className="h-4 w-4" />
                      Apply via Email
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section
        aria-labelledby="benefits"
        className="mx-auto w-full max-w-6xl px-6 pb-16"
      >
        <h2 id="benefits" className="mb-6 text-2xl font-bold text-blue-700">
          Why join MDC
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              icon: <ShieldCheck className="h-5 w-5" />,
              title: "Respect & integrity",
              body: "A supportive, inclusive workplace where your voice matters.",
            },
            {
              icon: <HeartPulse className="h-5 w-5" />,
              title: "Impactful work",
              body: "Serve the community with quality, patient‑first care.",
            },
            {
              icon: <Users className="h-5 w-5" />,
              title: "Learning & growth",
              body: "Mentorship, modern equipment, and real responsibility.",
            },
          ].map((b) => (
            <Card key={b.title}>
              <CardBody className="flex items-start gap-3">
                <div className="rounded-lg bg-slate-100 p-2">{b.icon}</div>
                <div>
                  <h3 className="font-semibold">{b.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{b.body}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* How to Apply */}
      <section
        aria-labelledby="apply"
        className="mx-auto w-full max-w-6xl px-6 pb-28"
      >
        <h2 id="apply" className="mb-6 text-2xl font-bold text-blue-700">
          Apply in 2 easy ways
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardBody className="text-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="mx-auto h-12 w-12"
                loading="lazy"
              />
              <h3 className="mt-3 text-lg font-semibold">WhatsApp</h3>
              <p className="mt-1 text-sm text-slate-600">
                Send your CV and role name to our official number.
              </p>
              <Button
                as="a"
                href={waLink("")}
                className="mt-4 bg-green-600 text-white hover:bg-green-700 focus:ring-green-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-4 w-4" /> 0330 6326321
              </Button>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="text-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
                alt="Gmail"
                className="mx-auto h-12 w-12"
                loading="lazy"
              />
              <h3 className="mt-3 text-lg font-semibold">Email</h3>
              <p className="mt-1 text-sm text-slate-600">
                Email your CV with the job title in the subject line.
              </p>
              <Button
                as="a"
                href={emailLink("")}
                className="mt-4 bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600"
              >
                <Mail className="h-4 w-4" /> official@mdcpakistan.com
              </Button>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Sticky CTA Bar */}
      <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-sm font-medium text-slate-700">
            Ready to apply? Reach us on WhatsApp or Email.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              as="a"
              href={waLink()}
              className="bg-green-600 text-white hover:bg-green-700 focus:ring-green-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="h-4 w-4" /> WhatsApp
            </Button>
            <Button
              as="a"
              href={emailLink()}
              className="bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600"
            >
              <Mail className="h-4 w-4" /> Email
            </Button>
          </div>
        </div>
      </div>

      {/* SEO: JSON-LD for a JobPosting (helps Google Jobs) */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: jobs[0]?.title || "Job at MDC",
            description: jobs[0]?.description,
            datePosted: new Date().toISOString().slice(0, 10),
            employmentType: "FULL_TIME",
            hiringOrganization: {
              "@type": "Organization",
              name: "Mariam Diagnostic Center (MDC)",
              sameAs: "https://mdcpakistan.com",
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bhara Kahu",
                addressRegion: "Islamabad Capital Territory",
                addressCountry: "PK",
              },
            },
            applicantLocationRequirements: {
              "@type": "Country",
              name: "Pakistan",
            },
            directApply: true,
          }),
        }}
      />
    </main>
  );
}

export default Careers;
