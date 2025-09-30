import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {
  MapPin,
  Clock,
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck,
  HeartPulse,
  Users,
} from "lucide-react";

/**
 * MDC Careers – Multi‑role Hiring Page (Poster style per job)
 * Tailwind + Framer Motion + lucide-react icons.
 *
 * Updates per request:
 *  - Removed clinician illustration from all jobs (now and future).
 *  - Jobs display two per row on md+ screens (md:grid-cols-2).
 *  - Each job renders the same poster style: TITLE + (BADGE) + pills + checks.
 *  - Open Applications CTA kept so anyone can email a CV anytime.
 */

// ---------- Editable contact info ----------
const MDC = {
  site: "https://mdcpakistan.com",
  email: "official@mdcpakistan.com",
  phoneDisplay: "0312 1576125",
  // WhatsApp international format without +, spaces or dashes
  waNumberIntl: "923121576125",
};

// WhatsApp / Email helpers
const waLink = (message) =>
  `https://wa.me/${MDC.waNumberIntl}?text=${encodeURIComponent(
    message ||
      "Hello MDC Hiring Team, I’d like to apply for a role at MDC. Here is my CV:"
  )}`;

const emailLink = ({ subject, body }) =>
  `mailto:${MDC.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

// ---------- Jobs data ----------
// Add roles here; each one will render in the same poster layout.
const jobs = [
  {
    id: "radiologist",
    title: "Radiologist",
    badge: "PMDC Registered",
    experience: "Minimum 2 years of experience",
    location: "Bhara Kahu, Islamabad",
    timing: "Morning & Evening",
    requirements: [
      "PMDC registration (mandatory)",
      "Ultrasound expertise: OB/Gyn, Abdomen, KUB; Doppler preferred",
      "X-ray / CT / MRI reporting (preferred)",
      "Competitive salary",
      "Female candidates are encouraged to apply",
    ],
    blurb:
      "Lead high‑quality imaging and reporting at MDC using modern ultrasound and digital workflows.",
  },
  // {
  //   id: "pathologist",
  //   title: "Pathologist",
  //   badge: "PMDC Registered",
  //   experience: "Minimum 1 year of experience",
  //   location: "Bhara Kahu, Islamabad",
  //   timing: "Morning / Evening",
  //   requirements: [
  //     "PMDC registration (mandatory)",
  //     "Expertise in any: Hematology, Biochemistry, Microbiology",
  //     "Histopathology/reporting (preferred)",
  //     "Supervision of lab, verifications",
  //     "Competitive salary",
  //   ],
  //   blurb:
  //     "Oversee lab quality, verifications and reporting across core disciplines.",
  // },
  // =======
  // ← Add more roles later by copying the same object shape.
];

// ---------- UI atoms ----------
const Pill = ({ icon: Icon, children }) => (
  <span className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm">
    {Icon && <Icon className="h-4 w-4" />} {children}
  </span>
);

const ButtonLink = ({ href, children, tone = "primary", ariaLabel }) => {
  const tones = {
    primary:
      "bg-blue-700 hover:bg-blue-800 focus:ring-blue-700 text-white border-transparent",
    success:
      "bg-green-600 hover:bg-green-700 focus:ring-green-600 text-white border-transparent",
    ghost:
      "bg-white hover:bg-slate-50 border-slate-300 text-slate-700 focus:ring-slate-400",
  };
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold shadow-sm transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${tones[tone]}`}
    >
      {children}
    </a>
  );
};

// Poster-style card used for each job
const JobPoster = ({ job }) => (
  <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <h2 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
      <span className="block text-slate-900">{job.title.toUpperCase()}</span>
      <span className="mt-1 block text-2xl font-black tracking-wide text-blue-800 md:text-3xl">
        ({job.badge.toUpperCase()})
      </span>
    </h2>
    <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
      {job.experience}
    </p>

    <div className="mt-4 flex flex-wrap items-center gap-3">
      <Pill icon={MapPin}>{job.location}</Pill>
      <Pill icon={Clock}>{job.timing}</Pill>
    </div>

    <motion.ul
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="mt-6 space-y-3 text-slate-700"
    >
      {job.requirements.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-blue-700" />
          <span>{item}</span>
        </li>
      ))}
    </motion.ul>

    <div className="mt-6 flex flex-wrap items-center gap-3">
      <ButtonLink
        tone="success"
        href={waLink(
          `Hello, I’d like to apply for the ${job.title} role at MDC. Here is my CV:`
        )}
        ariaLabel={`Apply for ${job.title} via WhatsApp`}
      >
        <Phone className="h-4 w-4" /> Apply via WhatsApp – {MDC.phoneDisplay}
      </ButtonLink>
      <ButtonLink
        tone="primary"
        href={emailLink({
          subject: `Job Application: ${job.title} – MDC`,
          body: `Assalam o Alaikum,

I’d like to apply for the ${job.title} role at Mariam Diagnostic Center (MDC). Please find my CV attached.

Name:
Phone:
Experience:

Regards,
`,
        })}
        ariaLabel={`Apply for ${job.title} via Email`}
      >
        <Mail className="h-4 w-4" /> Apply via Email
      </ButtonLink>
    </div>
  </section>
);

