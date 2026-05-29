// SplashScreen.jsx

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import bgVideo from "../../assets/vdo.mp4";

export default function SplashScreen() {
  const navigate = useNavigate();

  // Redirect to login after 3.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative flex items-center justify-center w-full h-screen overflow-hidden font-[Poppins]">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Logo Text */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="font-extrabold tracking-wide leading-tight text-[40px] sm:text-[60px] md:text-[85px] lg:text-[110px] xl:text-[130px]"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <span className="text-red-500">Handy</span>
          <span className="text-white">Banjo</span>
        </motion.h1>
      </motion.div>
    </div>
  );
}