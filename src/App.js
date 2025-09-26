import React from "react";
import { motion } from "framer-motion";
import Cards from "./components/Cards";
import { Helmet } from "react-helmet";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
// ReviewCarousel.jsx
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
const reviews = [
  {
    name: "Afshan Abbasi",
    text: "I recently visited MDC and was thoroughly impressed with the experience. The lab maintains excellent hygiene standards, which is a top priority in any medical setting.",
    rating: 5,
  },
  {
    name: "Rida Wasiq",
    text: "I had an excellent experience at MDC.The cleanliness and organization of the facility were truly impressive, creating a comfortable and hygienic environment for patients.",
    rating: 5,
  },
  {
    name: "Raja Salman",
    text: "The laboratory was unexpectedly very clean and the rates are reasonable.",
    rating: 5,
  },
];

const App = () => {
  <Helmet>
    <meta
      name="description"
      content="Best Diagnostic Center in Islamabad catering to patients with care"
    />
    <title>Home - Mariam Diagnostic Center (MDC)</title>
  </Helmet>;
  const cardData = [
    {
      title: "Blood Tests (CBC & Full Lab)",
      description: (
        <p style={{ textAlign: "justify" }}>
          We perform all kinds of blood tests — from CBC/Complete Blood Count to
          Vitamin D/B12 and more on modern analyzers.
        </p>
      ),
      imageUrl:
        "https://images.pexels.com/photos/4047146/pexels-photo-4047146.jpeg?auto=compress&cs=tinysrgb&w=600",
    },

    {
      title: "Ultra Sound",
      description: (
        <p style={{ textAlign: "justify" }}>
          Real-time imaging using safe sound waves (no radiation). We perform
          abdominal, pelvic/gyne, obstetric, thyroid and soft-tissue scans to
          diagnose and guide treatment.
        </p>
      ),

      imageUrl:
        "https://images.pexels.com/photos/7088840/pexels-photo-7088840.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "ECG (Electro Cardiogram)",
      description: (
        <p style={{ textAlign: "justify" }}>
          A quick, painless test that records your heart’s electrical activity
          in minutes. Helps detect rhythm problems and heart strain — same-day
          report.
        </p>
      ),
      imageUrl:
        "https://images.pexels.com/photos/6129683/pexels-photo-6129683.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Child Specialist",
      description: (
        <p style={{ textAlign: "justify" }}>
          Complete care for infants, children and teens — fever and infections,
          growth & nutrition, allergies, and vaccination guidance in a
          child-friendly environment.
        </p>
      ),
      imageUrl:
        "https://images.pexels.com/photos/3662664/pexels-photo-3662664.jpeg?auto=compress&cs=tinysrgb&w=600", // or your own image
    },
    {
      title: "Gynecological Consultation",
      description: (
        <p style={{ textAlign: "justify" }}>
          Women’s health services including antenatal care, menstrual problems,
          PCOS, infections and family planning - with privacy, comfort and
          evidence-based care.
        </p>
      ),
      imageUrl:
        "https://images.pexels.com/photos/7088526/pexels-photo-7088526.jpeg?auto=compress&cs=tinysrgb&w=600", // or your own image
    },
    {
      title: "General Physician",
      description: (
        <p style={{ textAlign: "justify" }}>
          Our experienced General Physician delivers primary care. Diagnose and
          treats common illnesses, manages diabetes/hypertension, provides
          preventive checkups and refers to specialists when needed.
        </p>
      ),
      imageUrl:
        "https://images.pexels.com/photos/8376154/pexels-photo-8376154.jpeg", // or your own image
    },
    {
      title: "Free Home Sampling",
      description: (
        <p style={{ textAlign: "justify" }}>
          Free home blood sample collection in Bhara Kahu area. Book via
          call/WhatsApp - our phlebotomists with sterile kits will be reach at
          your given address and reports delivered on WhatsApp.
        </p>
      ),
      imageUrl: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.8413287898443!2d73.18554019999999!3d33.7389189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc396a431e4f7%3A0x58f2111610bf8f84!2sMariam%20Diagnostic%20Center%20-%20MDC!5e0!3m2!1sen!2s!4v1749153676230!5m2!1sen!2s"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ),
    },
    {
      title: "Experienced Medical Team",
      description: (
        <p style={{ textAlign: "justify" }}>
          Skilled doctors and lab technologists using modern equipment, provide
          accurate diagnostics and caring treatment.
        </p>
      ),

      imageUrl:
        "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      title: "MDC Bhara Kahu - Our First Center",
      description: (
        <p style={{ textAlign: "justify" }}>
          Proudly serving Islamabad from our Bhara Kahu center. We plan to
          expand across Pakistan.
        </p>
      ),
      imageUrl: require("./pics/Faisal_mosque_1.jpg"),
    },

    // Add more card data here...
  ];
  return (
    <div>
      {/* Animated text container */}
      <motion.div
        cursorBlinking={false}
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center items-center h-screen"
      >
        <div className="flex flex-col items-center text-center px-4">
          {/* Keep Heading Static */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 mb-2"
          >
            Mariam Diagnostic Center
          </motion.h1>

          {/* Animate Subheading (Typewriter) */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600"
          >
            <Typewriter
              words={[
                "MDC Your Trusted Diagnostic Center",
                "Best Diagnostic Center in Bhara Kahu",
                "Quality Services",
                "MDC Your Trusted Diagnostic Center",
              ]}
              loop={1} // run through sequence once
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1200}
              cursorBlinking={false}
            />
          </motion.h2>
        </div>
      </motion.div>
      {/* Cards */}
      <div className="flex flex-wrap justify-center">
        {cardData.map((card, index) => (
          <Cards
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
      {/* Cards */}

      {/* 
      {/* ============ Carosel ======================================== */}
      {/* <div className="carousel carousel-vertical w-full h-screen overflow-auto"> */}

      <div className="flex justify-center mt-12 mb-8 space-x-6">
        {/* Call Now Button */}
        <a
          href="tel:+923306326321"
          className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover-shake flex items-center space-x-2"
        >
          <FaPhoneAlt />
          <span>Call Now</span>
        </a>

        {/* View Address Button */}
        <a
          href="https://www.google.com/maps?q=Mariam+Diagnostic+Center+Bhara+Kahu"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 hover:bg-red-700 text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover-shake flex items-center space-x-2"
        >
          <FaMapMarkerAlt />
          <span>View Address</span>
        </a>
      </div>
      {/* google review section below */}

      <section className=" py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          What Our Patients Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/40 backdrop-blur-md border border-gray-300 shadow-xl rounded-2xl p-6 mx-2 h-[300px] flex flex-col justify-between hover:shadow-2xl hover:scale-[1.02] transition duration-300">
                <div className="text-yellow-500 text-sm flex gap-1 mb-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="text-gray-700 italic text-base leading-relaxed mt-2 mb-6">
                  “{review.text}”
                </p>

                <div className="text-right text-gray-900 font-bold text-sm">
                  — {review.name}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-6">
          <a
            href="https://maps.app.goo.gl/7wa3zNbi5DKatsHdA?g_st=com.google.maps.preview.copy"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            See More Reviews on Google
          </a>
        </div>
      </section>
      {/* google review section code*/}
    </div>
  );
};

export default App;

<div className="carousel carousel-vertical w-full">
  {/* Slide 1: Blood Test */}
  <div className="carousel-item relative w-full h-screen">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
      alt="Blood Test"
      className="object-cover w-full h-full"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <h2 className="text-white text-2xl font-bold">Blood Test</h2>
    </div>
  </div>
  {/* Slide 2: Urine Test */}
  <div className="carousel-item relative w-full h-screen">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      alt="Urine Test"
      className="object-cover w-full h-full"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <h2 className="text-white text-2xl font-bold">Urine Test</h2>
    </div>
  </div>
  {/* Slide 3: X-Ray */}
  <div className="carousel-item relative w-full h-screen">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      alt="X-Ray"
      className="object-cover w-full h-full"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <h2 className="text-white text-2xl font-bold">X-Ray</h2>
    </div>
  </div>
  {/* Add more slides for all the lab tests you offer */}
</div>;
