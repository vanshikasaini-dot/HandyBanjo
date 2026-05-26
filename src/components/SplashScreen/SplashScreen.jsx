// SplashScreen.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function SplashScreen() {
    const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="
        w-full
        h-screen
        flex
        justify-center
        items-center
        overflow-hidden
        bg-white
        px-4
        font-[Poppins]
      "
    >
      {/* MAIN TEXT */}
      <motion.div
        className="relative z-10 w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h1
          className="
            font-extrabold
            tracking-wide
            text-center
            leading-tight

            text-[38px]
            sm:text-[55px]
            md:text-[80px]
            lg:text-[110px]
            xl:text-[130px]
          "
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <span className="text-red-500">Handy</span>{" "}
          <span className="text-black">Banjo</span>
        </motion.h1>
      </motion.div>
    </div>
  );
}
