import React from "react";
import { motion } from "framer-motion";
import Cards from "./components/Cards";
import { Helmet } from "react-helmet";

const App = () => {
  <Helmet>
    <meta
      name="description"
      content="Best Diagnostic Center in Islamabad catering to patients with care"
    />
    <title>Mariam Diagnostic Center</title>
  </Helmet>;
  const cardData = [
    {
      title: "Blood CP (Complete Picture)",
      description: (
        <p style={{ textAlign: "justify" }}>
          Complete blood picture (Complete Blood Count) is a common test that
          measures red blood cells, white blood cells, platelets and other
          components of your blood. <br /> It helps detect conditions such as
          anemia, infection, and various blood disorders by revealing
          abnormalities in cell counts or morphology.
        </p>
      ),
      imageUrl:
        "https://images.pexels.com/photos/4047146/pexels-photo-4047146.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "ECG (Electro Cardiogram)",
      description: (
        <p style={{ textAlign: "justify" }}>
          Electrocardiogram (ECG or EKG) is a diagnostic test that records the
          electrical activity of the heart over time. It helps detect heart
          conditions, monitor heart rhythm, and assess the overall heart health.
        </p>
      ),
      imageUrl:
        "https://images.pexels.com/photos/6129683/pexels-photo-6129683.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Ultra Sound",
      description: (
        <p style={{ textAlign: "justify" }}>
          Ultrasound is a medical imaging technique that uses high-frequency
          sound waves to create real-time images of the body's internal
          structures. <br />
          It is commonly used for diagnosing conditions, monitoring pregnancies,
          and guiding certain medical procedures.
        </p>
      ),

      imageUrl:
        "https://images.pexels.com/photos/7088840/pexels-photo-7088840.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Free Home Sampling",
      description: (
        <p style={{ textAlign: "justify" }}>
          We offer a unique free home sampling service, connecting patients in
          the Barakaho region with quality care. Experience convenience and
          trusted service right at your doorstep!
        </p>
      ),

      imageUrl: require("./pics/Barakaho_Map.png"),
    },
    {
      title: "Experienced Medical Team",
      description: (
        <p style={{ textAlign: "justify" }}>
          Our diagnostic center has a skilled and experienced team ready to care
          for and support our patients. We are here to provide the best service
          for your health needs!
        </p>
      ),

      imageUrl:
        "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      title: "Our First Center",
      description: (
        <p style={{ textAlign: "justify" }}>
          We are proud to announce the opening of our first diagnostic center
          branch in the Islamabad. Our skilled and experienced team is ready to
          provide the best care for your health needs. This is just the
          beginning, as we plan to expand our services to every city across
          Pakistan in the near future!
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
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center items-center h-screen"
      >
        <div className="flex flex-col items-center text-center px-4">
          {/* Heading with delayed animation for text appearance */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 mb-2"
          >
            Mariam Diagnostic Center
          </motion.h1>
          {/* Sub-heading with staggered text animation */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600"
          >
            MDC Your Trusted Diagnostic Center
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