// ---------- Page ----------
export default function Careers() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white text-slate-800">
      {/* HIRING ribbon once at the top */}
      <section className="py-8">
        <div className="relative mx-auto w-full max-w-6xl px-6">
          <div className="rounded-2xl bg-gradient-to-r from-red-600 via-red-500 to-red-700 px-6 py-4 shadow-lg">
            <p className="text-center text-2xl font-extrabold tracking-widest text-white md:text-3xl">
              HIRING
            </p>
          </div>
        </div>
      </section>

      {/* Jobs grid – 2 per row on md+ */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-6">
        <div className="grid gap-8 md:grid-cols-2">
          {jobs.map((job) => (
            <JobPoster key={job.id} job={job} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto my-2 w-full max-w-6xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200" />
      </div>

      {/* VALUE PROPS */}
      <section className="mx-auto w-full max-w-6xl px-6 py-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              icon: <ShieldCheck className="h-5 w-5" />,
              title: "Respectful culture",
              body: "Inclusive team with integrity and clear SOPs.",
            },
            {
              icon: <HeartPulse className="h-5 w-5" />,
              title: "Patient‑first",
              body: "Serve our community with quality care and empathy.",
            },
            {
              icon: <Users className="h-5 w-5" />,
              title: "Growth focused",
              body: "Mentorship and modern ultrasound equipment.",
            },
          ].map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-slate-100 p-2">{b.icon}</div>
                <div>
                  <h3 className="font-semibold text-slate-900">{b.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{b.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OPEN APPLICATIONS – send CV even if not hiring */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-28">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Didn’t find your role?
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
            We welcome general applications. Send your CV to{" "}
            <span className="font-semibold">{MDC.email}</span> and we’ll reach
            out when a suitable role opens.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <ButtonLink
              tone="primary"
              href={emailLink({
                subject: "General Application – MDC",
                body: `Assalam o Alaikum,

I’d like to submit my CV for future openings at Mariam Diagnostic Center (MDC).

Name:
Phone:
Target Role(s):
Experience:

Regards,
`,
              })}
              ariaLabel="Send general application via email"
            >
              <Mail className="h-4 w-4" /> Send your CV via Email
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-sm font-medium text-slate-700">
            Ready to apply or share your CV?
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <ButtonLink
              tone="success"
              href={waLink()}
              ariaLabel="Open WhatsApp"
            >
              <Phone className="h-4 w-4" /> WhatsApp
            </ButtonLink>
            <ButtonLink
              tone="primary"
              href={emailLink({
                subject: "General Application – MDC",
                body: `Assalam o Alaikum,

I’d like to submit my CV for openings at MDC. Please find it attached.

Name:
Phone:
Target Role(s):
Experience:

Regards,
`,
              })}
              ariaLabel="Open Email"
            >
              <Mail className="h-4 w-4" /> Email CV
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* SEO: JSON‑LD for ALL JobPostings */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            jobs.map((job) => ({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              title: `${job.title} (${job.badge})`,
              description: job.blurb,
              datePosted: new Date().toISOString().slice(0, 10),
              employmentType: "FULL_TIME",
              jobLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Bhara Kahu",
                  addressRegion: "Islamabad Capital Territory",
                  addressCountry: "PK",
                },
              },
              hiringOrganization: {
                "@type": "Organization",
                name: "Mariam Diagnostic Center (MDC)",
                sameAs: MDC.site,
              },
              directApply: true,
              applicantLocationRequirements: {
                "@type": "Country",
                name: "Pakistan",
              },
              workHours: job.timing,
            }))
          ),
        }}
      />

      {/* Page Title animator (discreet) */}
      <div className="sr-only" aria-hidden>
        <Typewriter
          onInit={(t) => t.typeString("Careers at MDC").start()}
          options={{ autoStart: true, loop: false, delay: 60, deleteSpeed: 0 }}
        />
      </div>
    </main>
  );
}
